// src/bot/telegramBot.js
const TelegramBot = require('node-telegram-bot-api');
const { buscarConciertosPorCiudad } = require('../services/ticketmasterService');

const usuariosBD = new Map();

function iniciarBot() {
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token || token === 'tu_token_de_telegram_aqui') {
    console.warn("⚠️ TELEGRAM_BOT_TOKEN no configurado en .env. Módulo del Bot en espera.");
    return { bot: null, usuariosBD };
  }

  // Solución al problema de importación de la librería
  const BotClass = TelegramBot.default || TelegramBot;
  const bot = new BotClass(token, { polling: true });

  console.log("🤖 Bot de Telegram conectado y listo para escuchar comandos.");

  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const mensaje = `
👋 ¡Hola *${msg.from.first_name}*! Bienvenido a *ConcertAlert Bot*.

Te ayudaré a enterarte de conciertos en tu ciudad y te recomendaré las mejores zonas relación precio-calidad.

📌 *Comandos disponibles:*
• \`/ciudad [Tu Ciudad]\` - Configura tu ciudad (ej: \`/ciudad Guadalajara\`).
• \`/favoritos [Artista1, Artista2]\` - Guarda tus artistas favoritos.
• \`/buscar\` - Consulta los próximos conciertos.
    `;
    bot.sendMessage(chatId, mensaje, { parse_mode: 'Markdown' });
  });

  bot.onText(/\/ciudad (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const ciudadInput = match[1].trim();

    const usuario = usuariosBD.get(chatId) || { id: chatId, artistas: [] };
    usuario.ciudad = ciudadInput;
    usuariosBD.set(chatId, usuario);

    bot.sendMessage(chatId, `📍 Ciudad guardada: *${ciudadInput}*`, { parse_mode: 'Markdown' });
  });

  bot.onText(/\/favoritos (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const artistasInput = match[1].split(',').map(a => a.trim());

    const usuario = usuariosBD.get(chatId) || { id: chatId, ciudad: 'Guadalajara' };
    usuario.artistas = artistasInput;
    usuariosBD.set(chatId, usuario);

    bot.sendMessage(chatId, `⭐ Artistas guardados: *${artistasInput.join(', ')}*`, { parse_mode: 'Markdown' });
  });

  bot.onText(/\/buscar/, async (msg) => {
    const chatId = msg.chat.id;
    const usuario = usuariosBD.get(chatId) || { ciudad: 'Guadalajara' };

    bot.sendMessage(chatId, `🔍 Buscando eventos en *${usuario.ciudad}*...`, { parse_mode: 'Markdown' });

    const conciertos = await buscarConciertosPorCiudad(usuario.ciudad);

    if (conciertos.length === 0) {
      bot.sendMessage(chatId, "No se encontraron conciertos próximos en esa ciudad.");
      return;
    }

    for (const c of conciertos) {
      const respuesta = `
🎵 *${c.artista}*
📍 *Lugar:* ${c.recinto}
📅 *Fecha:* ${c.fecha}

💡 *Recomendación Precio-Calidad:*
_${c.recomendaciones.consejo}_

🏷️ *Zonas sugeridas:* ${c.recomendaciones.zonasRecomendadas.join(', ')}
      `;
      bot.sendMessage(chatId, respuesta, { parse_mode: 'Markdown' });
    }
  });

  return { bot, usuariosBD };
}

module.exports = { iniciarBot };