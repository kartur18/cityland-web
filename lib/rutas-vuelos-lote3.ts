import type { RutaVueloSEO } from "@/lib/rutas-vuelos";

export const RUTAS_VUELOS_LOTE_3: RutaVueloSEO[] = [
  {
    slug: "lima-valencia",
    origen: "Lima",
    destino: "Valencia",
    codigoOrigen: "LIM",
    codigoDestino: "VLC",
    metaTitle:
      "Vuelos de Lima a Valencia, España Desde $950 USD (Ida y Vuelta) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Valencia (LIM - VLC) Desde $950 USD con impuestos incluidos. Conexión vía Madrid con Iberia o Air Europa, equipaje de 23 kg y carpeta migratoria Schengen.",
    keywords: [
      "vuelos de lima a valencia espana",
      "pasajes aereos lima valencia",
      "viajar a valencia desde peru",
      "vuelos economicos lima valencia",
      "cityland travel valencia",
    ],
    precioDesdeUSD: 950,
    faqs: [
      {
        q: "¿Cómo son los vuelos de Lima a Valencia, España?",
        a: "Los vuelos salen del Aeropuerto Jorge Chávez (LIM) hacia Valencia (VLC) con una conexión rápida en Madrid-Barajas (MAD) a través de Iberia o Air Europa, o vía Ámsterdam con KLM, con tu equipaje registrado directo hasta destino final.",
      },
      {
        q: "¿El precio Desde $950 USD incluye impuestos y maleta?",
        a: "Sí. Incluye impuestos aeroportuarios y cargos obligatorios. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → VLC · Vuelos a la Comunidad Valenciana con Equipaje",
      banderasHero: ["Perú", "España"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Valencia, España",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos y conexión vía Madrid.",
      negritaHero:
        "Ideal para visita familiar, turismo por el Mediterráneo o estadía con carpeta migratoria Schengen completa.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Valencia, España. ¿Me pueden ayudar?",
      checksHero: [
        "Conexión rápida vía Madrid",
        "Equipaje de mano 10 kg + bodega 23 kg",
        "Seguro Schengen 30.000€ disponible",
      ],
      vitrina: {
        pais: "España",
        etiquetaIzq: "Mediterráneo Español",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=1000&q=85",
        alt: "Ciudad de las Artes y las Ciencias — Vuelos de Lima a Valencia",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Valencia (VLC)",
        titulo: "Vuelos Confirmados Lima – Valencia",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$950",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Valencia (Desde $950 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Modalidades para volar de Lima a Valencia",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Boleto Aéreo" },
          { id: "paquete", label: "Con Carpeta / Hotel" },
        ],
      },
      items: [
        {
          id: "lim-vlc-vuelo",
          titulo: "Vuelo Lima – Valencia (Ida y Vuelta)",
          pais: "España",
          filtro: "vuelo",
          subtitulo: "Iberia / Air Europa · 1 Conexión en Madrid",
          precioPrincipal: "$950",
          precioSecundario: "$475",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Más Cotizado",
          tagBg: "bg-red-600",
          img: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Valencia ida y vuelta",
          resumenCorto: "Vuelo LIM → VLC ida y vuelta con maleta de 23 kg",
          checks: [
            "Boleto aéreo Lima – Madrid – Valencia (Ida y vuelta)",
            "Maleta de mano 10 kg + equipaje de bodega 23 kg",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Valencia (Desde $950 USD).",
        },
        {
          id: "lim-vlc-carpeta",
          titulo: "Vuelo Lima – Valencia + Carpeta Migratoria Schengen",
          pais: "España",
          filtro: "paquete",
          subtitulo: "Vuelo + Seguro 30.000€ + Reserva de Alojamiento",
          precioPrincipal: "$1,050",
          precioSecundario: "$525",
          notaPrecio: "Paquete migratorio · Incluye impuestos (Verif. Oct 2026)",
          tag: "Viaje Seguro",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete migratorio Lima a Valencia",
          resumenCorto: "Boleto + Seguro Schengen 30.000€ + Sustento de hospedaje",
          checks: [
            "Boleto confirmado con código PNR verificable",
            "Seguro médico Schengen cobertura 30.000€ sin deducible",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete Lima - Valencia con Carpeta Migratoria (Desde $1,050 USD).",
        },
      ],
      pilares: [
        { titulo: "Conexión Vía Madrid", sub: "Equipaje facturado directo hasta Valencia" },
        { titulo: "Equipaje 23 kg", sub: "Maleta de bodega + 10 kg en cabina" },
        { titulo: "Carpeta Schengen", sub: "Seguro 30.000€ y reserva hotelera" },
        { titulo: "RUC 20614914239", sub: "Atención física en Lima y por WhatsApp" },
      ],
      bannerFinal: {
        sobretitulo: "Salidas Semanales a España",
        titulo: "¿Buscas pasajes de Lima a Valencia?",
        descripcion:
          "Un asesor verifica hoy mismo los cupos en Iberia y Air Europa para tus fechas.",
        ctaTexto: "Consultar tarifa Lima – Valencia por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Valencia. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1559564484-e48b3e040ff4?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes de Lima a Valencia",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Valencia",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Valencia. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-malaga",
    origen: "Lima",
    destino: "Málaga",
    codigoOrigen: "LIM",
    codigoDestino: "AGP",
    metaTitle:
      "Vuelos de Lima a Málaga y Costa del Sol Desde $960 USD | Cityland Travel",
    metaDescription:
      "Encuentra vuelos de Lima a Málaga (LIM - AGP) Desde $960 USD con impuestos incluidos. Vuelos hacia Andalucía vía Madrid con equipaje de 23 kg y Seguro Schengen.",
    keywords: [
      "vuelos de lima a malaga",
      "pasajes aereos lima malaga",
      "viajar a malaga desde peru",
      "vuelos lima andalucia",
      "cityland travel malaga",
    ],
    precioDesdeUSD: 960,
    faqs: [
      {
        q: "¿Cómo se viaja de Lima a Málaga?",
        a: "Volando desde Lima (LIM) hacia Madrid (MAD) y conectando en vuelo corto o tren de alta velocidad hacia Málaga-Costa del Sol (AGP) con Iberia o Air Europa.",
      },
      {
        q: "¿El precio Desde $960 USD incluye impuestos?",
        a: "Sí, incluye impuestos aeroportuarios y tasas obligatorias. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → AGP · Puerta de Entrada a Andalucía y Costa del Sol",
      banderasHero: ["Perú", "España"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Málaga (Costa del Sol)",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos para viajar al sur de España.",
      negritaHero:
        "Conexiones a Málaga, Marbella, Sevilla y Granada con equipaje completo.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Málaga, España. ¿Me pueden ayudar?",
      checksHero: [
        "Conexión vía Madrid",
        "Equipaje 23 kg + cabina 10 kg",
        "Asesoría migratoria Schengen incluida",
      ],
      vitrina: {
        pais: "España",
        etiquetaIzq: "Sur de España",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1561632669-7f55f7975606?auto=format&fit=crop&w=1000&q=85",
        alt: "Málaga y Costa del Sol — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Málaga-Costa del Sol (AGP)",
        titulo: "Vuelos Lima – Málaga (Ida y Vuelta)",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$960",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Málaga (Desde $960 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas en Dólares con Impuestos Incluidos",
        titulo: "Opciones para volar de Lima a Málaga",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Paquete Andalucía" },
        ],
      },
      items: [
        {
          id: "lim-agp-vuelo",
          titulo: "Boleto Aéreo Lima – Málaga (Ida y Vuelta)",
          pais: "España",
          filtro: "vuelo",
          subtitulo: "Iberia / Air Europa · Incluye equipaje de bodega",
          precioPrincipal: "$960",
          precioSecundario: "$480",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Tarifa Base",
          tagBg: "bg-red-600",
          img: "https://images.unsplash.com/photo-1561632669-7f55f7975606?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Málaga",
          resumenCorto: "Vuelo Lima – Madrid – Málaga con equipaje de 23 kg",
          checks: [
            "Vuelo Lima – Madrid – Málaga ida y vuelta",
            "Equipaje de mano 10 kg + maleta de 23 kg",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Boleto Lima - Málaga (Desde $960 USD).",
        },
        {
          id: "lim-agp-paquete",
          titulo: "Paquete Madrid & Andalucía (Málaga, Sevilla y Granada)",
          pais: "España",
          filtro: "paquete",
          subtitulo: "9 Días / 8 Noches · Vuelos + Hoteles + Seguro Schengen",
          precioPrincipal: "$1,590",
          precioSecundario: "$795",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Circuito Sur",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=900&q=80",
          alt: "Circuito Andalucía desde Lima",
          resumenCorto: "Vuelos + 8 noches de hotel + Seguro Schengen 30.000€",
          checks: [
            "Vuelos internacionales Lima – España ida y vuelta",
            "8 noches de alojamiento con desayunos y Seguro Schengen",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete Madrid y Andalucía (Desde $1,590 USD).",
        },
      ],
      pilares: [
        { titulo: "Costa del Sol", sub: "Málaga, Marbella, Torremolinos y Sevilla" },
        { titulo: "Equipaje Completo", sub: "23 kg en bodega + 10 kg en cabina" },
        { titulo: "Separa con 50%", sub: "Congela tu paquete turístico hoy" },
        { titulo: "RUC 20614914239", sub: "Agencia formal con sede en Los Olivos" },
      ],
      bannerFinal: {
        sobretitulo: "Salidas hacia Andalucía",
        titulo: "¿Planeas viajar de Lima a Málaga?",
        descripcion:
          "Escríbenos por WhatsApp y recibe las mejores fechas y tarifas disponibles.",
        ctaTexto: "Consultar tarifa Lima – Málaga por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Málaga. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1561632669-7f55f7975606?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes de Lima a Málaga",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Málaga",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Málaga. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-milan",
    origen: "Lima",
    destino: "Milán",
    codigoOrigen: "LIM",
    codigoDestino: "MXP",
    metaTitle:
      "Vuelos de Lima a Milán, Italia Desde $970 USD (Ida y Vuelta) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Milán Malpensa (LIM - MXP) Desde $970 USD con impuestos incluidos. Tarifas con equipaje de 23 kg, Seguro Schengen y asesoría migratoria en Lima.",
    keywords: [
      "vuelos de lima a milan",
      "pasajes aereos lima milan italia",
      "vuelos economicos lima a milan",
      "viajar a milan desde peru",
      "cityland travel milan",
    ],
    precioDesdeUSD: 970,
    faqs: [
      {
        q: "¿Cuál es la ruta más directa para volar de Lima a Milán?",
        a: "Las rutas más rápidas conectan vía Madrid (Iberia / Air Europa) o vía Ámsterdam/París (KLM / Air France) llegando al Aeropuerto de Milán-Malpensa (MXP) o Milán-Linate (LIN).",
      },
      {
        q: "¿Los peruanos necesitan visa para viajar a Milán?",
        a: "No para estancias turísticas o visita familiar de hasta 90 días en el Espacio Schengen. Solo requieres pasaporte vigente, boleto de retorno, seguro Schengen de 30.000€ y sustento de alojamiento.",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → MXP · El Destino #1 de la Comunidad Peruana en Italia",
      banderasHero: ["Perú", "Italia"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Milán, Italia (Malpensa)",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia el norte de Italia.",
      negritaHero:
        "Vuelos de ida y vuelta, boletos con equipaje de 23 kg y paquetes por Italia con Seguro Schengen.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Milán, Italia. ¿Me pueden ayudar?",
      checksHero: [
        "Conexión rápida vía Madrid o Ámsterdam",
        "Equipaje de bodega 23 kg + mano 10 kg",
        "Asesoría de Dichiarazione di Ospitalità / Hotel",
      ],
      vitrina: {
        pais: "Italia",
        etiquetaIzq: "Norte de Italia",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=1000&q=85",
        alt: "Duomo de Milán — Vuelos de Lima a Milán",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Milán Malpensa (MXP)",
        titulo: "Vuelos Confirmados Lima – Milán",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$970",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Milán (Desde $970 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Modalidades para viajar de Lima a Milán",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Carpeta / Circuito Italia" },
        ],
      },
      items: [
        {
          id: "lim-mxp-vuelo",
          titulo: "Vuelo Lima – Milán (Ida y Vuelta)",
          pais: "Italia",
          filtro: "vuelo",
          subtitulo: "Iberia / Air Europa / KLM · 1 Escala",
          precioPrincipal: "$970",
          precioSecundario: "$485",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Más Vendido a Italia",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Milán",
          resumenCorto: "Boleto aéreo LIM → MXP con maleta de 23 kg",
          checks: [
            "Boleto aéreo Lima – Milán ida y vuelta",
            "Equipaje de mano 10 kg + maleta de 23 kg en bodega",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Milán (Desde $970 USD).",
        },
        {
          id: "lim-mxp-carpeta",
          titulo: "Paquete Lima – Milán + Carpeta Migratoria Italia",
          pais: "Italia",
          filtro: "paquete",
          subtitulo: "Vuelo + Seguro Schengen 30.000€ + Reserva Hotelera",
          precioPrincipal: "$1,080",
          precioSecundario: "$540",
          notaPrecio: "Paquete migratorio · Incluye impuestos (Verif. Oct 2026)",
          tag: "Ingreso Seguro",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80",
          alt: "Carpeta migratoria para viajar a Milán Italia",
          resumenCorto: "Vuelo + Seguro Schengen + Reserva o Carta de Invitación",
          checks: [
            "Boleto aéreo confirmado ida y vuelta con PNR",
            "Seguro médico Schengen 30.000€ válido en toda Italia",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete Lima - Milán con Carpeta Migratoria (Desde $1,080 USD).",
        },
      ],
      pilares: [
        { titulo: "Aeropuerto Malpensa", sub: "Conexión rápida desde Lima con 1 escala" },
        { titulo: "Equipaje 23 kg", sub: "Maleta de bodega + equipaje de mano" },
        { titulo: "Asesoría Italia", sub: "Orientación en Dichiarazione di Ospitalità" },
        { titulo: "RUC 20614914239", sub: "Respaldo de agencia formal en Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Especialistas en Rutas a Italia",
        titulo: "¿Buscas vuelos de Lima a Milán?",
        descripcion:
          "Cotiza hoy mismo por WhatsApp con un asesor especializado en rutas a Italia.",
        ctaTexto: "Consultar tarifa Lima – Milán por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Milán, Italia. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes de Lima a Milán",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Milán",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Milán. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-amsterdam",
    origen: "Lima",
    destino: "Ámsterdam",
    codigoOrigen: "LIM",
    codigoDestino: "AMS",
    metaTitle:
      "Vuelos Directos de Lima a Ámsterdam Desde $960 USD (Ida y Vuelta) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Ámsterdam Schiphol (LIM - AMS) Desde $960 USD con impuestos incluidos. Vuelos directos en KLM o con escala en Air Europa e Iberia.",
    keywords: [
      "vuelos de lima a amsterdam",
      "vuelo directo lima amsterdam klm",
      "pasajes aereos lima amsterdam",
      "viajar a holanda desde peru",
      "cityland travel amsterdam",
    ],
    precioDesdeUSD: 960,
    faqs: [
      {
        q: "¿Hay vuelos directos de Lima a Ámsterdam?",
        a: "Sí, KLM opera vuelos directos entre Lima (LIM) y el Aeropuerto de Ámsterdam-Schiphol (AMS), además de opciones competitivas con 1 escala a través de Madrid.",
      },
      {
        q: "¿El precio Desde $960 USD incluye impuestos?",
        a: "Sí, todas nuestras tarifas incluyen impuestos aeroportuarios y tasas obligatorias. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → AMS · Vuelo Directo KLM y Conexiones a toda Europa",
      banderasHero: ["Perú", "Europa"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Ámsterdam (Schiphol)",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia los Países Bajos.",
      negritaHero:
        "Vuela sin escalas con KLM o ahorra con conexión vía Madrid con equipaje y Seguro Schengen.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Ámsterdam. ¿Me pueden ayudar?",
      checksHero: [
        "Opción de vuelo directo en KLM",
        "Equipaje de mano 10 kg + bodega 23 kg",
        "Seguro Schengen 30.000€ disponible",
      ],
      vitrina: {
        pais: "Países Bajos",
        etiquetaIzq: "Hub Europeo",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1000&q=85",
        alt: "Canales de Ámsterdam — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Ámsterdam Schiphol (AMS)",
        titulo: "Vuelos Lima – Ámsterdam (Ida y Vuelta)",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$960",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Ámsterdam (Desde $960 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para volar de Lima a Ámsterdam",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Circuito Europeo" },
        ],
      },
      items: [
        {
          id: "lim-ams-vuelo",
          titulo: "Vuelo Lima – Ámsterdam (Ida y Vuelta)",
          pais: "Países Bajos",
          filtro: "vuelo",
          subtitulo: "KLM / Air Europa / Iberia · Impuestos incluidos",
          precioPrincipal: "$960",
          precioSecundario: "$480",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Ruta Europa",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Ámsterdam",
          resumenCorto: "Boleto LIM → AMS ida y vuelta con impuestos",
          checks: [
            "Boleto aéreo Lima – Ámsterdam ida y vuelta",
            "Equipaje de mano 10 kg + equipaje de bodega 23 kg",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Ámsterdam (Desde $960 USD).",
        },
        {
          id: "lim-ams-paquete",
          titulo: "Circuito Ámsterdam, Bruselas, Brujas y París",
          pais: "Países Bajos",
          filtro: "paquete",
          subtitulo: "10 Días / 9 Noches · Vuelos + Hoteles 4★ + Guía",
          precioPrincipal: "$1,890",
          precioSecundario: "$945",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Países Bajos + Francia",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80",
          alt: "Circuito Ámsterdam Brujas y París",
          resumenCorto: "Vuelos + 9 noches de hotel + circuito guiado",
          checks: [
            "Vuelos internacionales desde Lima ida y vuelta",
            "9 noches de alojamiento con desayunos diarios y guía en español",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Circuito Ámsterdam, Brujas y París (Desde $1,890 USD).",
        },
      ],
      pilares: [
        { titulo: "Vuelo Directo KLM", sub: "Opción sin escalas Lima – Ámsterdam" },
        { titulo: "Equipaje 23 kg", sub: "Tarifas con maleta de bodega" },
        { titulo: "Seguro Schengen", sub: "Cobertura obligatoria de 30.000€" },
        { titulo: "RUC 20614914239", sub: "Agencia formal con sede en Los Olivos" },
      ],
      bannerFinal: {
        sobretitulo: "Conexión Directa a los Países Bajos",
        titulo: "¿Quieres cotizar tu vuelo de Lima a Ámsterdam?",
        descripcion:
          "Un asesor te envía en minutos las tarifas reales disponibles para tu mes de viaje.",
        ctaTexto: "Consultar tarifa Lima – Ámsterdam por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Ámsterdam. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes de Lima a Ámsterdam",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Ámsterdam",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Ámsterdam. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-estambul",
    origen: "Lima",
    destino: "Estambul",
    codigoOrigen: "LIM",
    codigoDestino: "IST",
    metaTitle:
      "Vuelos y Paquetes de Lima a Estambul & Capadocia Desde $1,190 USD | Cityland Travel",
    metaDescription:
      "Viaja de Lima a Estambul, Turquía (LIM - IST) sin visa para peruanos. Vuelos Desde $1,190 USD y circuito completo con Capadocia Desde $1,790 USD con impuestos incluidos.",
    keywords: [
      "vuelos de lima a estambul",
      "viajar a turquia desde peru precio",
      "paquetes a turquia desde lima",
      "pasajes lima estambul",
      "cityland travel turquia",
    ],
    precioDesdeUSD: 1190,
    faqs: [
      {
        q: "¿Los peruanos necesitan visa para viajar a Estambul y Turquía?",
        a: "No. Los ciudadanos peruanos están exonerados de visa de turismo para ingresar a Turquía hasta por 90 días; únicamente necesitas pasaporte con vigencia mínima de 6 meses.",
      },
      {
        q: "¿Qué incluye el paquete a Turquía Desde $1,790 USD?",
        a: "Incluye boletos aéreos ida y vuelta desde Lima, hoteles 4★ y 5★ en Estambul, Capadocia y Pamukkale, desayunos y cenas según programa, traslados y guía en español. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → IST · Sin Visa para Peruanos · Estambul y Capadocia",
      banderasHero: ["Perú", "Turquía"],
      tituloHero: "Vuelos y Circuitos de Lima a",
      tituloDestacadoHero: "Estambul & Capadocia",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos para conocer Turquía sin visa.",
      negritaHero:
        "Reserva solo tu boleto aéreo o el circuito completo de 10 días con hoteles 4★/5★ separando con el 50%.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Estambul y Capadocia. ¿Me pueden ayudar?",
      checksHero: [
        "Sin visa consular para peruanos",
        "Equipaje de bodega 23 kg incluido",
        "Circuitos con Capadocia y Pamukkale",
      ],
      vitrina: {
        pais: "Turquía",
        etiquetaIzq: "Exótico Sin Visa",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1000&q=85",
        alt: "Globos en Capadocia y Estambul — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Estambul (IST)",
        titulo: "Vuelos y Circuito Turquía de Ensueño",
        labelPrecio: "Vuelo referencial ida y vuelta desde",
        precio: "$1,190",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Estambul / Turquía. ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para viajar a Turquía desde Lima",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "paquete", label: "Circuito Completo" },
          { id: "vuelo", label: "Solo Vuelo" },
        ],
      },
      items: [
        {
          id: "lim-ist-paquete",
          titulo: "Circuito Turquía Mágica: Estambul, Capadocia y Pamukkale",
          pais: "Turquía",
          filtro: "paquete",
          subtitulo: "10 Días / 9 Noches · Vuelos + Hoteles 4★/5★ + Cenas",
          precioPrincipal: "$1,790",
          precioSecundario: "$895",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Favorito a Turquía",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=900&q=80",
          alt: "Circuito Turquía desde Lima",
          resumenCorto: "Vuelos + 9 noches hoteles 4★/5★ + Capadocia + Pamukkale",
          checks: [
            "Boletos aéreos Lima – Estambul ida y vuelta con equipaje",
            "9 noches en hoteles 4★ y 5★ con desayunos y cenas",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Circuito Turquía Mágica 10D/9N (Desde $1,790 USD).",
        },
        {
          id: "lim-ist-vuelo",
          titulo: "Solo Boleto Aéreo Lima – Estambul (Ida y Vuelta)",
          pais: "Turquía",
          filtro: "vuelo",
          subtitulo: "Conexión vía Madrid, Bogotá o Panamá · Con maleta 23 kg",
          precioPrincipal: "$1,190",
          precioSecundario: "$595",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo Lima a Estambul",
          resumenCorto: "Vuelo internacional LIM → IST con equipaje incluido",
          checks: [
            "Vuelo internacional Lima – Estambul ida y vuelta",
            "Equipaje de mano 10 kg + maleta de bodega 23 kg",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Estambul (Desde $1,190 USD).",
        },
      ],
      pilares: [
        { titulo: "Sin Visa Consular", sub: "Ingreso libre con pasaporte peruano" },
        { titulo: "Hoteles 4★ y 5★", sub: "Estambul, Capadocia y Pamukkale" },
        { titulo: "Separa con 50%", sub: "Congela tu paquete y paga en cuotas" },
        { titulo: "RUC 20614914239", sub: "Respaldo legal en Lima, Perú" },
      ],
      bannerFinal: {
        sobretitulo: "Salidas Mensuales Confirmadas",
        titulo: "¿Listo para conocer Estambul y Capadocia?",
        descripcion:
          "Escríbenos por WhatsApp y recibe el itinerario completo día por día.",
        ctaTexto: "Consultar tarifa a Turquía por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Estambul y Capadocia. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Turquía desde Lima",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Estambul",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Estambul. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "miami-lima",
    origen: "Miami",
    destino: "Lima",
    codigoOrigen: "MIA",
    codigoDestino: "LIM",
    metaTitle:
      "Vuelos de Miami a Lima Desde $489 USD (Ida y Vuelta / Solo Ida) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Miami a Lima (MIA - LIM) Desde $489 USD con impuestos incluidos. Vuelos directos en LATAM, American Airlines y SKY para visitar a tu familia en Perú.",
    keywords: [
      "vuelos de miami a lima",
      "pasajes de miami a lima peru",
      "vuelos baratos miami lima",
      "boletos aereos miami a lima directo",
      "cityland travel miami lima",
    ],
    precioDesdeUSD: 489,
    faqs: [
      {
        q: "¿Cuánto dura el vuelo directo de Miami a Lima?",
        a: "El vuelo directo sin escalas desde el Aeropuerto Internacional de Miami (MIA) hasta el Aeropuerto Jorge Chávez de Lima (LIM) tiene una duración aproximada de 5 horas y 35 minutos.",
      },
      {
        q: "¿Puedo comprar en Lima el pasaje para un familiar que viene desde Miami?",
        a: "Sí. Puedes pagar el boleto en nuestra oficina de Lima o por transferencia bancaria en Perú y enviamos el ticket electrónico emitido directamente a tu familiar en Estados Unidos.",
      },
    ],
    config: {
      badgeHero: "Ruta Inversa MIA → LIM · Vuelos Directos Estados Unidos a Perú",
      banderasHero: ["Estados Unidos", "Perú"],
      tituloHero: "Vuelos Confirmados de Miami a",
      tituloDestacadoHero: "Lima, Perú",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos para residentes en EE.UU. y visita familiar.",
      negritaHero:
        "Vuelos directos de 5h 35m en LATAM, American Airlines y SKY, o con 1 escala en Copa y Avianca.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Miami a Lima. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos de 5h 35m",
        "Emisión para residentes o familiares",
        "Opciones con maleta de 23 kg",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Ruta Retorno",
        etiquetaDer: "Vuelo Directo",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",
        alt: "Costa Verde de Miraflores — Vuelos de Miami a Lima",
        sobretitulo: "Miami International (MIA) → Aeropuerto Jorge Chávez (LIM)",
        titulo: "Vuelos Directos Miami – Lima",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$489",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Miami a Lima (Desde $489 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas en Dólares con Impuestos Incluidos",
        titulo: "Modalidades para volar de Miami a Lima",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Ida y Vuelta" },
          { id: "oneway", label: "Solo Ida" },
        ],
      },
      items: [
        {
          id: "mia-lim-rt",
          titulo: "Vuelo Miami – Lima – Miami (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "LATAM / SKY / American / Copa · Impuestos incluidos",
          precioPrincipal: "$489",
          precioSecundario: "$245",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Más Solicitado",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Miami a Lima ida y vuelta",
          resumenCorto: "Boleto directo MIA → LIM → MIA con impuestos",
          checks: [
            "Boleto aéreo Miami – Lima – Miami",
            "Equipaje de mano incluido (opción de bodega 23 kg)",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Miami - Lima ida y vuelta (Desde $489 USD).",
        },
        {
          id: "mia-lim-ow",
          titulo: "Boleto Solo Ida Miami → Lima",
          pais: "Perú",
          filtro: "oneway",
          subtitulo: "Para retorno definitivo al Perú o ciudadanos peruanos",
          precioPrincipal: "$289",
          precioSecundario: "$289",
          notaPrecio: "Solo ida · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Ida",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo solo ida de Miami a Lima",
          resumenCorto: "Un tramo directo Miami (MIA) → Lima (LIM)",
          checks: [
            "Boleto aéreo un tramo Miami (MIA) → Lima (LIM)",
            "Opciones para agregar 1 o 2 maletas de 23 kg",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para un Vuelo Solo Ida de Miami a Lima (Desde $289 USD).",
        },
      ],
      pilares: [
        { titulo: "5h 35m Directo", sub: "Vuelos sin escalas Miami – Lima" },
        { titulo: "Compra desde Perú", sub: "Paga en Lima para familiares en EE.UU." },
        { titulo: "Emisión Inmediata", sub: "Código de reserva PNR al instante" },
        { titulo: "RUC 20614914239", sub: "Agencia formal con sede en Los Olivos" },
      ],
      bannerFinal: {
        sobretitulo: "Atención para Peruanos en Estados Unidos",
        titulo: "¿Viajas de Miami a Lima próximamente?",
        descripcion:
          "Escríbenos por WhatsApp y cotiza tu vuelo directo con equipaje.",
        ctaTexto: "Consultar tarifa Miami – Lima por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Miami a Lima. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos de Miami a Lima",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Miami → Lima",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Miami a Lima. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "buenos-aires-lima",
    origen: "Buenos Aires",
    destino: "Lima",
    codigoOrigen: "EZE",
    codigoDestino: "LIM",
    metaTitle:
      "Vuelos de Buenos Aires a Lima Desde $389 USD (Ida y Vuelta / Solo Ida) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Buenos Aires a Lima (EZE/AEP - LIM) Desde $389 USD con impuestos incluidos. Vuelos directos en LATAM, SKY, Aerolíneas Argentinas y JetSMART.",
    keywords: [
      "vuelos de buenos aires a lima",
      "pasajes de buenos aires a lima",
      "vuelos baratos buenos aires lima",
      "boletos aereos argentina a peru",
      "cityland travel buenos aires lima",
    ],
    precioDesdeUSD: 389,
    faqs: [
      {
        q: "¿De qué aeropuertos salen los vuelos de Buenos Aires a Lima?",
        a: "Salen tanto del Aeropuerto Internacional de Ezeiza (EZE) como del Aeroparque Jorge Newbery (AEP) en vuelos directos de 4 horas y 40 minutos hacia Lima (LIM).",
      },
      {
        q: "¿Puedo comprar el pasaje desde Perú para un familiar en Argentina?",
        a: "Sí, puedes abonarlo en Lima evitando los recargos e impuestos a tarjetas emitidas en Argentina, y enviamos el boleto electrónico directo al pasajero.",
      },
    ],
    config: {
      badgeHero: "Ruta Inversa EZE/AEP → LIM · Emitido en Perú sin Recargos Argentinos",
      banderasHero: ["Argentina", "Perú"],
      tituloHero: "Vuelos Directos de Buenos Aires a",
      tituloDestacadoHero: "Lima, Perú",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos emitidas directamente desde Lima.",
      negritaHero:
        "Ahorra emitiendo tu boleto desde Perú en dólares sin impuestos adicionales a tarjetas argentinas.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Buenos Aires a Lima. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos desde Ezeiza o Aeroparque",
        "Emisión en Perú sin recargos locales",
        "Viaja solo con DNI vigente",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Argentina → Perú",
        etiquetaDer: "Sin Recargos",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",
        alt: "Vuelos de Buenos Aires a Lima",
        sobretitulo: "Ezeiza (EZE) / Aeroparque (AEP) → Lima (LIM)",
        titulo: "Vuelos Directos Buenos Aires – Lima",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$389",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Buenos Aires a Lima (Desde $389 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para volar de Buenos Aires a Lima",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Ida y Vuelta" },
          { id: "oneway", label: "Solo Ida" },
        ],
      },
      items: [
        {
          id: "bue-lim-rt",
          titulo: "Vuelo Directo Buenos Aires – Lima (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "LATAM / SKY / JetSMART / Aerolíneas Argentinas",
          precioPrincipal: "$389",
          precioSecundario: "$195",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Emisión en Perú",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Buenos Aires a Lima ida y vuelta",
          resumenCorto: "Emitido en Lima libre de percepciones argentinas",
          checks: [
            "Boleto aéreo directo Buenos Aires – Lima – Buenos Aires",
            "Emitido en Perú (libre de percepciones a tarjetas argentinas)",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Buenos Aires - Lima ida y vuelta (Desde $389 USD).",
        },
        {
          id: "bue-lim-ow",
          titulo: "Vuelo Solo Ida Buenos Aires → Lima",
          pais: "Perú",
          filtro: "oneway",
          subtitulo: "Un tramo directo con opción de equipaje de 23 kg",
          precioPrincipal: "$229",
          precioSecundario: "$229",
          notaPrecio: "Solo ida · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Ida",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo solo ida Buenos Aires a Lima",
          resumenCorto: "Boleto directo Ezeiza / Aeroparque → Lima",
          checks: [
            "Boleto directo Ezeiza o Aeroparque hacia Lima",
            "Equipaje de mano + opción de bodega 23 kg",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Solo Ida de Buenos Aires a Lima (Desde $229 USD).",
        },
      ],
      pilares: [
        { titulo: "Sin Recargos AR", sub: "Emisión directa en dólares desde Perú" },
        { titulo: "Ezeiza o Aeroparque", sub: "Vuelos directos diarios de 4h 40m" },
        { titulo: "Solo con DNI", sub: "Para ciudadanos peruanos y argentinos" },
        { titulo: "RUC 20614914239", sub: "Respaldo de agencia en Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Reunificación Familiar y Turismo",
        titulo: "¿Buscas pasajes de Buenos Aires a Lima?",
        descripcion:
          "Escríbenos por WhatsApp y ahorra emitiendo tu boleto directamente en Perú.",
        ctaTexto: "Consultar tarifa Buenos Aires – Lima por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Buenos Aires a Lima. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos de Buenos Aires a Lima",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Bs. Aires → Lima",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Buenos Aires a Lima. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "santiago-lima",
    origen: "Santiago de Chile",
    destino: "Lima",
    codigoOrigen: "SCL",
    codigoDestino: "LIM",
    metaTitle:
      "Vuelos de Santiago de Chile a Lima Desde $249 USD (Ida y Vuelta) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos directos de Santiago de Chile a Lima (SCL - LIM) Desde $249 USD con impuestos incluidos. Salidas diarias en LATAM, SKY y JetSMART.",
    keywords: [
      "vuelos de santiago a lima",
      "pasajes de santiago de chile a lima",
      "vuelos baratos santiago lima",
      "boletos aereos chile a peru",
      "cityland travel santiago lima",
    ],
    precioDesdeUSD: 249,
    faqs: [
      {
        q: "¿Cuánto tarda el vuelo directo de Santiago a Lima?",
        a: "El vuelo directo desde el Aeropuerto Arturo Merino Benítez (SCL) hacia el Aeropuerto Jorge Chávez (LIM) toma aproximadamente 3 horas y 45 minutos.",
      },
      {
        q: "¿El precio Desde $249 USD incluye impuestos?",
        a: "Sí, incluye impuestos aeroportuarios y tasas de embarque. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta Inversa SCL → LIM · Vuelos Directos Diarios de 3h 45m",
      banderasHero: ["Chile", "Perú"],
      tituloHero: "Vuelos Directos de Santiago a",
      tituloDestacadoHero: "Lima, Perú",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos para viajar de Chile a Perú.",
      negritaHero:
        "Boleto de ida y vuelta o solo ida con opción de maletas de bodega de 23 kg.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Santiago de Chile a Lima. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos diarios de 3h 45m",
        "Viaja solo con DNI o Cédula vigente",
        "Facilidad de pago desde Perú o Chile",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Chile → Perú",
        etiquetaDer: "Vuelo Directo",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",
        alt: "Lima Perú — Vuelos desde Santiago de Chile",
        sobretitulo: "Santiago (SCL) → Aeropuerto Jorge Chávez (LIM)",
        titulo: "Vuelos Directos Santiago – Lima",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$249",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Santiago a Lima (Desde $249 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para volar de Santiago a Lima",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Ida y Vuelta" },
          { id: "oneway", label: "Solo Ida" },
        ],
      },
      items: [
        {
          id: "scl-lim-rt",
          titulo: "Vuelo Directo Santiago – Lima (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "LATAM / SKY / JetSMART · Impuestos incluidos",
          precioPrincipal: "$249",
          precioSecundario: "$125",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Tarifa Directa",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Santiago a Lima ida y vuelta",
          resumenCorto: "Vuelo directo SCL → LIM → SCL con impuestos",
          checks: [
            "Boleto aéreo directo Santiago – Lima – Santiago",
            "Tasas de embarque e impuestos incluidos",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Santiago - Lima ida y vuelta (Desde $249 USD).",
        },
        {
          id: "scl-lim-ow",
          titulo: "Vuelo Solo Ida Santiago → Lima",
          pais: "Perú",
          filtro: "oneway",
          subtitulo: "Un tramo directo SCL → LIM",
          precioPrincipal: "$149",
          precioSecundario: "$149",
          notaPrecio: "Solo ida · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Ida",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1557974040-3bec341da09b?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo solo ida de Santiago a Lima",
          resumenCorto: "Un tramo directo Santiago (SCL) → Lima (LIM)",
          checks: [
            "Boleto aéreo directo un tramo Santiago → Lima",
            "Impuestos aeroportuarios incluidos",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Solo Ida de Santiago a Lima (Desde $149 USD).",
        },
      ],
      pilares: [
        { titulo: "3h 45m Directo", sub: "Múltiples frecuencias todos los días" },
        { titulo: "Solo con DNI", sub: "Sin necesidad de pasaporte" },
        { titulo: "Compra en Perú", sub: "Paga desde Lima para tu familiar" },
        { titulo: "RUC 20614914239", sub: "Agencia formal en Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Frecuencias Diarias SCL → LIM",
        titulo: "¿Necesitas viajar de Santiago de Chile a Lima?",
        descripcion:
          "Escríbenos por WhatsApp y recibe las mejores tarifas del día.",
        ctaTexto: "Consultar tarifa Santiago – Lima por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Santiago a Lima. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos de Santiago a Lima",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Santiago → Lima",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Santiago a Lima. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-san-andres",
    origen: "Lima",
    destino: "San Andrés",
    codigoOrigen: "LIM",
    codigoDestino: "ADZ",
    metaTitle:
      "Vuelos y Paquetes de Lima a San Andrés Islas Desde $429 USD | Cityland Travel",
    metaDescription:
      "Viaja al Mar de los 7 Colores con vuelos de Lima a San Andrés (LIM - ADZ) Desde $429 USD y paquetes Todo Incluido Desde $749 USD. Viaja solo con DNI sin visa.",
    keywords: [
      "vuelos de lima a san andres",
      "paquetes a san andres desde lima",
      "viajar a san andres desde peru precio",
      "san andres todo incluido desde lima",
      "cityland travel san andres",
    ],
    precioDesdeUSD: 429,
    faqs: [
      {
        q: "¿Se puede viajar de Lima a San Andrés solo con DNI?",
        a: "Sí, si vuelas con escala dentro de Colombia (vía Bogotá, Cali o Medellín con Avianca o LATAM), los peruanos ingresan a San Andrés únicamente con DNI vigente y sin pasaporte. Recuerda considerar la tarjeta de turismo de ingreso a la isla.",
      },
      {
        q: "¿Qué incluye el paquete a San Andrés Desde $749 USD?",
        a: "Incluye vuelos Lima – San Andrés ida y vuelta, 4 días / 3 noches de alojamiento con alimentación Todo Incluido, traslados, tour a Johnny Cay y Acuario, y asistencia al viajero. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → ADZ · El Mar de los 7 Colores · Solo con DNI",
      banderasHero: ["Perú", "Colombia"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "San Andrés Islas",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos al Caribe Colombiano.",
      negritaHero:
        "Separa tu paquete Todo Incluido a San Andrés con el 50% de inicial y viaja solo con tu DNI.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a San Andrés Islas. ¿Me pueden ayudar?",
      checksHero: [
        "Viaja solo con DNI (vía Colombia)",
        "Hoteles Todo Incluido frente al mar",
        "Tour a Johnny Cay y El Acuario",
      ],
      vitrina: {
        pais: "Colombia",
        etiquetaIzq: "Mar de 7 Colores",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85",
        alt: "Mar de los 7 Colores en San Andrés — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Gustavo Rojas Pinilla (ADZ)",
        titulo: "Vuelos y Paquetes a San Andrés Islas",
        labelPrecio: "Vuelo referencial ida y vuelta desde",
        precio: "$429",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a San Andrés Islas. ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Modalidades para viajar a San Andrés",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "paquete", label: "Paquete Todo Incluido" },
          { id: "vuelo", label: "Solo Vuelo" },
        ],
      },
      items: [
        {
          id: "lim-adz-paquete",
          titulo: "Paquete San Andrés Todo Incluido (4D/3N)",
          pais: "Colombia",
          filtro: "paquete",
          subtitulo: "Vuelos + Hotel All Inclusive + Johnny Cay & Acuario",
          precioPrincipal: "$749",
          precioSecundario: "$375",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Caribe Colombiano",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete a San Andrés Todo Incluido",
          resumenCorto: "Vuelos + 3 noches Todo Incluido + Johnny Cay",
          checks: [
            "Boletos aéreos Lima – San Andrés ida y vuelta",
            "3 noches en hotel Todo Incluido + Tour Johnny Cay y Acuario",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete a San Andrés Todo Incluido 4D/3N (Desde $749 USD).",
        },
        {
          id: "lim-adz-vuelo",
          titulo: "Solo Vuelo Lima – San Andrés (Ida y Vuelta)",
          pais: "Colombia",
          filtro: "vuelo",
          subtitulo: "Avianca / LATAM · Conexión rápida en Bogotá o Medellín",
          precioPrincipal: "$429",
          precioSecundario: "$215",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo Lima a San Andrés",
          resumenCorto: "Boleto aéreo LIM → ADZ ida y vuelta con impuestos",
          checks: [
            "Boleto aéreo Lima – San Andrés ida y vuelta",
            "Impuestos aeroportuarios incluidos",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - San Andrés (Desde $429 USD).",
        },
      ],
      pilares: [
        { titulo: "Solo con DNI", sub: "Volando vía Bogotá o Medellín" },
        { titulo: "Todo Incluido", sub: "Comidas y bebidas ilimitadas en la isla" },
        { titulo: "Separa con 50%", sub: "Congela tu paquete y paga en cuotas" },
        { titulo: "RUC 20614914239", sub: "Agencia formal con sede en Los Olivos" },
      ],
      bannerFinal: {
        sobretitulo: "Caribe Colombiano Todo el Año",
        titulo: "¿Quieres cotizar tu viaje a San Andrés Islas?",
        descripcion:
          "Escríbenos por WhatsApp y un asesor te enviará los hoteles disponibles.",
        ctaTexto: "Consultar tarifa a San Andrés por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a San Andrés Islas. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a San Andrés Islas",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → San Andrés",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a San Andrés. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-aruba",
    origen: "Lima",
    destino: "Aruba",
    codigoOrigen: "LIM",
    codigoDestino: "AUA",
    metaTitle:
      "Vuelos y Paquetes de Lima a Aruba Desde $589 USD (Sin Visa) | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Aruba (LIM - AUA) Desde $589 USD y paquetes en Eagle Beach y Palm Beach Desde $1,150 USD con impuestos incluidos. Sin visa para peruanos.",
    keywords: [
      "vuelos de lima a aruba",
      "paquetes a aruba desde lima",
      "pasajes aereos lima aruba",
      "viajar a aruba desde peru",
      "cityland travel aruba",
    ],
    precioDesdeUSD: 589,
    faqs: [
      {
        q: "¿Los peruanos necesitan visa para viajar a Aruba?",
        a: "No. Los ciudadanos peruanos no requieren visa de turismo para ingresar a Aruba por estancias de hasta 30 días. Se recomienda contar con vacuna contra la fiebre amarilla aplicada al menos 10 días antes del viaje.",
      },
      {
        q: "¿Hay vuelos directos de Lima a Aruba?",
        a: "LATAM opera vuelos directos entre Lima (LIM) y el Aeropuerto Internacional Reina Beatrix (AUA), además de conexiones rápidas vía Bogotá (Avianca) y Panamá (Copa Airlines).",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → AUA · La Isla Feliz del Caribe · Sin Visa",
      banderasHero: ["Perú", "Caribe"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Aruba (Eagle & Palm Beach)",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos al destino más exclusivo del Caribe Sur.",
      negritaHero:
        "Vuelos directos o con conexión corta y paquetes en resorts frente a Palm Beach separando con el 50%.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Aruba. ¿Me pueden ayudar?",
      checksHero: [
        "Sin visa para ciudadanos peruanos",
        "Playas Eagle Beach y Palm Beach",
        "Fuera del cinturón de huracanes todo el año",
      ],
      vitrina: {
        pais: "Aruba",
        etiquetaIzq: "Caribe Premium",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85",
        alt: "Playa Eagle Beach en Aruba — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Reina Beatrix (AUA)",
        titulo: "Vuelos y Paquetes a Aruba (5D/4N)",
        labelPrecio: "Vuelo referencial ida y vuelta desde",
        precio: "$589",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Aruba. ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para viajar de Lima a Aruba",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "paquete", label: "Paquete Resort + Vuelo" },
          { id: "vuelo", label: "Solo Vuelo" },
        ],
      },
      items: [
        {
          id: "lim-aua-paquete",
          titulo: "Paquete Aruba: Eagle Beach & Palm Beach (5D/4N)",
          pais: "Aruba",
          filtro: "paquete",
          subtitulo: "Vuelos + Hotel 4★ Frente al Mar + Traslados + Seguro",
          precioPrincipal: "$1,150",
          precioSecundario: "$575",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "La Isla Feliz",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete a Aruba desde Lima",
          resumenCorto: "Vuelos + 4 noches Palm/Eagle Beach + Traslados",
          checks: [
            "Boletos aéreos Lima – Aruba – Lima con impuestos",
            "4 noches de alojamiento en Palm Beach / Eagle Beach",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete a Aruba 5D/4N (Desde $1,150 USD).",
        },
        {
          id: "lim-aua-vuelo",
          titulo: "Solo Vuelo Lima – Aruba (Ida y Vuelta)",
          pais: "Aruba",
          filtro: "vuelo",
          subtitulo: "LATAM / Copa Airlines / Avianca · Impuestos incluidos",
          precioPrincipal: "$589",
          precioSecundario: "$295",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Aruba",
          resumenCorto: "Boleto aéreo LIM → AUA ida y vuelta con impuestos",
          checks: [
            "Boleto aéreo Lima – Aruba ida y vuelta",
            "Impuestos aeroportuarios incluidos y asesoría ED Card",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Aruba (Desde $589 USD).",
        },
      ],
      pilares: [
        { titulo: "Sin Visa Consular", sub: "Ingreso con pasaporte peruano vigente" },
        { titulo: "Sol 365 Días", sub: "Fuera del cinturón de huracanes" },
        { titulo: "Separa con 50%", sub: "Congela tu paquete en dólares" },
        { titulo: "RUC 20614914239", sub: "Respaldo de agencia formal en Lima" },
      ],
      bannerFinal: {
        sobretitulo: "La Isla Feliz del Caribe",
        titulo: "¿Listo para conocer Eagle Beach en Aruba?",
        descripcion:
          "Escríbenos por WhatsApp y recibe nuestra cotización personalizada.",
        ctaTexto: "Consultar tarifa Lima – Aruba por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Aruba. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Aruba desde Lima",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Aruba",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Aruba. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-arequipa",
    origen: "Lima",
    destino: "Arequipa",
    codigoOrigen: "LIM",
    codigoDestino: "AQP",
    metaTitle:
      "Vuelos y Paquetes de Lima a Arequipa & Colca Desde $109 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Arequipa (LIM - AQP) Desde $109 USD ida y vuelta y paquetes Ciudad Blanca + Cañón del Colca Desde $329 USD con impuestos incluidos.",
    keywords: [
      "vuelos de lima a arequipa",
      "paquetes a arequipa desde lima",
      "pasajes aereos lima arequipa",
      "tour arequipa canon del colca",
      "cityland travel arequipa",
    ],
    precioDesdeUSD: 109,
    faqs: [
      {
        q: "¿Cuánto dura el vuelo de Lima a Arequipa?",
        a: "El vuelo directo desde el Aeropuerto Jorge Chávez (LIM) hasta el Aeropuerto Alfredo Rodríguez Ballón de Arequipa (AQP) dura 1 hora y 30 minutos.",
      },
      {
        q: "¿Qué incluye el paquete a Arequipa y Colca Desde $329 USD?",
        a: "Incluye vuelos Lima – Arequipa ida y vuelta, 3 noches de hotel con desayunos, traslados, City Tour con Monasterio de Santa Catalina y excursión al Cañón del Colca. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta Nacional LIM → AQP · Ciudad Blanca y Cañón del Colca",
      banderasHero: ["Perú"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Arequipa & Valle del Colca",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia la Ciudad Blanca.",
      negritaHero:
        "Reserva solo tu boleto aéreo o el paquete completo con hotel y Cañón del Colca separando con el 50%.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Arequipa. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos diarios de 1h 30m",
        "Paquetes con Monasterio de Santa Catalina y Colca",
        "Separa tu paquete con el 50% de inicial",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Sur del Perú",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1787929759288-1b4aa7af30f6?auto=format&fit=crop&w=1000&q=85",
        alt: "Plaza de Armas de Arequipa y Volcán Misti — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Rodríguez Ballón (AQP)",
        titulo: "Vuelos y Paquetes a Arequipa",
        labelPrecio: "Vuelo referencial ida y vuelta desde",
        precio: "$109",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Arequipa. ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Modalidades para viajar de Lima a Arequipa",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "paquete", label: "Paquete Arequipa + Colca" },
          { id: "vuelo", label: "Solo Vuelo" },
        ],
      },
      items: [
        {
          id: "lim-aqp-paquete",
          titulo: "Paquete Arequipa Colonial & Cañón del Colca (4D/3N)",
          pais: "Perú",
          filtro: "paquete",
          subtitulo: "Vuelos + Hotel 3★/4★ + Santa Catalina + Cruz del Cóndor",
          precioPrincipal: "$329",
          precioSecundario: "$165",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Todo Organizado",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1787929759288-1b4aa7af30f6?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete a Arequipa y Cañón del Colca",
          resumenCorto: "Vuelos + 3 noches de hotel + City Tour + Valle del Colca",
          checks: [
            "Boletos aéreos Lima – Arequipa – Lima con impuestos",
            "3 noches de alojamiento con desayunos + excursión al Colca",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete Arequipa y Colca 4D/3N (Desde $329 USD).",
        },
        {
          id: "lim-aqp-vuelo",
          titulo: "Solo Vuelo Lima – Arequipa (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "LATAM / SKY / JetSMART · Impuestos incluidos",
          precioPrincipal: "$109",
          precioSecundario: "$55",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Arequipa",
          resumenCorto: "Boleto aéreo directo LIM → AQP → LIM con tasas",
          checks: [
            "Boleto aéreo directo Lima – Arequipa – Lima",
            "Tasas aeroportuarias TUUA incluidas",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Arequipa ida y vuelta (Desde $109 USD).",
        },
      ],
      pilares: [
        { titulo: "1h 30m Directo", sub: "Salidas diarias desde el Jorge Chávez" },
        { titulo: "Cañón del Colca", sub: "Tours con movilidad y guía oficial" },
        { titulo: "Separa con 50%", sub: "Congela tu paquete nacional hoy" },
        { titulo: "RUC 20614914239", sub: "Agencia formal con sede en Los Olivos" },
      ],
      bannerFinal: {
        sobretitulo: "Turismo Nacional Todo el Año",
        titulo: "¿Planeas una escapada a Arequipa y el Colca?",
        descripcion:
          "Escríbenos por WhatsApp y te armamos la cotización exacta para tus fechas.",
        ctaTexto: "Consultar tarifa Lima – Arequipa por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Arequipa. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1787929759288-1b4aa7af30f6?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Arequipa",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Arequipa",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Arequipa. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-piura",
    origen: "Lima",
    destino: "Piura y Máncora",
    codigoOrigen: "LIM",
    codigoDestino: "PIU",
    metaTitle:
      "Vuelos y Paquetes de Lima a Piura, Máncora & Vichayito Desde $119 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Piura o Talara (LIM - PIU/TYL) Desde $119 USD ida y vuelta y paquetes de playa en Máncora, Vichayito y Punta Sal Desde $369 USD.",
    keywords: [
      "vuelos de lima a piura",
      "paquetes a mancora desde lima",
      "viajes a vichayito y punta sal",
      "pasajes aereos lima piura",
      "cityland travel mancora",
    ],
    precioDesdeUSD: 119,
    faqs: [
      {
        q: "¿Es mejor volar a Piura o a Talara para ir a Máncora y Vichayito?",
        a: "El aeropuerto de Talara (TYL) está a solo 1 hora de Máncora y Vichayito, mientras que el aeropuerto de Piura (PIU) tiene mayor cantidad de frecuencias diarias y está a 2 horas y media por carretera asfaltada.",
      },
      {
        q: "¿Qué incluye el paquete a Máncora / Vichayito Desde $369 USD?",
        a: "Incluye vuelos Lima – Piura o Talara ida y vuelta, 4 días / 3 noches en hotel frente al mar con desayunos, traslados desde el aeropuerto y nado con tortugas en El Ñuro. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta Playas del Norte LIM → PIU/TYL · Sol Todo el Año",
      banderasHero: ["Perú"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Piura, Máncora & Vichayito",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos incluidos hacia las mejores playas del norte peruano.",
      negritaHero:
        "Escápate al sol del norte con vuelos confirmados y hoteles frente al mar separando con el 50%.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Piura / Máncora. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos de 1h 40m a Piura o Talara",
        "Hoteles frente al mar en Vichayito, Máncora y Punta Sal",
        "Tour de nado con tortugas en El Ñuro",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "Playas del Norte",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
        alt: "Playas de Máncora y Vichayito — Vuelos desde Lima",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Piura (PIU) / Talara (TYL)",
        titulo: "Vuelos y Paquetes a Máncora & Vichayito",
        labelPrecio: "Vuelo referencial ida y vuelta desde",
        precio: "$119",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Piura y Máncora. ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas en Dólares (Impuestos Incluidos)",
        titulo: "Opciones para viajar a Piura y Playas del Norte",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "paquete", label: "Paquete Playa + Vuelo" },
          { id: "vuelo", label: "Solo Vuelo" },
        ],
      },
      items: [
        {
          id: "lim-piu-paquete",
          titulo: "Paquete Máncora & Vichayito Frente al Mar (4D/3N)",
          pais: "Perú",
          filtro: "paquete",
          subtitulo: "Vuelos + Hotel con Piscina Frente al Mar + Tortugas en El Ñuro",
          precioPrincipal: "$369",
          precioSecundario: "$185",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Playas del Norte",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
          alt: "Paquete a Máncora y Vichayito desde Lima",
          resumenCorto: "Vuelos + 3 noches frente al mar + Traslados + El Ñuro",
          checks: [
            "Boletos aéreos Lima – Piura o Talara ida y vuelta",
            "3 noches de hotel frente al mar con desayunos y tour El Ñuro",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete a Máncora y Vichayito 4D/3N (Desde $369 USD).",
        },
        {
          id: "lim-piu-vuelo",
          titulo: "Solo Vuelo Lima – Piura (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "LATAM / SKY / JetSMART · Impuestos incluidos",
          precioPrincipal: "$119",
          precioSecundario: "$60",
          notaPrecio: "Ida y vuelta · Incluye impuestos (Verif. Oct 2026)",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80",
          alt: "Vuelo de Lima a Piura",
          resumenCorto: "Boleto aéreo directo LIM → PIU → LIM con impuestos",
          checks: [
            "Boleto aéreo directo Lima – Piura – Lima",
            "Tasas e impuestos aeroportuarios incluidos",
            "Tarifa sujeta a disponibilidad y condiciones aplicables",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Vuelo Lima - Piura ida y vuelta (Desde $119 USD).",
        },
      ],
      pilares: [
        { titulo: "Sol Todo el Año", sub: "Vichayito, Las Pocitas, Máncora y Punta Sal" },
        { titulo: "Traslados Incluidos", sub: "Recojo en aeropuerto de Piura o Talara" },
        { titulo: "Separa con 50%", sub: "Reserva tu hotel de playa con inicial" },
        { titulo: "RUC 20614914239", sub: "Agencia formal con sede en Los Olivos" },
      ],
      bannerFinal: {
        sobretitulo: "Escapadas a las Playas del Norte",
        titulo: "¿Buscas sol y playa en el norte peruano?",
        descripcion:
          "Escríbenos por WhatsApp y recibe opciones de hoteles en Vichayito, Máncora y Punta Sal.",
        ctaTexto: "Consultar tarifa a Piura / Máncora por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Piura y Máncora. ¿Me pueden ayudar?",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes a Piura y Máncora",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Máncora",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Piura y Máncora. ¿Me pueden ayudar?",
      },
    },
  },
];
