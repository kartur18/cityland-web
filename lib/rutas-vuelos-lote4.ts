import type { RutaVueloSEO } from "@/lib/rutas-vuelos";

export const RUTAS_VUELOS_LOTE_4: RutaVueloSEO[] = [
  {
    slug: "lima-sevilla",
    origen: "Lima",
    destino: "Sevilla",
    codigoOrigen: "LIM",
    codigoDestino: "SVQ",
    metaTitle:
      "Vuelos de Lima a Sevilla, España Desde $960 USD (Ida y Vuelta) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Sevilla (LIM - SVQ) Desde $960 USD con impuestos incluidos. Conexiones vía Madrid en Iberia y Air Europa con equipaje de 23 kg y Seguro Schengen.",
    keywords: [
      "vuelos de lima a sevilla",
      "pasajes aereos lima sevilla espana",
      "viajar a sevilla desde peru",
      "vuelos economicos lima sevilla",
      "cityland travel sevilla",
    ],
    precioDesdeUSD: 960,
    faqs: [
      {
        q: "¿Cómo son los vuelos de Lima a Sevilla?",
        a: "Vuelas desde Lima (LIM) hacia Madrid-Barajas (MAD) en vuelo directo y conectas en vuelo corto o tren AVE incluido hacia Sevilla (SVQ) con Iberia o Air Europa.",
      },
      {
        q: "¿El precio Desde $960 USD incluye impuestos?",
        a: "Sí, incluye impuestos aeroportuarios y cargos obligatorios. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → SVQ · Capital de Andalucía con Equipaje Completo",
      banderasHero: ["Perú", "España"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Sevilla, España",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia el corazón de Andalucía.",
      negritaHero:
        "Emitimos boletos de ida y vuelta y armamos tu carpeta migratoria Schengen con Seguro de 30.000€.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Sevilla, España. ¿Me pueden ayudar?",
      checksHero: [
        "Conexión rápida vía Madrid",
        "Equipaje de mano 10 kg + bodega 23 kg",
        "Seguro Schengen 30.000€ disponible",
      ],
      vitrina: {
        pais: "España",
        etiquetaIzq: "Andalucía",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=1000&q=85",
        alt: "Plaza de España en Sevilla — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Sevilla (SVQ)",
        titulo: "Vuelos Confirmados Lima – Sevilla",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$960",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Sevilla (Desde $960 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Modalidades para volar de Lima a Sevilla",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Con Carpeta / Circuito" },
        ],
      },
      items: [
        {
          id: "lim-svq-vuelo",
          titulo: "Vuelo Lima – Sevilla (Ida y Vuelta)",
          pais: "España",
          filtro: "vuelo",
          subtitulo: "Iberia / Air Europa · Conexión en Madrid",
          precioPrincipal: "$960",
          precioSecundario: "$480",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Tarifa Verificada",
          tagBg: "bg-red-600",
          img: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Sevilla",
          resumenCorto: "Boleto aéreo LIM → SVQ ida y vuelta con maleta de 23 kg",
          checks: [
            "Boleto aéreo Lima – Madrid – Sevilla ida y vuelta",
            "Equipaje de mano 10 kg + maleta de 23 kg en bodega",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Sevilla (Desde $960 USD).",
        },
        {
          id: "lim-svq-carpeta",
          titulo: "Vuelo Lima – Sevilla + Carpeta Migratoria Schengen",
          pais: "España",
          filtro: "paquete",
          subtitulo: "Vuelo + Seguro 30.000€ + Reserva Hotelera",
          precioPrincipal: "$1,060",
          precioSecundario: "$530",
          notaPrecio: "Paquete migratorio · Incluye impuestos (Verif. Oct 2026)",
          tag: "Ingreso Seguro",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete migratorio Lima a Sevilla",
          resumenCorto: "Vuelo + Seguro Schengen 30.000€ + Sustento de alojamiento",
          checks: [
            "Boleto confirmado con código PNR verificable",
            "Seguro médico Schengen cobertura 30.000€ sin deducible",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete Lima - Sevilla con Carpeta Migratoria (Desde $1,060 USD).",
        },
      ],
      pilares: [
        { titulo: "Conexión en Madrid", sub: "En vuelo o tren de alta velocidad AVE" },
        { titulo: "Equipaje 23 kg", sub: "Bodega + equipaje de cabina" },
        { titulo: "Carpeta Schengen", sub: "Seguro 30.000€ y reserva hotelera" },
        { titulo: "RUC 20614914239", sub: "Agencia formal en Lima, Perú" },
      ],
      bannerFinal: {
        sobretitulo: "Rutas a Andalucía",
        titulo: "¿Buscas pasajes de Lima a Sevilla?",
        descripcion:
          "Escríbenos por WhatsApp y recibe las mejores fechas y tarifas disponibles hoy.",
        ctaTexto: "Consultar tarifa Lima – Sevilla por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Sevilla. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes de Lima a Sevilla",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Sevilla",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Sevilla. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-bilbao",
    origen: "Lima",
    destino: "Bilbao",
    codigoOrigen: "LIM",
    codigoDestino: "BIO",
    metaTitle:
      "Vuelos de Lima a Bilbao & País Vasco Desde $970 USD (Ida y Vuelta) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Bilbao (LIM - BIO) Desde $970 USD con impuestos incluidos. Conexión vía Madrid en Iberia o Air Europa con maleta de 23 kg y Seguro Schengen.",
    keywords: [
      "vuelos de lima a bilbao",
      "pasajes aereos lima bilbao espana",
      "viajar a san sebastian o bilbao desde peru",
      "vuelos lima pais vasco",
      "cityland travel bilbao",
    ],
    precioDesdeUSD: 970,
    faqs: [
      {
        q: "¿Cómo se llega de Lima a Bilbao en avión?",
        a: "Con un vuelo transatlántico Lima (LIM) – Madrid (MAD) seguido de un vuelo de conexión corto de 1 hora hacia el Aeropuerto de Bilbao (BIO) con equipaje facturado hasta el destino final.",
      },
      {
        q: "¿El precio Desde $970 USD incluye impuestos?",
        a: "Sí, incluye impuestos aeroportuarios y tasas obligatorias. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → BIO · Vuelos al Norte de España y País Vasco",
      banderasHero: ["Perú", "España"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Bilbao & San Sebastián",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia el País Vasco.",
      negritaHero:
        "Boleto confirmado con equipaje de bodega y asesoría migratoria Schengen para viajar seguro.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Bilbao, España. ¿Me pueden ayudar?",
      checksHero: [
        "Conexión rápida vía Madrid",
        "Equipaje de mano 10 kg + bodega 23 kg",
        "Seguro Schengen 30.000€ disponible",
      ],
      vitrina: {
        pais: "España",
        etiquetaIzq: "Norte de España",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=85",
        alt: "Bilbao y País Vasco — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Bilbao (BIO)",
        titulo: "Vuelos Lima – Bilbao (Ida y Vuelta)",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$970",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Bilbao (Desde $970 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para volar de Lima a Bilbao",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Con Carpeta Schengen" },
        ],
      },
      items: [
        {
          id: "lim-bio-vuelo",
          titulo: "Vuelo Lima – Bilbao (Ida y Vuelta)",
          pais: "España",
          filtro: "vuelo",
          subtitulo: "Iberia / Air Europa · 1 Conexión en Madrid",
          precioPrincipal: "$970",
          precioSecundario: "$485",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Norte de España",
          tagBg: "bg-red-600",
          img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Bilbao",
          resumenCorto: "Boleto aéreo LIM → BIO ida y vuelta con maleta de 23 kg",
          checks: [
            "Boleto aéreo Lima – Madrid – Bilbao ida y vuelta",
            "Equipaje de mano 10 kg + maleta de 23 kg en bodega",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Bilbao (Desde $970 USD).",
        },
        {
          id: "lim-bio-carpeta",
          titulo: "Vuelo Lima – Bilbao + Carpeta Migratoria Schengen",
          pais: "España",
          filtro: "paquete",
          subtitulo: "Vuelo + Seguro 30.000€ + Reserva Hotelera",
          precioPrincipal: "$1,070",
          precioSecundario: "$535",
          notaPrecio: "Paquete migratorio · Incluye impuestos (Verif. Oct 2026)",
          tag: "Viaje Seguro",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete migratorio Lima a Bilbao",
          resumenCorto: "Boleto + Seguro Schengen 30.000€ + Reserva verificable",
          checks: [
            "Boleto confirmado con código PNR verificable",
            "Seguro médico Schengen cobertura 30.000€ sin deducible",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete Lima - Bilbao con Carpeta Migratoria (Desde $1,070 USD).",
        },
      ],
      pilares: [
        { titulo: "Equipaje Directo", sub: "Facturado desde Lima hasta Bilbao" },
        { titulo: "Maleta 23 kg", sub: "Incluida en nuestras tarifas recomendadas" },
        { titulo: "Carpeta Schengen", sub: "Lista para el control en Madrid-Barajas" },
        { titulo: "RUC 20614914239", sub: "Respaldo de agencia formal en Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Vuelos al País Vasco",
        titulo: "¿Viajas de Lima a Bilbao o San Sebastián?",
        descripcion:
          "Consulta por WhatsApp las mejores fechas y conexiones disponibles.",
        ctaTexto: "Consultar tarifa Lima – Bilbao por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Bilbao. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes de Lima a Bilbao",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Bilbao",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Bilbao. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-lisboa",
    origen: "Lima",
    destino: "Lisboa",
    codigoOrigen: "LIM",
    codigoDestino: "LIS",
    metaTitle:
      "Vuelos y Paquetes de Lima a Lisboa & Fátima Desde $960 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Lisboa, Portugal (LIM - LIS) Desde $960 USD con impuestos incluidos. Paquetes a Lisboa, Oporto y Santuario de Fátima con Seguro Schengen.",
    keywords: [
      "vuelos de lima a lisboa",
      "pasajes aereos lima portugal",
      "tour a fatima y lisboa desde peru",
      "viajar a portugal desde lima",
      "cityland travel lisboa",
    ],
    precioDesdeUSD: 960,
    faqs: [
      {
        q: "¿Los peruanos necesitan visa para viajar a Lisboa, Portugal?",
        a: "No, Portugal forma parte del Espacio Schengen y los ciudadanos peruanos están exentos de visa de turismo por hasta 90 días.",
      },
      {
        q: "¿Cómo son los vuelos de Lima a Lisboa?",
        a: "Operan con 1 conexión corta vía Madrid (Iberia / Air Europa) llegando al Aeropuerto Humberto Delgado de Lisboa (LIS).",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → LIS · Lisboa, Oporto y Santuario de Fátima",
      banderasHero: ["Perú", "Europa"],
      tituloHero: "Vuelos y Circuitos de Lima a",
      tituloDestacadoHero: "Lisboa & Portugal",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia la capital portuguesa.",
      negritaHero:
        "Combina Lisboa, Fátima, Oporto y Madrid en un solo viaje organizado con guía en español.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Lisboa, Portugal. ¿Me pueden ayudar?",
      checksHero: [
        "Conexión rápida vía Madrid",
        "Equipaje de bodega 23 kg + cabina 10 kg",
        "Circuitos con Santuario de Fátima y Oporto",
      ],
      vitrina: {
        pais: "Portugal",
        etiquetaIzq: "Portugal & Fátima",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=85",
        alt: "Tranvía de Lisboa — Vuelos de Lima a Portugal",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Lisboa (LIS)",
        titulo: "Vuelos y Circuitos a Lisboa & Fátima",
        labelPrecio: "Vuelo referencial con impuestos incluidos",
        precio: "$960",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Lisboa (Desde $960 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para viajar de Lima a Portugal",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Circuito Portugal + España" },
        ],
      },
      items: [
        {
          id: "lim-lis-vuelo",
          titulo: "Vuelo Lima – Lisboa (Ida y Vuelta)",
          pais: "Portugal",
          filtro: "vuelo",
          subtitulo: "Iberia / Air Europa · 1 Conexión en Madrid",
          precioPrincipal: "$960",
          precioSecundario: "$480",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Lisboa",
          resumenCorto: "Boleto aéreo LIM → LIS ida y vuelta con maleta de 23 kg",
          checks: [
            "Boleto aéreo Lima – Lisboa ida y vuelta",
            "Equipaje de mano 10 kg + bodega 23 kg",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Lisboa (Desde $960 USD).",
        },
        {
          id: "lim-lis-paquete",
          titulo: "Circuito Madrid, Fátima, Lisboa y Oporto (10D/9N)",
          pais: "Portugal",
          filtro: "paquete",
          subtitulo: "Vuelos + Hoteles 4★ + Guía en Español + Seguro Schengen",
          precioPrincipal: "$1,690",
          precioSecundario: "$845",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Ruta Ibérica",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=80",
          alt: "Circuito España y Portugal desde Lima",
          resumenCorto: "Vuelos + 9 noches de hotel + Fátima, Lisboa y Madrid",
          checks: [
            "Vuelos internacionales desde Lima ida y vuelta",
            "Recorrido guiado por Madrid, Santuario de Fátima, Lisboa y Oporto",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Circuito Madrid, Fátima y Lisboa (Desde $1,690 USD).",
        },
      ],
      pilares: [
        { titulo: "Sin Visa Schengen", sub: "Ingreso con pasaporte peruano vigente" },
        { titulo: "Santuario de Fátima", sub: "Circuitos culturales y religiosos" },
        { titulo: "Separa con 50%", sub: "Congela tu circuito en dólares" },
        { titulo: "RUC 20614914239", sub: "Agencia acreditada en MINCETUR" },
      ],
      bannerFinal: {
        sobretitulo: "Descubre Portugal y España",
        titulo: "¿Quieres cotizar tu viaje a Lisboa y Fátima?",
        descripcion:
          "Escríbenos por WhatsApp y recibe el programa detallado con salidas garantizadas.",
        ctaTexto: "Consultar tarifa Lima – Lisboa por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Lisboa. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Lisboa",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Lisboa",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Lisboa. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-frankfurt",
    origen: "Lima",
    destino: "Frankfurt",
    codigoOrigen: "LIM",
    codigoDestino: "FRA",
    metaTitle:
      "Vuelos de Lima a Frankfurt, Alemania Desde $990 USD (Ida y Vuelta) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Frankfurt (LIM - FRA) Desde $990 USD con impuestos incluidos. Conexiones vía Madrid o Ámsterdam con equipaje de 23 kg y Seguro Schengen.",
    keywords: [
      "vuelos de lima a frankfurt",
      "pasajes aereos lima alemania",
      "viajar a alemania desde peru",
      "vuelos lima munich berlín frankfurt",
      "cityland travel alemania",
    ],
    precioDesdeUSD: 990,
    faqs: [
      {
        q: "¿Cómo son los vuelos de Lima a Frankfurt?",
        a: "Operan con 1 escala rápida en Madrid (Iberia / Air Europa) o Ámsterdam/París (KLM / Air France) llegando al Aeropuerto Internacional de Frankfurt (FRA).",
      },
      {
        q: "¿El precio Desde $990 USD incluye impuestos?",
        a: "Sí, incluye impuestos aeroportuarios y cargos obligatorios. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → FRA · Conexión Principal a Alemania y Europa Central",
      banderasHero: ["Perú", "Europa"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Frankfurt & Alemania",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia Frankfurt, Múnich y Berlín.",
      negritaHero:
        "Boletos de ida y vuelta con maleta de 23 kg y póliza médica Schengen de 30.000€.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Frankfurt, Alemania. ¿Me pueden ayudar?",
      checksHero: [
        "1 escala vía Madrid o Ámsterdam",
        "Equipaje de mano 10 kg + bodega 23 kg",
        "Seguro Schengen 30.000€ disponible",
      ],
      vitrina: {
        pais: "Alemania",
        etiquetaIzq: "Europa Central",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=85",
        alt: "Alemania — Vuelos de Lima a Frankfurt",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Frankfurt (FRA)",
        titulo: "Vuelos Confirmados Lima – Frankfurt",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$990",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Frankfurt (Desde $990 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para volar de Lima a Alemania",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Con Carpeta Schengen" },
        ],
      },
      items: [
        {
          id: "lim-fra-vuelo",
          titulo: "Vuelo Lima – Frankfurt (Ida y Vuelta)",
          pais: "Alemania",
          filtro: "vuelo",
          subtitulo: "Iberia / Air Europa / KLM · Impuestos incluidos",
          precioPrincipal: "$990",
          precioSecundario: "$495",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Ruta Alemania",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Frankfurt",
          resumenCorto: "Boleto aéreo LIM → FRA ida y vuelta con maleta de 23 kg",
          checks: [
            "Boleto aéreo Lima – Frankfurt ida y vuelta",
            "Equipaje de mano 10 kg + maleta de 23 kg en bodega",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Frankfurt (Desde $990 USD).",
        },
        {
          id: "lim-fra-carpeta",
          titulo: "Vuelo Lima – Frankfurt + Carpeta Migratoria Schengen",
          pais: "Alemania",
          filtro: "paquete",
          subtitulo: "Vuelo + Seguro 30.000€ + Reserva de Alojamiento",
          precioPrincipal: "$1,090",
          precioSecundario: "$545",
          notaPrecio: "Paquete migratorio · Incluye impuestos (Verif. Oct 2026)",
          tag: "Viaje Seguro",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=900&q=80",
          alt: "Carpeta migratoria para Alemania",
          resumenCorto: "Vuelo + Seguro Schengen 30.000€ + Reserva hotelera",
          checks: [
            "Boleto confirmado con PNR verificable",
            "Seguro médico Schengen 30.000€ válido en Alemania",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete Lima - Frankfurt con Carpeta Migratoria (Desde $1,090 USD).",
        },
      ],
      pilares: [
        { titulo: "Hub de Alemania", sub: "Conexión a Frankfurt, Múnich y Berlín" },
        { titulo: "Equipaje 23 kg", sub: "Maleta facturada hasta destino final" },
        { titulo: "Seguro 30.000€", sub: "Obligatorio para ingreso Schengen" },
        { titulo: "RUC 20614914239", sub: "Agencia formal en Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Vuelos hacia Alemania",
        titulo: "¿Buscas pasajes de Lima a Frankfurt, Múnich o Berlín?",
        descripcion:
          "Escríbenos por WhatsApp y un asesor te enviará las mejores tarifas vigentes.",
        ctaTexto: "Consultar tarifa Lima – Frankfurt por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Frankfurt. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Alemania",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Frankfurt",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Frankfurt. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-nueva-york",
    origen: "Lima",
    destino: "Nueva York",
    codigoOrigen: "LIM",
    codigoDestino: "JFK",
    metaTitle:
      "Vuelos y Paquetes de Lima a Nueva York Desde $589 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Nueva York (LIM - JFK/EWR) Desde $589 USD con impuestos incluidos. Vuelos directos en LATAM y conexiones en Copa y Avianca + asesoría Visa B1/B2.",
    keywords: [
      "vuelos de lima a nueva york",
      "pasajes aereos lima nueva york",
      "paquetes a nueva york desde lima",
      "vuelos baratos lima new york",
      "cityland travel nueva york",
    ],
    precioDesdeUSD: 589,
    faqs: [
      {
        q: "¿Hay vuelos directos de Lima a Nueva York?",
        a: "Sí, LATAM opera vuelos directos sin escalas entre Lima (LIM) y el Aeropuerto Internacional John F. Kennedy de Nueva York (JFK) en aproximadamente 7 horas y 50 minutos, además de vuelos con 1 escala en Panamá, Bogotá o Miami.",
      },
      {
        q: "¿Qué necesito para viajar a Nueva York desde Perú?",
        a: "Necesitas pasaporte vigente y Visa Americana B1/B2 vigente. Si aún no cuentas con tu visa o necesitas renovarla, en Cityland Travel te asesoramos con el llenado del DS-160 y tu cita consular.",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → JFK/EWR · Vuelos Directos y Paquetes en Manhattan",
      banderasHero: ["Perú", "Estados Unidos"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Nueva York (Manhattan)",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia la Gran Manzana.",
      negritaHero:
        "Vuelos directos de 7h 50m y paquetes con hotel en Times Square separando con el 50%.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Nueva York. ¿Me pueden ayudar?",
      checksHero: [
        "Opción de vuelo directo LIM → JFK",
        "Hoteles en Manhattan / Times Square",
        "Asesoría de trámite o renovación de Visa B1/B2",
      ],
      vitrina: {
        pais: "Estados Unidos",
        etiquetaIzq: "La Gran Manzana",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=85",
        alt: "Manhattan Nueva York — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Nueva York (JFK / EWR)",
        titulo: "Vuelos y Paquetes a Nueva York",
        labelPrecio: "Vuelo referencial ida y vuelta desde",
        precio: "$589",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Nueva York (Desde $589 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Modalidades para viajar de Lima a Nueva York",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Paquete Nueva York" },
        ],
      },
      items: [
        {
          id: "lim-jfk-vuelo",
          titulo: "Vuelo Lima – Nueva York (Ida y Vuelta)",
          pais: "Estados Unidos",
          filtro: "vuelo",
          subtitulo: "LATAM / Copa Airlines / Avianca / American",
          precioPrincipal: "$589",
          precioSecundario: "$295",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Nueva York",
          resumenCorto: "Boleto aéreo LIM → JFK/EWR ida y vuelta con impuestos",
          checks: [
            "Boleto aéreo Lima – Nueva York – Lima",
            "Impuestos aeroportuarios incluidos",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Nueva York (Desde $589 USD).",
        },
        {
          id: "lim-jfk-paquete",
          titulo: "Paquete Nueva York Inolvidable (6D/5N)",
          pais: "Estados Unidos",
          filtro: "paquete",
          subtitulo: "Vuelos + Hotel en Manhattan + Tour Alto y Bajo Manhattan",
          precioPrincipal: "$1,290",
          precioSecundario: "$645",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Manhattan",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete a Nueva York desde Lima",
          resumenCorto: "Vuelos + 5 noches en Manhattan + Traslados + City Tour",
          checks: [
            "Boletos aéreos Lima – Nueva York ida y vuelta",
            "5 noches de hotel en Manhattan + Traslados aeropuerto-hotel",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete a Nueva York 6D/5N (Desde $1,290 USD).",
        },
      ],
      pilares: [
        { titulo: "Vuelos a JFK y Newark", sub: "Directos o con 1 escala corta" },
        { titulo: "Hoteles en Manhattan", sub: "Cerca de Times Square y Central Park" },
        { titulo: "Separa con 50%", sub: "Congela tu paquete y paga en cuotas" },
        { titulo: "RUC 20614914239", sub: "Agencia formal en Lima, Perú" },
      ],
      bannerFinal: {
        sobretitulo: "Salidas Todo el Año a EE.UU.",
        titulo: "¿Planeas viajar de Lima a Nueva York?",
        descripcion:
          "Escríbenos por WhatsApp y recibe nuestra cotización de vuelos u hoteles en Manhattan.",
        ctaTexto: "Consultar tarifa Lima – Nueva York por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Nueva York. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Nueva York",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Nueva York",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Nueva York. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-orlando",
    origen: "Lima",
    destino: "Orlando",
    codigoOrigen: "LIM",
    codigoDestino: "MCO",
    metaTitle:
      "Vuelos y Paquetes de Lima a Orlando (Disney & Universal) Desde $529 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Orlando (LIM - MCO) Desde $529 USD y paquetes familiares a Disney y Universal Studios Desde $1,190 USD con impuestos incluidos.",
    keywords: [
      "vuelos de lima a orlando",
      "paquetes a disney orlando desde peru",
      "viajar a orlando desde lima precio",
      "pasajes aereos lima orlando",
      "cityland travel orlando",
    ],
    precioDesdeUSD: 529,
    faqs: [
      {
        q: "¿Cómo son los vuelos de Lima a Orlando?",
        a: "Existen opciones de vuelo directo por temporada y conexiones rápidas todos los días vía Miami, Panamá (Copa Airlines) o Bogotá (Avianca) hacia el Aeropuerto Internacional de Orlando (MCO).",
      },
      {
        q: "¿Qué incluye el paquete a Orlando y Miami Desde $1,190 USD?",
        a: "Incluye boletos aéreos ida y vuelta desde Lima, alojamiento familiar con piscina, traslados, seguro médico en EE.UU. y asesoría en compra de entradas a parques Disney y Universal. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta Familiar LIM → MCO · Parques Temáticos Disney & Universal",
      banderasHero: ["Perú", "Estados Unidos"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Orlando, Florida",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos para las vacaciones soñadas en familia.",
      negritaHero:
        "Reserva tus vuelos a Orlando o el paquete combinado Orlando + Miami separando con el 50%.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Orlando. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos al Aeropuerto de Orlando (MCO)",
        "Hoteles familiares cerca de Disney y Universal",
        "Asesoría en pases de parques y Outlets",
      ],
      vitrina: {
        pais: "Estados Unidos",
        etiquetaIzq: "Vacaciones en Familia",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1000&q=85",
        alt: "Viajes a Orlando y Miami desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Orlando International (MCO)",
        titulo: "Vuelos y Paquetes a Orlando & Miami",
        labelPrecio: "Vuelo referencial ida y vuelta desde",
        precio: "$529",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Orlando (Desde $529 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para viajar de Lima a Orlando",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "paquete", label: "Paquete Orlando + Miami" },
          { id: "vuelo", label: "Solo Vuelo" },
        ],
      },
      items: [
        {
          id: "lim-mco-paquete",
          titulo: "Paquete Familiar Orlando & Miami Beach (7D/6N)",
          pais: "Estados Unidos",
          filtro: "paquete",
          subtitulo: "Vuelos + Hoteles con Piscina + Traslados + Outlets",
          precioPrincipal: "$1,190",
          precioSecundario: "$595",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Especial Familias",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete a Orlando y Miami",
          resumenCorto: "Vuelos + 6 noches de hotel + Seguro médico EE.UU.",
          checks: [
            "Boletos aéreos Lima – Orlando / Miami ida y vuelta",
            "6 noches de alojamiento familiar + Seguro médico internacional",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete Familiar Orlando y Miami 7D/6N (Desde $1,190 USD).",
        },
        {
          id: "lim-mco-vuelo",
          titulo: "Solo Vuelo Lima – Orlando (Ida y Vuelta)",
          pais: "Estados Unidos",
          filtro: "vuelo",
          subtitulo: "Copa Airlines / LATAM / Avianca / SKY",
          precioPrincipal: "$529",
          precioSecundario: "$265",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Orlando",
          resumenCorto: "Boleto aéreo LIM → MCO ida y vuelta con impuestos",
          checks: [
            "Boleto aéreo Lima – Orlando – Lima",
            "Impuestos aeroportuarios incluidos",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Orlando (Desde $529 USD).",
        },
      ],
      pilares: [
        { titulo: "Parques Temáticos", sub: "Asesoría en Disney y Universal" },
        { titulo: "Tarifas Familiares", sub: "Precios especiales para niños" },
        { titulo: "Separa con 50%", sub: "Congela tu paquete en dólares" },
        { titulo: "RUC 20614914239", sub: "Agencia formal en Lima, Perú" },
      ],
      bannerFinal: {
        sobretitulo: "Vacaciones Mágicas en Florida",
        titulo: "¿Quieres cotizar tu viaje familiar a Orlando?",
        descripcion:
          "Indícanos cuántos adultos y niños viajan para armarte el presupuesto exacto por WhatsApp.",
        ctaTexto: "Consultar tarifa Lima – Orlando por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Orlando. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Orlando",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Orlando",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Orlando. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "roma-lima",
    origen: "Roma",
    destino: "Lima",
    codigoOrigen: "FCO",
    codigoDestino: "LIM",
    metaTitle:
      "Vuelos de Roma a Lima Desde $960 USD (Ida y Vuelta / Solo Ida) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Roma Fiumicino a Lima (FCO - LIM) Desde $960 USD con impuestos incluidos. Boletos con maleta de 23 kg para residentes en Italia y visita familiar.",
    keywords: [
      "vuelos de roma a lima",
      "pasajes de italia a peru",
      "vuelos baratos roma lima",
      "boletos aereos roma fiumicino a lima",
      "cityland travel roma lima",
    ],
    precioDesdeUSD: 960,
    faqs: [
      {
        q: "¿Qué aerolíneas vuelan de Roma a Lima?",
        a: "Iberia y Air Europa (vía Madrid), KLM (vía Ámsterdam), Air France (vía París) y LATAM conectan diariamente el Aeropuerto de Roma-Fiumicino (FCO) con Lima (LIM).",
      },
      {
        q: "¿Puedo pagar el pasaje en Perú para mi familiar que vive en Roma?",
        a: "Sí, puedes abonarlo en nuestra agencia de Lima y enviamos el boleto electrónico con código PNR listo para su vuelo desde Fiumicino.",
      },
    ],
    config: {
      badgeHero: "Ruta Inversa FCO → LIM · Vuelos de Italia a Perú con Equipaje",
      banderasHero: ["Italia", "Perú"],
      tituloHero: "Vuelos Confirmados de Roma a",
      tituloDestacadoHero: "Lima, Perú",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos desde Roma-Fiumicino hacia Lima.",
      negritaHero:
        "Opciones de ida y vuelta o solo ida con 1 y 2 maletas de 23 kg en bodega.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Roma a Lima. ¿Me pueden ayudar?",
      checksHero: [
        "1 conexión rápida vía Madrid o Ámsterdam",
        "Equipaje de bodega 23 kg + cabina 10 kg",
        "Compra desde Italia o desde nuestra oficina en Lima",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Italia → Perú",
        etiquetaDer: "Maleta 23 kg",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",
        alt: "Vuelos de Roma a Lima Perú",
        sobretitulo: "Roma Fiumicino (FCO) → Aeropuerto Jorge Chávez (LIM)",
        titulo: "Vuelos Roma – Lima (Ida y Vuelta / Solo Ida)",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$960",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Roma a Lima (Desde $960 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para volar de Roma a Lima",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Ida y Vuelta" },
          { id: "oneway", label: "Solo Ida" },
        ],
      },
      items: [
        {
          id: "fco-lim-rt",
          titulo: "Vuelo Roma – Lima – Roma (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "Iberia / Air Europa / KLM · Con maleta de 23 kg",
          precioPrincipal: "$960",
          precioSecundario: "$480",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Ida y Vuelta",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Roma a Lima ida y vuelta",
          resumenCorto: "Boleto FCO → LIM → FCO con equipaje de 23 kg",
          checks: [
            "Boleto aéreo Roma – Lima – Roma",
            "Equipaje de mano 10 kg + maleta de 23 kg en bodega",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Roma - Lima ida y vuelta (Desde $960 USD).",
        },
        {
          id: "fco-lim-ow",
          titulo: "Boleto Solo Ida Roma → Lima",
          pais: "Perú",
          filtro: "oneway",
          subtitulo: "Un tramo hacia el Perú con equipaje incluido",
          precioPrincipal: "$590",
          precioSecundario: "$590",
          notaPrecio: "Solo ida · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Ida",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo solo ida Roma a Lima",
          resumenCorto: "Un tramo Roma Fiumicino (FCO) → Lima (LIM)",
          checks: [
            "Boleto aéreo un tramo Roma → Lima",
            "Maleta de mano 10 kg + bodega 23 kg",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para un Vuelo Solo Ida de Roma a Lima (Desde $590 USD).",
        },
      ],
      pilares: [
        { titulo: "Equipaje 23 kg", sub: "Facturado directo desde Fiumicino hasta Lima" },
        { titulo: "Pago en Perú", sub: "Tu familia puede abonarlo en Lima" },
        { titulo: "Emisión Inmediata", sub: "Boleto electrónico verificable en aerolínea" },
        { titulo: "RUC 20614914239", sub: "Respaldo de agencia formal en Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Atención para Peruanos en Italia",
        titulo: "¿Viajas de Roma a Lima?",
        descripcion:
          "Escríbenos por WhatsApp y cotiza tu vuelo con equipaje completo.",
        ctaTexto: "Consultar tarifa Roma – Lima por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Roma a Lima. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos de Roma a Lima",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Roma → Lima",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Roma a Lima. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "paris-lima",
    origen: "París",
    destino: "Lima",
    codigoOrigen: "CDG",
    codigoDestino: "LIM",
    metaTitle:
      "Vuelos de París a Lima Desde $960 USD (Ida y Vuelta / Solo Ida) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de París a Lima (CDG/ORY - LIM) Desde $960 USD con impuestos incluidos. Vuelos directos en Air France o vía Madrid en Iberia y Air Europa.",
    keywords: [
      "vuelos de paris a lima",
      "pasajes de francia a peru",
      "vuelos baratos paris lima",
      "boletos aereos paris a lima",
      "cityland travel paris lima",
    ],
    precioDesdeUSD: 960,
    faqs: [
      {
        q: "¿Qué aerolíneas vuelan de París a Lima?",
        a: "Air France opera vuelos directos desde París-Charles de Gaulle (CDG) a Lima (LIM), y también tienes excelentes tarifas con 1 escala en Madrid (Iberia / Air Europa) o Ámsterdam (KLM).",
      },
      {
        q: "¿El precio Desde $960 USD incluye impuestos?",
        a: "Sí, incluye impuestos aeroportuarios y tasas obligatorias. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta Inversa CDG → LIM · Vuelos de Francia a Perú con Equipaje",
      banderasHero: ["Francia", "Perú"],
      tituloHero: "Vuelos Confirmados de París a",
      tituloDestacadoHero: "Lima, Perú",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos desde París hacia Lima.",
      negritaHero:
        "Boletos de ida y vuelta o solo ida con equipaje de bodega de 23 kg.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de París a Lima. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos o con 1 escala corta",
        "Equipaje de mano 10 kg + bodega 23 kg",
        "Facilidad de pago desde Francia o Perú",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Francia → Perú",
        etiquetaDer: "Maleta 23 kg",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",
        alt: "Vuelos de París a Lima Perú",
        sobretitulo: "París (CDG / ORY) → Aeropuerto Jorge Chávez (LIM)",
        titulo: "Vuelos París – Lima (Ida y Vuelta / Solo Ida)",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$960",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de París a Lima (Desde $960 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para volar de París a Lima",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Ida y Vuelta" },
          { id: "oneway", label: "Solo Ida" },
        ],
      },
      items: [
        {
          id: "cdg-lim-rt",
          titulo: "Vuelo París – Lima – París (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "Air France / Iberia / Air Europa / KLM",
          precioPrincipal: "$960",
          precioSecundario: "$480",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Ida y Vuelta",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de París a Lima ida y vuelta",
          resumenCorto: "Boleto CDG → LIM → CDG con equipaje de 23 kg",
          checks: [
            "Boleto aéreo París – Lima – París",
            "Equipaje de mano 10 kg + maleta de 23 kg en bodega",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo París - Lima ida y vuelta (Desde $960 USD).",
        },
        {
          id: "cdg-lim-ow",
          titulo: "Boleto Solo Ida París → Lima",
          pais: "Perú",
          filtro: "oneway",
          subtitulo: "Un tramo hacia Lima con maleta de 23 kg",
          precioPrincipal: "$590",
          precioSecundario: "$590",
          notaPrecio: "Solo ida · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Ida",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo solo ida París a Lima",
          resumenCorto: "Un tramo París (CDG/ORY) → Lima (LIM)",
          checks: [
            "Boleto aéreo un tramo París → Lima",
            "Maleta de mano 10 kg + bodega 23 kg",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para un Vuelo Solo Ida de París a Lima (Desde $590 USD).",
        },
      ],
      pilares: [
        { titulo: "Vuelos Diarios", sub: "En Air France, Iberia, Air Europa y KLM" },
        { titulo: "Equipaje 23 kg", sub: "Incluido en nuestras tarifas" },
        { titulo: "Compra en Perú", sub: "Paga desde Lima para tu familiar" },
        { titulo: "RUC 20614914239", sub: "Agencia formal en Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Reunificación Familiar y Retorno",
        titulo: "¿Necesitas viajar de París a Lima?",
        descripcion:
          "Escríbenos por WhatsApp y te enviamos las mejores fechas disponibles.",
        ctaTexto: "Consultar tarifa París – Lima por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de París a Lima. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos de París a Lima",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar París → Lima",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de París a Lima. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "milan-lima",
    origen: "Milán",
    destino: "Lima",
    codigoOrigen: "MXP",
    codigoDestino: "LIM",
    metaTitle:
      "Vuelos de Milán a Lima Desde $950 USD (Ida y Vuelta / Solo Ida) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Milán Malpensa o Linate a Lima (MXP - LIM) Desde $950 USD con impuestos incluidos. Tarifas con equipaje de 23 kg para peruanos residentes en Italia.",
    keywords: [
      "vuelos de milan a lima",
      "pasajes de milan a lima peru",
      "vuelos baratos milan lima",
      "boletos aereos milan malpensa a lima",
      "cityland travel milan lima",
    ],
    precioDesdeUSD: 950,
    faqs: [
      {
        q: "¿Cómo son los vuelos de Milán a Lima?",
        a: "Salen desde Milán-Malpensa (MXP) o Milán-Linate (LIN) con 1 conexión corta en Madrid (Iberia / Air Europa) o Ámsterdam (KLM) llegando directo al Aeropuerto Jorge Chávez (LIM).",
      },
      {
        q: "¿Puedo comprar en Lima un pasaje desde Milán para un familiar?",
        a: "Sí, puedes realizar el pago en nuestra oficina de Lima o por transferencia bancaria en Perú y emitimos el boleto electrónico al instante.",
      },
    ],
    config: {
      badgeHero: "Ruta Inversa MXP → LIM · La Ruta #1 de la Comunidad Peruana en Lombardía",
      banderasHero: ["Italia", "Perú"],
      tituloHero: "Vuelos Confirmados de Milán a",
      tituloDestacadoHero: "Lima, Perú",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos desde Milán hacia Lima.",
      negritaHero:
        "Boletos de ida y vuelta o solo ida con 1 o 2 maletas de 23 kg en bodega.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Milán a Lima. ¿Me pueden ayudar?",
      checksHero: [
        "Conexión rápida vía Madrid o Ámsterdam",
        "Equipaje de mano 10 kg + bodega 23 kg",
        "Compra desde Italia o desde Perú",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Milán → Lima",
        etiquetaDer: "Maleta 23 kg",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",
        alt: "Vuelos de Milán a Lima Perú",
        sobretitulo: "Milán Malpensa (MXP) → Aeropuerto Jorge Chávez (LIM)",
        titulo: "Vuelos Milán – Lima (Ida y Vuelta / Solo Ida)",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$950",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Milán a Lima (Desde $950 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para volar de Milán a Lima",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Ida y Vuelta" },
          { id: "oneway", label: "Solo Ida" },
        ],
      },
      items: [
        {
          id: "mxp-lim-rt",
          titulo: "Vuelo Milán – Lima – Milán (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "Iberia / Air Europa / KLM · Con maleta de 23 kg",
          precioPrincipal: "$950",
          precioSecundario: "$475",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Más Solicitado",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Milán a Lima ida y vuelta",
          resumenCorto: "Boleto MXP → LIM → MXP con equipaje de 23 kg",
          checks: [
            "Boleto aéreo Milán – Lima – Milán",
            "Equipaje de mano 10 kg + maleta de 23 kg en bodega",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Milán - Lima ida y vuelta (Desde $950 USD).",
        },
        {
          id: "mxp-lim-ow",
          titulo: "Boleto Solo Ida Milán → Lima",
          pais: "Perú",
          filtro: "oneway",
          subtitulo: "Un tramo hacia el Perú con equipaje incluido",
          precioPrincipal: "$580",
          precioSecundario: "$580",
          notaPrecio: "Solo ida · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Ida",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo solo ida Milán a Lima",
          resumenCorto: "Un tramo Milán Malpensa (MXP) → Lima (LIM)",
          checks: [
            "Boleto aéreo un tramo Milán → Lima",
            "Maleta de mano 10 kg + bodega 23 kg",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para un Vuelo Solo Ida de Milán a Lima (Desde $580 USD).",
        },
      ],
      pilares: [
        { titulo: "Malpensa y Linate", sub: "Conexiones rápidas todos los días" },
        { titulo: "Equipaje 23 kg", sub: "Opciones de 1 y 2 maletas en bodega" },
        { titulo: "Pago en Lima", sub: "Ideal para traer a tus familiares" },
        { titulo: "RUC 20614914239", sub: "Agencia acreditada en MINCETUR" },
      ],
      bannerFinal: {
        sobretitulo: "Comunidad Peruana en Milán",
        titulo: "¿Viajas de Milán a Lima próximamente?",
        descripcion:
          "Escríbenos por WhatsApp y recibe las mejores tarifas vigentes.",
        ctaTexto: "Consultar tarifa Milán – Lima por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Milán a Lima. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos de Milán a Lima",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Milán → Lima",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Milán a Lima. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-sao-paulo",
    origen: "Lima",
    destino: "São Paulo",
    codigoOrigen: "LIM",
    codigoDestino: "GRU",
    metaTitle:
      "Vuelos Directos de Lima a São Paulo, Brasil Desde $429 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos directos de Lima a São Paulo Guarulhos (LIM - GRU) Desde $429 USD con impuestos incluidos. Viaja a Brasil solo con tu DNI en LATAM y SKY.",
    keywords: [
      "vuelos de lima a sao paulo",
      "pasajes aereos lima sao paulo brasil",
      "vuelos directos lima sao paulo",
      "viajar a sao paulo desde peru",
      "cityland travel sao paulo",
    ],
    precioDesdeUSD: 429,
    faqs: [
      {
        q: "¿Cuánto dura el vuelo directo de Lima a São Paulo?",
        a: "El vuelo directo desde el Aeropuerto Jorge Chávez (LIM) hasta el Aeropuerto Internacional de São Paulo-Guarulhos (GRU) dura aproximadamente 4 horas y 50 minutos.",
      },
      {
        q: "¿Los peruanos pueden viajar a São Paulo solo con DNI?",
        a: "Sí, gracias al acuerdo con Brasil, los ciudadanos peruanos pueden viajar por turismo o negocios presentando únicamente su DNI físico vigente.",
      },
    ],
    config: {
      badgeHero: "Ruta Directa LIM → GRU · Turismo y Negocios en Brasil · Solo con DNI",
      banderasHero: ["Perú", "Brasil"],
      tituloHero: "Vuelos Directos de Lima a",
      tituloDestacadoHero: "São Paulo (Guarulhos)",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia la capital financiera de Brasil.",
      negritaHero:
        "Vuelos directos diarios en LATAM y SKY viajando únicamente con tu DNI peruano vigente.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a São Paulo, Brasil. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos diarios de 4h 50m",
        "Viaja solo con tu DNI vigente",
        "Opciones corporativas y turísticas",
      ],
      vitrina: {
        pais: "Brasil",
        etiquetaIzq: "Vuelo Directo",
        etiquetaDer: "Solo con DNI",
        img: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=1000&q=85",
        alt: "Avenida Paulista en São Paulo — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Guarulhos (GRU)",
        titulo: "Vuelos Directos Lima – São Paulo",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$429",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a São Paulo (Desde $429 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Modalidades para viajar de Lima a São Paulo",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Vuelo + Hotel" },
        ],
      },
      items: [
        {
          id: "lim-gru-vuelo",
          titulo: "Vuelo Directo Lima – São Paulo (Ida y Vuelta)",
          pais: "Brasil",
          filtro: "vuelo",
          subtitulo: "LATAM / SKY · Impuestos incluidos",
          precioPrincipal: "$429",
          precioSecundario: "$215",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Vuelo Directo",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo directo de Lima a São Paulo",
          resumenCorto: "Boleto directo LIM → GRU → LIM con impuestos",
          checks: [
            "Boleto aéreo directo Lima – São Paulo – Lima",
            "Impuestos aeroportuarios incluidos",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - São Paulo (Desde $429 USD).",
        },
        {
          id: "lim-gru-paquete",
          titulo: "Paquete São Paulo Ejecutivo / Turístico (4D/3N)",
          pais: "Brasil",
          filtro: "paquete",
          subtitulo: "Vuelo Directo + Hotel 4★ en Av. Paulista + Traslados",
          precioPrincipal: "$699",
          precioSecundario: "$350",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Vuelo + Hotel",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete a São Paulo desde Lima",
          resumenCorto: "Vuelos + 3 noches de hotel con desayunos + Traslados",
          checks: [
            "Boletos aéreos directos Lima – São Paulo ida y vuelta",
            "3 noches de hotel con desayunos buffet y traslados",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete a São Paulo 4D/3N (Desde $699 USD).",
        },
      ],
      pilares: [
        { titulo: "4h 50m Directo", sub: "Sin escalas entre Lima y Guarulhos" },
        { titulo: "Solo con DNI", sub: "Sin visa ni pasaporte para peruanos" },
        { titulo: "Facturación RUC 20", sub: "Ideal para viajes de negocios y ferias" },
        { titulo: "RUC 20614914239", sub: "Agencia formal en Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Turismo, Eventos y Negocios en Brasil",
        titulo: "¿Viajas de Lima a São Paulo?",
        descripcion:
          "Escríbenos por WhatsApp y cotiza tu vuelo directo hoy mismo.",
        ctaTexto: "Consultar tarifa Lima – São Paulo por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a São Paulo. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a São Paulo",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → São Paulo",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a São Paulo. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-tarapoto",
    origen: "Lima",
    destino: "Tarapoto",
    codigoOrigen: "LIM",
    codigoDestino: "TPP",
    metaTitle:
      "Vuelos y Paquetes de Lima a Tarapoto & Laguna Azul Desde $99 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos directos de Lima a Tarapoto (LIM - TPP) Desde $99 USD ida y vuelta o paquetes con Laguna Azul y Cataratas de Ahuashiyacu Desde $289 USD.",
    keywords: [
      "vuelos de lima a tarapoto",
      "paquetes a tarapoto desde lima",
      "viajes a tarapoto todo incluido",
      "pasajes aereos lima tarapoto",
      "cityland travel tarapoto",
    ],
    precioDesdeUSD: 99,
    faqs: [
      {
        q: "¿Cuánto dura el vuelo de Lima a Tarapoto?",
        a: "El vuelo directo desde el Aeropuerto Jorge Chávez (LIM) hasta el Aeropuerto Cadete FAP Guillermo del Castillo Paredes de Tarapoto (TPP) dura 1 hora y 20 minutos.",
      },
      {
        q: "¿Qué incluye el paquete a Tarapoto Desde $289 USD?",
        a: "Incluye boletos aéreos Lima – Tarapoto ida y vuelta, 3 noches de hotel con piscina y desayunos, traslados y tours a la Laguna Azul (Sauce), Cataratas de Ahuashiyacu y Lamas. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta Selva Peruana LIM → TPP · Ciudad de las Palmeras",
      banderasHero: ["Perú"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Tarapoto & Laguna Azul",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia el destino #1 de la selva peruana.",
      negritaHero:
        "Reserva solo tu boleto aéreo o el paquete completo con hotel con piscina y tours separando con el 50%.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Tarapoto. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos diarios de 1h 20m",
        "Hoteles y resorts con piscina en Tarapoto y Sauce",
        "Tours a Laguna Azul, Ahuashiyacu y Castillo de Lamas",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Selva Peruana",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?auto=format&fit=crop&w=1000&q=85",
        alt: "Laguna Azul en Tarapoto — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Tarapoto (TPP)",
        titulo: "Vuelos y Paquetes a Tarapoto",
        labelPrecio: "Vuelo referencial ida y vuelta desde",
        precio: "$99",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Tarapoto. ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para viajar de Lima a Tarapoto",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "paquete", label: "Paquete Completo" },
          { id: "vuelo", label: "Solo Vuelo" },
        ],
      },
      items: [
        {
          id: "lim-tpp-paquete",
          titulo: "Paquete Tarapoto Mágico & Laguna Azul (4D/3N)",
          pais: "Perú",
          filtro: "paquete",
          subtitulo: "Vuelos + Hotel con Piscina + Laguna Azul + Ahuashiyacu + Lamas",
          precioPrincipal: "$289",
          precioSecundario: "$145",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Favorito en Selva",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete a Tarapoto desde Lima",
          resumenCorto: "Vuelos + 3 noches de hotel + 3 tours con entradas",
          checks: [
            "Boletos aéreos Lima – Tarapoto – Lima con impuestos",
            "3 noches de hotel con piscina y desayunos + 3 excursiones",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete a Tarapoto 4D/3N (Desde $289 USD).",
        },
        {
          id: "lim-tpp-vuelo",
          titulo: "Solo Vuelo Lima – Tarapoto (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "LATAM / SKY / JetSMART · Impuestos incluidos",
          precioPrincipal: "$99",
          precioSecundario: "$50",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Tarapoto",
          resumenCorto: "Boleto aéreo directo LIM → TPP → LIM con tasas",
          checks: [
            "Boleto aéreo directo Lima – Tarapoto – Lima",
            "Tasas aeroportuarias TUUA incluidas",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Tarapoto ida y vuelta (Desde $99 USD).",
        },
      ],
      pilares: [
        { titulo: "1h 20m Directo", sub: "Múltiples vuelos todos los días" },
        { titulo: "Laguna Azul", sub: "Paseo en bote y almuerzo amazónico" },
        { titulo: "Separa con 50%", sub: "Congela tu paquete y paga en cuotas" },
        { titulo: "RUC 20614914239", sub: "Agencia formal registrada en MINCETUR" },
      ],
      bannerFinal: {
        sobretitulo: "Escapada a la Selva Peruana",
        titulo: "¿Listo para viajar a Tarapoto?",
        descripcion:
          "Escríbenos por WhatsApp y recibe opciones de hoteles en la ciudad o frente a la Laguna Azul.",
        ctaTexto: "Consultar tarifa Lima – Tarapoto por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Tarapoto. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1620658927695-c33df6fb8130?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Tarapoto",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Tarapoto",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Tarapoto. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-iquitos",
    origen: "Lima",
    destino: "Iquitos",
    codigoOrigen: "LIM",
    codigoDestino: "IQT",
    metaTitle:
      "Vuelos y Paquetes de Lima a Iquitos & Río Amazonas Desde $119 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos directos de Lima a Iquitos (LIM - IQT) Desde $119 USD ida y vuelta o paquetes con Lodge en el Río Amazonas Desde $349 USD con impuestos incluidos.",
    keywords: [
      "vuelos de lima a iquitos",
      "paquetes a iquitos desde lima",
      "viajes al rio amazonas peru",
      "pasajes aereos lima iquitos",
      "cityland travel iquitos",
    ],
    precioDesdeUSD: 119,
    faqs: [
      {
        q: "¿Cuánto dura el vuelo directo de Lima a Iquitos?",
        a: "El vuelo directo desde el Aeropuerto Jorge Chávez (LIM) hasta el Aeropuerto Internacional Coronel FAP Francisco Secada Vignetta de Iquitos (IQT) dura 1 hora y 50 minutos.",
      },
      {
        q: "¿Qué incluye el paquete a Iquitos y Amazonas Desde $349 USD?",
        a: "Incluye vuelos Lima – Iquitos ida y vuelta, noches en hotel en la ciudad y Lodge amazónico con alimentación completa, navegación por el Río Amazonas y excursiones guiadas. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta Amazónica LIM → IQT · Maravilla Natural del Mundo",
      banderasHero: ["Perú"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Iquitos & Río Amazonas",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia el corazón de la Amazonía.",
      negritaHero:
        "Reserva tus vuelos directos o vive la experiencia de un Lodge en el Río Amazonas separando con el 50%.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Iquitos. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos diarios de 1h 50m",
        "Programas con Lodge en el Río Amazonas",
        "Avistamiento de delfines rosados y reserva Pacaya Samiria",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Río Amazonas",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1699575678956-aefa714b67f0?auto=format&fit=crop&w=1000&q=85",
        alt: "Río Amazonas en Iquitos — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Iquitos (IQT)",
        titulo: "Vuelos y Paquetes a Iquitos & Río Amazonas",
        labelPrecio: "Vuelo referencial ida y vuelta desde",
        precio: "$119",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Iquitos. ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para viajar de Lima a Iquitos",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "paquete", label: "Paquete con Lodge Amazónico" },
          { id: "vuelo", label: "Solo Vuelo" },
        ],
      },
      items: [
        {
          id: "lim-iqt-paquete",
          titulo: "Paquete Iquitos & Lodge en el Río Amazonas (4D/3N)",
          pais: "Perú",
          filtro: "paquete",
          subtitulo: "Vuelos + Hotel + Lodge Amazónico con Pensión Completa",
          precioPrincipal: "$349",
          precioSecundario: "$175",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Aventura Amazónica",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1699575678956-aefa714b67f0?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete a Iquitos y Río Amazonas",
          resumenCorto: "Vuelos + Lodge en la selva + Navegación por el Amazonas",
          checks: [
            "Boletos aéreos Lima – Iquitos – Lima con impuestos",
            "Estadía combinada ciudad + Lodge amazónico con alimentación",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete Iquitos y Lodge Amazónico 4D/3N (Desde $349 USD).",
        },
        {
          id: "lim-iqt-vuelo",
          titulo: "Solo Vuelo Lima – Iquitos (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "LATAM / SKY · Impuestos incluidos",
          precioPrincipal: "$119",
          precioSecundario: "$60",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Iquitos",
          resumenCorto: "Boleto aéreo directo LIM → IQT → LIM con tasas",
          checks: [
            "Boleto aéreo directo Lima – Iquitos – Lima",
            "Tasas e impuestos aeroportuarios incluidos",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Iquitos ida y vuelta (Desde $119 USD).",
        },
      ],
      pilares: [
        { titulo: "1h 50m Directo", sub: "Vuelos diarios sin escalas desde Lima" },
        { titulo: "Lodges en la Selva", sub: "Con alimentación y excursiones fluviales" },
        { titulo: "Separa con 50%", sub: "Congela tu paquete hoy mismo" },
        { titulo: "RUC 20614914239", sub: "Agencia formal registrada en MINCETUR" },
      ],
      bannerFinal: {
        sobretitulo: "Maravilla Natural del Mundo",
        titulo: "¿Quieres conocer Iquitos y navegar el Amazonas?",
        descripcion:
          "Escríbenos por WhatsApp y recibe el itinerario completo con los mejores lodges.",
        ctaTexto: "Consultar tarifa Lima – Iquitos por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Iquitos. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1699575678956-aefa714b67f0?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Iquitos",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Iquitos",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Iquitos. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-puno",
    origen: "Lima",
    destino: "Puno & Lago Titicaca",
    codigoOrigen: "LIM",
    codigoDestino: "JUL",
    metaTitle:
      "Vuelos y Paquetes de Lima a Puno / Juliaca & Lago Titicaca Desde $119 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos directos de Lima a Juliaca / Puno (LIM - JUL) Desde $119 USD ida y vuelta o paquetes Islas de los Uros, Taquile y Sillustani Desde $329 USD.",
    keywords: [
      "vuelos de lima a juliaca puno",
      "paquetes a puno desde lima",
      "tour lago titicaca uros taquile",
      "pasajes aereos lima juliaca",
      "cityland travel puno",
    ],
    precioDesdeUSD: 119,
    faqs: [
      {
        q: "¿A qué aeropuerto se llega para viajar de Lima a Puno?",
        a: "Se vuela directamente al Aeropuerto Internacional Inca Manco Cápac de Juliaca (JUL) en 1 hora y 40 minutos, y desde allí nuestros traslados te llevan en 50 minutos hasta tu hotel en la ciudad de Puno o a orillas del Lago Titicaca.",
      },
      {
        q: "¿Qué incluye el paquete a Puno y Lago Titicaca Desde $329 USD?",
        a: "Incluye vuelos Lima – Juliaca ida y vuelta, traslados a Puno, 3 noches de hotel con desayunos, visita a las Chullpas de Sillustani y navegación de día completo a las Islas Flotantes de los Uros y Taquile con almuerzo típico. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta Altiplano LIM → JUL · El Lago Navegable Más Alto del Mundo",
      banderasHero: ["Perú"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Puno & Lago Titicaca",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia Juliaca, Puno y el Lago Titicaca.",
      negritaHero:
        "Reserva solo tu vuelo o el paquete con Islas de los Uros, Taquile y Sillustani separando con el 50%.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Puno / Juliaca. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos de 1h 40m a Juliaca (JUL)",
        "Traslados aeropuerto de Juliaca – Hotel en Puno",
        "Excursiones a Uros, Taquile, Sillustani o Ruta del Sol a Cusco",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Lago Titicaca",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1522409994346-2682217b9a3e?auto=format&fit=crop&w=1000&q=85",
        alt: "Lago Titicaca en Puno — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Juliaca / Puno (JUL)",
        titulo: "Vuelos y Paquetes a Puno & Lago Titicaca",
        labelPrecio: "Vuelo referencial ida y vuelta desde",
        precio: "$119",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Puno y Lago Titicaca. ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Modalidades para viajar de Lima a Puno",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "paquete", label: "Paquete Puno + Titicaca" },
          { id: "vuelo", label: "Solo Vuelo" },
        ],
      },
      items: [
        {
          id: "lim-jul-paquete",
          titulo: "Paquete Puno, Islas de los Uros, Taquile & Sillustani (4D/3N)",
          pais: "Perú",
          filtro: "paquete",
          subtitulo: "Vuelos + Traslados + Hotel 3★/4★ + Navegación en el Titicaca",
          precioPrincipal: "$329",
          precioSecundario: "$165",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Todo Organizado",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1522409994346-2682217b9a3e?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete a Puno y Lago Titicaca",
          resumenCorto: "Vuelos + 3 noches de hotel + Uros, Taquile y Sillustani",
          checks: [
            "Boletos aéreos Lima – Juliaca – Lima con impuestos",
            "3 noches de hotel en Puno con desayunos + excursiones guiadas",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete a Puno y Lago Titicaca 4D/3N (Desde $329 USD).",
        },
        {
          id: "lim-jul-vuelo",
          titulo: "Solo Vuelo Lima – Juliaca / Puno (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "LATAM / SKY · Impuestos incluidos",
          precioPrincipal: "$119",
          precioSecundario: "$60",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Juliaca Puno",
          resumenCorto: "Boleto aéreo directo LIM → JUL → LIM con tasas",
          checks: [
            "Boleto aéreo directo Lima – Juliaca – Lima",
            "Tasas aeroportuarias TUUA incluidas",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Juliaca ida y vuelta (Desde $119 USD).",
        },
      ],
      pilares: [
        { titulo: "1h 40m Directo", sub: "Vuelos diarios al aeropuerto de Juliaca" },
        { titulo: "Uros y Taquile", sub: "Lancha rápida y almuerzo frente al lago" },
        { titulo: "Conexión a Cusco", sub: "Opción de Ruta del Sol Puno – Cusco" },
        { titulo: "RUC 20614914239", sub: "Agencia formal registrada en MINCETUR" },
      ],
      bannerFinal: {
        sobretitulo: "Turismo en el Altiplano Peruano",
        titulo: "¿Planeas viajar a Puno o combinarlo con Cusco?",
        descripcion:
          "Escríbenos por WhatsApp y te armamos el circuito a tu medida.",
        ctaTexto: "Consultar tarifa Lima – Puno por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Puno. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1522409994346-2682217b9a3e?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Puno",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Puno",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Puno. ¿Me pueden ayudar?",
      },
    },
  },
];
