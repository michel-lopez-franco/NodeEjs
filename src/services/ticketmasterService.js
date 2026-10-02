// src/services/ticketmasterService.js
const axios = require('axios');
const { obtenerRecomendacionRecinto } = require('../data/venues');

/**
 * Consulta eventos musicales para la ciudad indicada
 */
async function buscarConciertosPorCiudad(ciudad) {
  const apiKey = process.env.TICKETMASTER_API_KEY;
  
  // Datos simulados de respaldo si no hay API key de Ticketmaster
  if (!apiKey || apiKey === 'tu_api_key_de_ticketmaster_aqui') {
    return [
      {
        id: "mock-1",
        artista: "Coldplay",
        recinto: "Estadio Akron",
        fecha: "2026-11-15",
        ciudad: ciudad,
        recomendaciones: obtenerRecomendacionRecinto("Estadio Akron")
      },
      {
        id: "mock-2",
        artista: "Kenia OS",
        recinto: "Auditorio Telmex",
        fecha: "2026-12-02",
        ciudad: ciudad,
        recomendaciones: obtenerRecomendacionRecinto("Auditorio Telmex")
      }
    ];
  }

  try {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=${encodeURIComponent(ciudad)}&apikey=${apiKey}`;
    const response = await axios.get(url);
    const eventos = response.data._embedded?.events || [];

    return eventos.slice(0, 5).map(e => ({
      id: e.id,
      artista: e.name,
      recinto: e._embedded?.venues?.[0]?.name || "Recinto por confirmar",
      fecha: e.dates?.start?.localDate || "Fecha por confirmar",
      ciudad: ciudad,
      recomendaciones: obtenerRecomendacionRecinto(e._embedded?.venues?.[0]?.name || "")
    }));
  } catch (error) {
    console.error("Error al consultar la API de Ticketmaster:", error.message);
    return [];
  }
}

module.exports = { buscarConciertosPorCiudad };