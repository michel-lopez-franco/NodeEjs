// src/data/venues.js

const VENUE_ANALYSIS = {
  "auditorio telmex": {
    consejo: "Las filas intermedias de Luneta Alta ofrecen la mejor acústica y visibilidad sin pagar costo VIP.",
    zonasRecomendadas: ["Luneta Alta", "Platea Baja"]
  },
  "estadio akron": {
    consejo: "Grada Baja Lateral ofrece excelente elevación panorámica. Evita General B si prefieres estar sentado.",
    zonasRecomendadas: ["Grada Baja Lateral", "Cabecera Inferior"]
  },
  "arena vfg": {
    consejo: "Planta Baja Central compensa el rebote de audio habitual de las gradas superiores.",
    zonasRecomendadas: ["Planta Baja Central"]
  },
  "foro sol": {
    consejo: "General B es ideal para el ambiente festivo, mientras que Verde B da vista limpia sin multitud excesiva.",
    zonasRecomendadas: ["Verde B", "General B"]
  }
};

function obtenerRecomendacionRecinto(nombreRecinto) {
  if (!nombreRecinto) {
    return {
      consejo: "Para recintos generales, busca secciones centrales en nivel medio/preferente para equilibrar audio y vista.",
      zonasRecomendadas: ["Nivel Medio / Preferente"]
    };
  }

  const nombreNormalizado = nombreRecinto.toLowerCase();
  
  for (const [clave, datos] of Object.entries(VENUE_ANALYSIS)) {
    if (nombreNormalizado.includes(clave)) {
      return datos;
    }
  }

  return {
    consejo: "Para recintos generales, busca secciones centrales en nivel medio/preferente para equilibrar audio y vista.",
    zonasRecomendadas: ["Nivel Medio / Preferente"]
  };
}

module.exports = { obtenerRecomendacionRecinto };