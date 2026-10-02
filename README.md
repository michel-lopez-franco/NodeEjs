# 🎵 ConcertAlert Bot - Telegram & Node.js

Un bot inteligente de Telegram construido con **Node.js** que monitorea eventos musicales en tu ciudad, te envía alertas automáticas de tus artistas favoritos y evalúa la relación **precio-calidad** de las zonas del recinto.

## 🌟 Características Principales
- **Interacción en tiempo real:** Control mediante comandos interactivos en Telegram.
- **Alertas Automatizadas:** Monitoreo periódico en segundo plano con `node-cron`.
- **Análisis Precio-Calidad:** Recomendaciones de asientos y zonas según visibilidad y acústica del recinto.
- **Integración con API:** Consulta de cartelera de conciertos mediante servicios externos.

## 🛠 Tecnologías Utilizadas
- **Node.js**
- **Express**
- **node-telegram-bot-api**
- **node-cron**
- **Axios**
- **dotenv**

## ⚙️ Instrucciones de Ejecución

1. Clonar el repositorio e instalar dependencias:
   ```bash
   git clone [https://github.com/tu-usuario/concert-alert-bot.git](https://github.com/tu-usuario/concert-alert-bot.git)
   cd concert-alert-bot
   npm install