// src/app.js
require('dotenv').config(); // <-- Debe ir en la primerísima línea

const express = require('express');
const cron = require('node-cron');
const { iniciarBot } = require('./bot/telegramBot');
const { buscarConciertosPorCiudad } = require('./services/ticketmasterService');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'OK', app: 'ConcertAlert Bot Node.js Server' });
});

// Inicializar el bot de Telegram
const botInstancia = iniciarBot();

// Cron job en segundo plano
cron.schedule('0 * * * *', async () => {
  console.log('⏰ [Cron Job] Verificando cartelera de eventos...');
  if (botInstancia && botInstancia.bot && botInstancia.usuariosBD) {
    for (const [chatId, usuario] of botInstancia.usuariosBD.entries()) {
      if (usuario.ciudad && usuario.artistas?.length > 0) {
        const eventos = await buscarConciertosPorCiudad(usuario.ciudad);
        const coincidencias = eventos.filter(e => 
          usuario.artistas.some(a => e.artista.toLowerCase().includes(a.toLowerCase()))
        );

        for (const coincidencia of coincidencias) {
          botInstancia.bot.sendMessage(
            chatId, 
            `🚨 *¡ALERTA AUTOMÁTICA!* Tu artista favorito *${coincidencia.artista}* se presentará en ${coincidencia.ciudad} el ${coincidencia.fecha}.`,
            { parse_mode: 'Markdown' }
          );
        }
      }
    }
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor iniciado en http://localhost:${PORT}`);
});