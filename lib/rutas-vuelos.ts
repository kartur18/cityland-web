import type { ConfiguracionLandingAerolinea } from "@/components/AirlineLandingTemplate";
import { RUTAS_VUELOS_LOTE_2 } from "@/lib/rutas-vuelos-lote2";
import { RUTAS_VUELOS_LOTE_3 } from "@/lib/rutas-vuelos-lote3";
import { RUTAS_VUELOS_LOTE_4 } from "@/lib/rutas-vuelos-lote4";
import { RUTAS_VUELOS_MASIVAS } from "@/lib/catalogo-vuelos-masivo";
import { obtenerGaleriaPorTexto } from "@/lib/imagenes-destinos";

export interface RutaVueloSEO {
  slug: string;
  origen: string;
  destino: string;
  codigoOrigen: string;
  codigoDestino: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  precioDesdeUSD: number;
  faqs: { q: string; a: string }[];
  config: ConfiguracionLandingAerolinea;
}

const RUTAS_VUELOS_BASE: RutaVueloSEO[] = [
  {
    slug: "lima-madrid",
    origen: "Lima",
    destino: "Madrid",
    codigoOrigen: "LIM",
    codigoDestino: "MAD",
    metaTitle:
      "Vuelos de Lima a Madrid Desde $1,290 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Madrid (LIM - MAD) Desde $1,290 USD con impuestos incluidos. Salidas en Iberia, Air Europa, Plus Ultra y LATAM con 23 kg y Seguro Schengen.",
    keywords: [
      "vuelos de lima a madrid",
      "pasajes aereos lima madrid",
      "vuelos economicos lima a madrid",
      "boleto aereo lima madrid ida y vuelta",
      "viajar de lima a madrid requisitos",
      "cityland travel lima madrid",
    ],
    precioDesdeUSD: 1290,
    faqs: [
      {
        q: "¿Qué aerolíneas tienen vuelos directos de Lima a Madrid?",
        a: "Operan vuelos directos sin escalas entre Lima (LIM) y Madrid (MAD) Iberia, Air Europa, Plus Ultra Líneas Aéreas y LATAM Airlines, con una duración aproximada de 11 horas y 50 minutos.",
      },
      {
        q: "¿El precio Desde $1,290 USD incluye impuestos?",
        a: "Sí. Todas nuestras tarifas referenciales incluyen impuestos aeroportuarios y cargos obligatorios. Tarifa sujeta a disponibilidad y condiciones aplicables.",
      },
    ],
    config: {
      badgeHero: "Ruta Directa LIM → MAD · Iberia, Air Europa, Plus Ultra y LATAM",
      banderasHero: ["Perú", "España"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Madrid (Barajas)",
      descripcionHero:
        "Tarifas referenciales verificadas con impuestos y cargos obligatorios incluidos.",
      negritaHero:
        "Emitimos boletos de ida y vuelta, solo ida (residentes/visado) o paquete con Seguro Schengen 30.000€ y carpeta migratoria.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Madrid. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos de 11h 50m",
        "Equipaje de mano 10 kg + bodega 23 kg",
        "Carpeta migratoria para Barajas",
      ],
      vitrina: {
        pais: "España",
        etiquetaIzq: "Ruta #1 a Europa",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=85",
        alt: "Gran Vía de Madrid — Vuelos de Lima a Madrid",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Madrid-Barajas (MAD)",
        titulo: "Vuelos Directos y con Escala Lima – Madrid",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$1,290",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Madrid (Desde $1,290 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Opciones de Tarifa Verificadas (Impuestos Incluidos)",
        titulo: "Modalidades para viajar de Lima a Madrid",
        filtros: [
          { id: "todos", label: "Todas las modalidades" },
          { id: "paquete", label: "Paquete Migratorio / Turístico" },
          { id: "vuelo", label: "Solo Boleto Aéreo" },
        ],
      },
      items: [
        {
          id: "lim-mad-paquete",
          titulo: "Paquete turístico Lima–Madrid: vuelo, hotel y seguro",
          pais: "España",
          filtro: "paquete",
          subtitulo: "Para turismo o visita familiar · Vuelo, hotel y seguro",
          precioPrincipal: "$1,290",
          precioSecundario: "$645",
          notaPrecio: "Paquete turístico · Incluye impuestos (Verif. Oct 2026)",
          tag: "Más Solicitado",
          tagBg: "bg-red-600",
          img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=85",
          alt: "Paquete de Lima a Madrid",
          resumenCorto: "Vuelo confirmado + Seguro Schengen 30.000€ + Reserva Hotel",
          checks: [
            "Boleto aéreo desde Lima con equipaje de mano + bodega 23 kg",
            "Seguro médico internacional Schengen de 30.000€",
            "Reserva de hotel y asesoría antes de viajar",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para el Paquete de Lima a Madrid (Desde $1,290 USD). ¿Me pueden ayudar?",
        },
        {
          id: "lim-mad-idavuelta",
          titulo: "Boleto Lima – Madrid – Lima (Ida y Vuelta · 2 Maletas)",
          pais: "España",
          filtro: "vuelo",
          subtitulo: "Tarifa especial para vacaciones o visita familiar con equipaje",
          precioPrincipal: "$1,390",
          precioSecundario: "$695",
          notaPrecio: "Boleto Ida y Vuelta · Incluye impuestos",
          tag: "Ida y Vuelta",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=900&q=85",
          alt: "Boleto Ida y Vuelta Lima a Madrid",
          resumenCorto: "Iberia · Air Europa · Plus Ultra · LATAM",
          checks: [
            "Boleto aéreo ida y vuelta Lima (LIM) – Madrid (MAD) – Lima (LIM)",
            "Impuestos aeroportuarios TUUA y tasas internacionales incluidas",
            "Selección de asiento y check-in asistido 24h antes del vuelo",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio de boleto Ida y Vuelta de Lima a Madrid (Desde $1,390 USD). ¿Me pueden ayudar?",
        },
        {
          id: "lim-mad-soloida",
          titulo: "Boleto Solo Ida Lima a Madrid (Residentes / Visado)",
          pais: "España",
          filtro: "vuelo",
          subtitulo: "Exclusivo con DNI español, TIE vigente o Visa de Estudios/Trabajo",
          precioPrincipal: "$890",
          precioSecundario: "$445",
          notaPrecio: "Boleto Solo Ida · Incluye impuestos",
          tag: "Residentes / Visa",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1512753360435-329c4535a9a7?auto=format&fit=crop&w=900&q=85",
          alt: "Boleto Solo Ida Lima a Madrid",
          resumenCorto: "Vuelo directo o 1 escala corta con equipaje",
          checks: [
            "Boleto aéreo Solo Ida Lima (LIM) → Madrid (MAD) con impuestos",
            "Equipaje de mano 10 kg + opción de 1 o 2 maletas de 23 kg",
            "Exclusivo para pasajeros con residencia europea o visado",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Tengo residencia/visado y quiero consultar precio de boleto Solo Ida de Lima a Madrid (Desde $890 USD). ¿Me pueden ayudar?",
        },
      ],
      pilares: [
        {
          titulo: "Vuelos Directos 11h 50m",
          sub: "Salidas diarias en Iberia, Air Europa, Plus Ultra y LATAM",
        },
        {
          titulo: "Impuestos Incluidos",
          sub: "Sin cargos ocultos al momento de emitir tu código PNR",
        },
        {
          titulo: "Seguro Schengen 30.000€",
          sub: "Cobertura de 30.000 € para viajar a Europa",
        },
        {
          titulo: "Sede Física en Lima",
          sub: "Av. Antúnez de Mayolo N. 814, Los Olivos (RUC 20614914239)",
        },
      ],
      bannerFinal: {
        sobretitulo: "Atención en Oficina Los Olivos y WhatsApp",
        titulo: "¿Buscas la fecha más económica para volar de Lima a Madrid?",
        descripcion:
          "Nuestros asesores comparan en vivo las tarifas de las 4 aerolíneas que vuelan a Madrid-Barajas para darte el mejor precio con maleta incluida.",
        ctaTexto: "Consultar disponibilidad por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero cotizar las fechas más económicas para viajar de Lima a Madrid.",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos de Lima a Madrid con Cityland Travel",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Madrid",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Madrid. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "madrid-lima",
    origen: "Madrid",
    destino: "Lima",
    codigoOrigen: "MAD",
    codigoDestino: "LIM",
    metaTitle:
      "Vuelos de Madrid a Lima Desde $1,190 USD | Cityland Travel",
    metaDescription:
      "Pasajes aéreos de Madrid a Lima (MAD - LIM) Desde $1,190 USD con impuestos incluidos. Ideal para peruanos en España o para traer familiares desde Lima.",
    keywords: [
      "vuelos de madrid a lima",
      "pasajes madrid lima ida y vuelta",
      "vuelos baratos madrid a lima",
      "comprar pasaje en peru desde espana",
      "vuelos directos madrid lima iberia air europa",
    ],
    precioDesdeUSD: 1190,
    faqs: [
      {
        q: "Vivo en Madrid, ¿puedo comprar con ustedes el pasaje para traer a mis familiares desde Lima?",
        a: "Sí. Tú coordinas todo por WhatsApp desde España y tus familiares pueden acercarse presencialmente a nuestra oficina en Los Olivos (Lima) para recibir su carpeta migratoria impresa, su seguro Schengen y orientación paso a paso.",
      },
    ],
    config: {
      badgeHero: "Ruta Directa MAD → LIM · Especial Peruanos en España y Familias",
      banderasHero: ["España", "Perú"],
      tituloHero: "Vuelos de Madrid a",
      tituloDestacadoHero: "Lima, Perú",
      descripcionHero:
        "¿Vives en España y vienes a visitar a tu familia en Perú, o quieres comprar desde España el pasaje para traer a tus padres o hijos desde Lima?",
      negritaHero: "Emitimos tus boletos con código PNR oficial e impuestos incluidos.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Madrid a Lima. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos Barajas → Jorge Chávez",
        "Incluye maleta de bodega de 23 kg",
        "Atención a tus familiares en nuestra oficina de Lima",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "MAD → LIM",
        etiquetaDer: "Vuelos Directos",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",
        alt: "Costa Verde de Lima — Vuelos de Madrid a Lima",
        sobretitulo: "Aeropuerto Madrid-Barajas (MAD) → Jorge Chávez (LIM)",
        titulo: "Vuelos Madrid – Lima y Reunificación Familiar",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$1,190",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Madrid a Lima (Desde $1,190 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Referenciales MAD ↔ LIM",
        titulo: "Opciones para volar de Madrid a Lima o traer a tu familia",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Vuelos Madrid → Lima" },
          { id: "familiar", label: "Traer Familiar desde Lima" },
        ],
      },
      items: [
        {
          id: "mad-lim-idavuelta",
          titulo: "Vuelo Madrid – Lima – Madrid (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "Para residentes en España que viajan de visita al Perú",
          precioPrincipal: "$1,250",
          precioSecundario: "$625",
          notaPrecio: "Boleto Ida y Vuelta · Incluye impuestos",
          tag: "Ida y Vuelta",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=900&q=85",
          alt: "Vuelos Madrid a Lima Ida y Vuelta",
          resumenCorto: "Iberia · Air Europa · Plus Ultra · LATAM",
          checks: [
            "Boleto aéreo ida y vuelta Madrid (MAD) – Lima (LIM) – Madrid (MAD)",
            "Equipaje de mano 10 kg + maleta de bodega de 23 kg",
            "Impuestos aeroportuarios incluidos y código de reserva verificable",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio de vuelo Ida y Vuelta de Madrid a Lima (Desde $1,250 USD). ¿Me pueden ayudar?",
        },
        {
          id: "mad-lim-soloida",
          titulo: "Boleto Solo Ida Madrid a Lima",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "Retorno al Perú con equipaje de bodega incluido",
          precioPrincipal: "$850",
          precioSecundario: "$425",
          notaPrecio: "Boleto Solo Ida · Incluye impuestos",
          tag: "Solo Ida",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=85",
          alt: "Vuelo Solo Ida Madrid a Lima",
          resumenCorto: "Salida desde Madrid-Barajas T4 / T1",
          checks: [
            "Boleto aéreo Solo Ida Madrid (MAD) → Lima (LIM)",
            "Maleta de mano 10 kg + 1 maleta de bodega de 23 kg",
            "Tasas aeroportuarias españolas e impuestos incluidos",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar precio de vuelo Solo Ida de Madrid a Lima (Desde $850 USD). ¿Me pueden ayudar?",
        },
        {
          id: "mad-lim-familiar",
          titulo: "Pack Reunificación: Trae a tu Familiar de Lima a Madrid",
          pais: "España",
          filtro: "familiar",
          subtitulo: "Tú gestionas desde España y nosotros atendemos a tu familiar en Lima",
          precioPrincipal: "$1,290",
          precioSecundario: "$645",
          notaPrecio: "Paquete completo desde Lima · Incluye impuestos",
          tag: "Reunificación",
          tagBg: "bg-red-600",
          img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85",
          alt: "Traer familiares de Lima a Madrid",
          resumenCorto: "Atención presencial en nuestra oficina de Los Olivos",
          checks: [
            "Boleto Lima – Madrid con asistencia presencial a tus padres en Lima",
            "Seguro Schengen 30.000€ y revisión de tu Carta de Invitación",
            "Acompañamiento paso a paso hasta su embarque en Jorge Chávez",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, vivo en España y encontré Cityland Travel en Google. Quiero información para comprar el viaje de un familiar de Lima a Madrid (Desde $1,290 USD). ¿Me pueden ayudar?",
        },
      ],
      pilares: [
        { titulo: "Vuelos Directos 12h", sub: "Conexión directa Barajas → Jorge Chávez" },
        { titulo: "Maleta 23 kg", sub: "Tarifas con equipaje de bodega incluido" },
        { titulo: "Soporte en Lima", sub: "Recibimos a tus familiares en nuestra oficina" },
        { titulo: "RUC 20614914239", sub: "Agencia formal registrada en SUNAT" },
      ],
      bannerFinal: {
        sobretitulo: "Especialistas en la ruta Madrid ↔ Lima",
        titulo: "¿Quieres cotizar tu pasaje Madrid – Lima o traer a un familiar?",
        descripcion:
          "Escríbenos por WhatsApp indicando el mes de viaje y un asesor verificará los cupos más económicos en tiempo real.",
        ctaTexto: "Consultar disponibilidad por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y tarifas en la ruta Madrid - Lima.",
        img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos Madrid a Lima Cityland Travel",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Madrid ↔ Lima",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Madrid a Lima. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-barcelona",
    origen: "Lima",
    destino: "Barcelona",
    codigoOrigen: "LIM",
    codigoDestino: "BCN",
    metaTitle:
      "Vuelos de Lima a Barcelona Desde $1,320 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos de Lima a Barcelona (LIM - BCN) Desde $1,320 USD con impuestos incluidos. Conexiones rápidas con Iberia, LATAM y Air Europa, más Seguro Schengen.",
    keywords: [
      "vuelos de lima a barcelona",
      "pasajes aereos lima barcelona",
      "vuelos baratos lima a barcelona",
      "viajar a barcelona desde peru requisitos",
    ],
    precioDesdeUSD: 1320,
    faqs: [
      {
        q: "¿El equipaje va directo desde Lima hasta Barcelona?",
        a: "Sí. Al emitir tu pasaje en un solo boleto PNR con Iberia, LATAM, Air Europa o Avianca, entregas tu maleta de 23 kg en Lima y la recoges directamente en el Aeropuerto de Barcelona-El Prat (BCN).",
      },
    ],
    config: {
      badgeHero: "Ruta LIM → BCN · Vuelos a Barcelona El Prat con 1 conexión corta",
      banderasHero: ["Perú", "España"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Barcelona (El Prat)",
      descripcionHero:
        "Vuela desde Lima hacia el Aeropuerto Josep Tarradellas Barcelona-El Prat (BCN) con equipaje facturado hasta destino final.",
      negritaHero: "Incluye Seguro Schengen de 30.000€ y carpeta migratoria verificada.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Barcelona. ¿Me pueden ayudar?",
      checksHero: [
        "Equipaje enviado directo Lima → Barcelona",
        "Seguro Schengen 30.000€ incluido en paquete",
        "Separa tu cupo con el 50% de inicial",
      ],
      vitrina: {
        pais: "España",
        etiquetaIzq: "LIM → BCN",
        etiquetaDer: "Separa con 50%",
        img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=85",
        alt: "Sagrada Familia en Barcelona — Vuelos de Lima a Barcelona",
        sobretitulo: "Conexiones rápidas vía Madrid, Bogotá o São Paulo",
        titulo: "Vuelos y Paquetes Lima – Barcelona",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$1,320",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Barcelona (Desde $1,320 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Referenciales LIM → BCN",
        titulo: "Modalidades para viajar de Lima a Barcelona",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "paquete", label: "Paquetes a Barcelona" },
          { id: "vuelo", label: "Solo Boleto Aéreo" },
        ],
      },
      items: [
        {
          id: "lim-bcn-migratorio",
          titulo: "Paquete Lima a Barcelona + Carpeta Migratoria",
          pais: "España",
          filtro: "paquete",
          subtitulo: "Vuelo hasta El Prat (BCN) + Seguro Schengen + Reserva Hotel",
          precioPrincipal: "$1,320",
          precioSecundario: "$660",
          notaPrecio: "Paquete turístico/migratorio · Incluye impuestos",
          tag: "Más Vendido BCN",
          tagBg: "bg-red-600",
          img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=900&q=85",
          alt: "Paquete Lima a Barcelona",
          resumenCorto: "Iberia · Air Europa · LATAM · Avianca",
          checks: [
            "Boleto aéreo Lima – Barcelona con equipaje conectado hasta El Prat",
            "Seguro Schengen de 30.000€ válido en toda Cataluña y Europa",
            "Reserva de alojamiento verificable y asesoría migratoria",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio del Paquete de Lima a Barcelona (Desde $1,320 USD). ¿Me pueden ayudar?",
        },
        {
          id: "lim-bcn-idavuelta",
          titulo: "Vuelo Lima – Barcelona – Lima (Ida y Vuelta · 2 Maletas)",
          pais: "España",
          filtro: "vuelo",
          subtitulo: "Ideal para vacaciones o visita familiar en Cataluña",
          precioPrincipal: "$1,390",
          precioSecundario: "$695",
          notaPrecio: "Boleto Ida y Vuelta · Incluye impuestos",
          tag: "Ida y Vuelta",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&fit=crop&w=900&q=85",
          alt: "Vuelo Ida y Vuelta Lima a Barcelona",
          resumenCorto: "Un solo boleto PNR conectado hasta BCN",
          checks: [
            "Boleto aéreo ida y vuelta Lima (LIM) – Barcelona (BCN) – Lima (LIM)",
            "Protección de conexión por la aerolínea y equipaje de bodega 23 kg",
            "Impuestos y tasas aeroportuarias incluidas en el precio",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar precio de vuelo Ida y Vuelta de Lima a Barcelona (Desde $1,390 USD). ¿Me pueden ayudar?",
        },
        {
          id: "lim-bcn-madrid-tour",
          titulo: "Tour Madrid & Barcelona (10 Días / 9 Noches)",
          pais: "España",
          filtro: "paquete",
          subtitulo: "Entrando por Madrid y saliendo por Barcelona con tren AVE",
          precioPrincipal: "$1,890",
          precioSecundario: "$945",
          notaPrecio: "Paquete turístico · Incluye impuestos",
          tag: "2 Ciudades + Tren AVE",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=900&q=85",
          alt: "Paquete Madrid y Barcelona desde Lima",
          resumenCorto: "Vuelos + Tren Alta Velocidad + Hoteles + Tours",
          checks: [
            "Vuelos desde Lima + Tren de Alta Velocidad Madrid – Barcelona",
            "9 noches de hotel con desayunos + City Tours panorámicos",
            "Traslados aeropuerto-hotel y Seguro Schengen de 30.000€",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar el paquete turístico Madrid & Barcelona (Desde $1,890 USD). ¿Me pueden ayudar?",
        },
      ],
      pilares: [
        { titulo: "Equipaje Directo", sub: "Tu maleta de 23 kg llega directo a Barcelona BCN" },
        { titulo: "Seguro 30.000€", sub: "Póliza Schengen obligatoria incluida" },
        { titulo: "Separa con 50%", sub: "Congela tu tarifa promocional en dólares" },
        { titulo: "Asesoría Experta", sub: "Te preparamos para tu escala en Barajas o El Prat" },
      ],
      bannerFinal: {
        sobretitulo: "Salidas Todas las Semanas",
        titulo: "Cotiza hoy tu vuelo de Lima a Barcelona con tarifa verificada",
        descripcion:
          "Indícanos tus fechas tentativas por WhatsApp y un asesor te enviará los horarios de vuelo más cómodos y económicos.",
        ctaTexto: "Consultar disponibilidad por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Barcelona.",
        img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos de Lima a Barcelona Cityland Travel",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Barcelona",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Barcelona. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "barcelona-lima",
    origen: "Barcelona",
    destino: "Lima",
    codigoOrigen: "BCN",
    codigoDestino: "LIM",
    metaTitle:
      "Vuelos de Barcelona a Lima Desde $1,220 USD | Cityland Travel",
    metaDescription:
      "Pasajes aéreos de Barcelona a Lima (BCN - LIM) Desde $1,220 USD con impuestos incluidos. Tarifas con equipaje de 23 kg para peruanos en Cataluña y familias.",
    keywords: [
      "vuelos de barcelona a lima",
      "pasajes barcelona lima ida y vuelta",
      "vuelos economicos barcelona a lima",
      "traer familiar de lima a barcelona",
    ],
    precioDesdeUSD: 1220,
    faqs: [
      {
        q: "¿Puedo comprar desde Barcelona el pasaje para traer a un familiar desde Lima?",
        a: "Sí. Coordinamos contigo por WhatsApp y atendemos presencialmente a tu familiar en nuestra oficina de Los Olivos (Lima) con toda su carpeta migratoria y seguro Schengen.",
      },
    ],
    config: {
      badgeHero: "Ruta BCN → LIM · Especial Peruanos en Cataluña y Familias",
      banderasHero: ["España", "Perú"],
      tituloHero: "Vuelos de Barcelona a",
      tituloDestacadoHero: "Lima, Perú",
      descripcionHero:
        "Vuela desde el Aeropuerto de Barcelona-El Prat (BCN) hacia Lima (LIM) con equipaje de bodega incluido.",
      negritaHero:
        "También gestionamos desde Barcelona el viaje completo de tus familiares que salen desde el Perú.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Barcelona a Lima. ¿Me pueden ayudar?",
      checksHero: [
        "Conexión protegida en un solo boleto PNR",
        "Incluye equipaje de bodega 23 kg",
        "Soporte en Lima para tus familiares",
      ],
      vitrina: {
        pais: "Perú",
        etiquetaIzq: "BCN → LIM",
        etiquetaDer: "Con Maleta 23 kg",
        img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",
        alt: "Lima Perú — Vuelos desde Barcelona a Lima",
        sobretitulo: "Aeropuerto Barcelona-El Prat (BCN) → Lima Jorge Chávez (LIM)",
        titulo: "Vuelos Barcelona – Lima y Emisión Familiar",
        labelPrecio: "Tarifa referencial con impuestos incluidos",
        precio: "$1,220",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Barcelona a Lima (Desde $1,220 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Verificadas BCN ↔ LIM",
        titulo: "Modalidades en la ruta Barcelona – Lima",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Vuelos BCN → LIM" },
          { id: "familiar", label: "Traer Familiar a Barcelona" },
        ],
      },
      items: [
        {
          id: "bcn-lim-idavuelta",
          titulo: "Vuelo Barcelona – Lima – Barcelona (Ida y Vuelta)",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "Para residentes en Cataluña que visitan el Perú",
          precioPrincipal: "$1,280",
          precioSecundario: "$640",
          notaPrecio: "Boleto Ida y Vuelta · Incluye impuestos",
          tag: "Ida y Vuelta",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=900&q=85",
          alt: "Vuelo Barcelona a Lima Ida y Vuelta",
          resumenCorto: "Iberia · LATAM · Air Europa · Avianca",
          checks: [
            "Boleto aéreo ida y vuelta Barcelona (BCN) – Lima (LIM) – Barcelona (BCN)",
            "Equipaje de mano 10 kg + maleta de bodega de 23 kg",
            "Impuestos aeroportuarios incluidos y código PNR verificable",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar precio de vuelo Ida y Vuelta de Barcelona a Lima (Desde $1,280 USD). ¿Me pueden ayudar?",
        },
        {
          id: "bcn-lim-soloida",
          titulo: "Boleto Solo Ida Barcelona a Lima",
          pais: "Perú",
          filtro: "vuelo",
          subtitulo: "Retorno al Perú con equipaje completo",
          precioPrincipal: "$880",
          precioSecundario: "$440",
          notaPrecio: "Boleto Solo Ida · Incluye impuestos",
          tag: "Solo Ida",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=900&q=85",
          alt: "Boleto Solo Ida Barcelona a Lima",
          resumenCorto: "Salida desde Barcelona El Prat T1",
          checks: [
            "Boleto aéreo Solo Ida Barcelona (BCN) → Lima (LIM)",
            "Equipaje de mano 10 kg + 1 maleta de bodega de 23 kg",
            "Tasas aeroportuarias e impuestos incluidos",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar precio de vuelo Solo Ida de Barcelona a Lima (Desde $880 USD). ¿Me pueden ayudar?",
        },
        {
          id: "bcn-lim-familiar",
          titulo: "Pack Familiar: Trae a tu Familiar de Lima a Barcelona",
          pais: "España",
          filtro: "familiar",
          subtitulo: "Atendemos a tu familia en nuestra oficina de Lima",
          precioPrincipal: "$1,320",
          precioSecundario: "$660",
          notaPrecio: "Paquete completo desde Lima · Incluye impuestos",
          tag: "Reunificación",
          tagBg: "bg-red-600",
          img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=900&q=85",
          alt: "Traer familiar de Lima a Barcelona",
          resumenCorto: "Incluye carpeta migratoria y Seguro Schengen",
          checks: [
            "Boleto aéreo Lima – Barcelona con asistencia presencial en Lima",
            "Seguro médico Schengen de 30.000€ y validación de Carta de Invitación",
            "Orientación personalizada para su escala y llegada a Barcelona-El Prat",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, vivo en Barcelona y encontré Cityland Travel en Google. Quiero cotizar el viaje de un familiar desde Lima a Barcelona (Desde $1,320 USD). ¿Me pueden ayudar?",
        },
      ],
      pilares: [
        { titulo: "1 Escala Rápida", sub: "Conexión protegida vía Madrid o Bogotá" },
        { titulo: "Maleta 23 kg", sub: "Facturada directo hasta el Aeropuerto Jorge Chávez" },
        { titulo: "Sede en Lima", sub: "Av. Antúnez de Mayolo N. 814, Los Olivos" },
        { titulo: "RUC 20614914239", sub: "Emisión formal con garantía en Perú" },
      ],
      bannerFinal: {
        sobretitulo: "Especialistas en rutas entre España y Perú",
        titulo: "Consulta hoy disponibilidad en la ruta Barcelona ↔ Lima",
        descripcion:
          "Cotiza sin compromiso por WhatsApp y asegura tu tarifa con equipaje incluido.",
        ctaTexto: "Consultar disponibilidad por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio en la ruta Barcelona - Lima.",
        img: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos Barcelona a Lima",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Barcelona ↔ Lima",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Barcelona a Lima. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-miami",
    origen: "Lima",
    destino: "Miami",
    codigoOrigen: "LIM",
    codigoDestino: "MIA",
    metaTitle:
      "Vuelos y Paquetes de Lima a Miami Desde $690 USD | Cityland Travel",
    metaDescription:
      "Cotiza vuelos directos de Lima a Miami (LIM - MIA) Desde $690 USD ida y vuelta con impuestos incluidos, o paquete completo con hotel Desde $1,390 USD.",
    keywords: [
      "vuelos de lima a miami",
      "pasajes aereos lima miami",
      "vuelos directos lima miami latam sky",
      "paquetes a miami desde lima",
    ],
    precioDesdeUSD: 690,
    faqs: [
      {
        q: "¿Cuánto dura el vuelo directo de Lima a Miami?",
        a: "El vuelo directo sin escalas entre Lima (LIM) y Miami (MIA) dura aproximadamente 5 horas y 40 minutos en LATAM, Sky Airline o American Airlines.",
      },
    ],
    config: {
      badgeHero: "Ruta Directa LIM → MIA · LATAM, Sky Airline, American y Copa",
      banderasHero: ["Perú", "Estados Unidos"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Miami & Orlando",
      descripcionHero:
        "Vuela directo de Lima al Aeropuerto Internacional de Miami (MIA) en solo 5h 40m.",
      negritaHero:
        "Cotiza solo boleto aéreo ida y vuelta con impuestos incluidos o paquete con hotel en Miami Beach y tour de compras.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Miami. ¿Me pueden ayudar?",
      checksHero: [
        "Vuelos directos de 5h 40m desde Lima",
        "Solo vuelo o Paquete con Hotel y Tours",
        "También tramitamos tu Visa Americana B1/B2",
      ],
      vitrina: {
        pais: "Estados Unidos",
        etiquetaIzq: "Vuelo Directo 5h 40m",
        etiquetaDer: "Impuestos Incluidos",
        img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1000&q=85",
        alt: "South Beach Miami — Vuelos de Lima a Miami",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Miami International (MIA)",
        titulo: "Vuelos Directos y Paquetes Lima – Miami",
        labelPrecio: "Vuelo Ida y Vuelta con impuestos incluidos",
        precio: "$690",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Miami (Desde $690 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Referenciales LIM → MIA",
        titulo: "Opciones para volar de Lima a Miami",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Paquetes con Hotel" },
        ],
      },
      items: [
        {
          id: "lim-mia-vuelo",
          titulo: "Boleto Aéreo Lima – Miami – Lima (Ida y Vuelta)",
          pais: "Estados Unidos",
          filtro: "vuelo",
          subtitulo: "Vuelos directos en Sky Airline, LATAM o American Airlines",
          precioPrincipal: "$690",
          precioSecundario: "$345",
          notaPrecio: "Boleto Ida y Vuelta · Incluye impuestos",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=900&q=85",
          alt: "Vuelo Lima a Miami Ida y Vuelta",
          resumenCorto: "5h 40m directo · Impuestos incluidos",
          checks: [
            "Boleto aéreo ida y vuelta Lima (LIM) – Miami (MIA) – Lima (LIM)",
            "Impuestos aeroportuarios de Perú y Estados Unidos incluidos",
            "Asesoría para agregar maleta de bodega de 23 kg al mejor costo",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio del vuelo Ida y Vuelta de Lima a Miami (Desde $690 USD). ¿Me pueden ayudar?",
        },
        {
          id: "lim-mia-paquete",
          titulo: "Paquete Miami Beach + Compras Sawgrass (5D / 4N)",
          pais: "Estados Unidos",
          filtro: "paquete",
          subtitulo: "Vuelo + Hotel + Traslados + Paseo en Barco por Biscayne Bay",
          precioPrincipal: "$1,390",
          precioSecundario: "$695",
          notaPrecio: "Paquete turístico · Incluye impuestos",
          tag: "Paquete Completo",
          tagBg: "bg-red-600",
          img: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=900&q=85",
          alt: "Paquete Turístico a Miami desde Lima",
          resumenCorto: "Ideal Vacaciones y Shopping",
          checks: [
            "Boleto aéreo ida y vuelta Lima – Miami – Lima con impuestos",
            "4 noches de alojamiento en Miami + traslados aeropuerto-hotel",
            "City Tour Miami + Crucero por Biscayne Bay + Tour Sawgrass Mills",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar el Paquete a Miami de 5 días / 4 noches (Desde $1,390 USD). ¿Me pueden ayudar?",
        },
        {
          id: "lim-mia-orlando",
          titulo: "Combinado Miami + Parques de Orlando (7D / 6N)",
          pais: "Estados Unidos",
          filtro: "paquete",
          subtitulo: "Playas de Miami + Magia en los Parques de Orlando",
          precioPrincipal: "$1,690",
          precioSecundario: "$845",
          notaPrecio: "Paquete turístico · Incluye impuestos",
          tag: "Especial Familias",
          tagBg: "bg-amber-600",
          img: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?auto=format&fit=crop&w=900&q=85",
          alt: "Paquete Miami y Orlando desde Lima",
          resumenCorto: "Miami + Orlando a medida",
          checks: [
            "Vuelos ida y vuelta desde Lima + hoteles en Miami y Orlando",
            "Traslados interurbanos + seguro médico internacional USA",
            "Asesoría para pases a Disney World o Universal Studios",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar el paquete combinado Miami + Orlando (Desde $1,690 USD). ¿Me pueden ayudar?",
        },
      ],
      pilares: [
        { titulo: "5h 40m Directo", sub: "Vuelos sin escalas Lima → Miami todos los días" },
        { titulo: "Impuestos Incluidos", sub: "Tarifas transparentes expresadas en US$" },
        { titulo: "Separa con 50%", sub: "Reserva tu paquete hoy y paga en cuotas" },
        { titulo: "Trámite Visa USA", sub: "Área propia consular para solicitar o renovar tu B1/B2" },
      ],
      bannerFinal: {
        sobretitulo: "Salidas Diarias desde Lima",
        titulo: "Cotiza tu vuelo o paquete a Miami por WhatsApp",
        descripcion:
          "Indícanos tus fechas de viaje y cantidad de pasajeros para enviarte las opciones vigentes hoy.",
        ctaTexto: "Consultar disponibilidad por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Miami.",
        img: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1000&q=80",
        alt: "Vuelos Lima a Miami",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Miami",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Miami. ¿Me pueden ayudar?",
      },
    },
  },
  {
    slug: "lima-buenos-aires",
    origen: "Lima",
    destino: "Buenos Aires",
    codigoOrigen: "LIM",
    codigoDestino: "EZE",
    metaTitle:
      "Vuelos y Paquetes de Lima a Buenos Aires Desde $529 USD | Cityland Travel",
    metaDescription:
      "Viaja de Lima a Buenos Aires, Argentina Desde $529 USD ida y vuelta con impuestos incluidos. Vuelos directos en LATAM, Sky, Aerolíneas Argentinas y JetSMART.",
    keywords: [
      "vuelos de lima a buenos aires",
      "pasajes a buenos aires desde lima",
      "paquetes a buenos aires desde lima",
      "viajar a argentina desde peru con dni",
    ],
    precioDesdeUSD: 529,
    faqs: [
      {
        q: "¿Puedo viajar de Lima a Buenos Aires solo con DNI?",
        a: "Sí. Los ciudadanos peruanos pueden ingresar a Argentina por turismo presentando únicamente su DNI peruano físico vigente, sin necesidad de pasaporte ni visa.",
      },
    ],
    config: {
      badgeHero: "Ruta Directa LIM → EZE / AEP · ¡Viaja Solo con tu DNI Peruano!",
      banderasHero: ["Perú", "Argentina"],
      tituloHero: "Vuelos y Paquetes de Lima a",
      tituloDestacadoHero: "Buenos Aires",
      descripcionHero:
        "Vuela directo de Lima a Buenos Aires sin pasaporte ni visa (solo con tu DNI vigente).",
      negritaHero:
        "Cotiza boleto aéreo ida y vuelta o paquete completo con hotel con desayunos y tours clásicos.",
      ctaPrincipalTexto: "Consultar disponibilidad por WhatsApp",
      waPrincipalNumero: "51944103890",
      waPrincipalMensaje:
        "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Buenos Aires. ¿Me pueden ayudar?",
      checksHero: [
        "No requiere pasaporte ni visa (Solo DNI)",
        "Vuelos directos de 4h 30m desde Lima",
        "Opciones de solo vuelo o paquete completo",
      ],
      vitrina: {
        pais: "Argentina",
        etiquetaIzq: "Solo con DNI",
        etiquetaDer: "Vuelo Directo 4h 30m",
        img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1000&q=85",
        alt: "Obelisco de Buenos Aires — Vuelos de Lima a Buenos Aires",
        sobretitulo: "Aeropuerto Jorge Chávez (LIM) → Ezeiza (EZE) / Aeroparque (AEP)",
        titulo: "Vuelos y Paquetes Lima – Buenos Aires",
        labelPrecio: "Vuelo Ida y Vuelta con impuestos incluidos",
        precio: "$529",
        moneda: "USD",
        notaInferior: "Tarifa sujeta a disponibilidad y condiciones aplicables",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Buenos Aires (Desde $529 USD). ¿Me pueden ayudar?",
      },
      seccionCatalogo: {
        sobretitulo: "Tarifas Referenciales LIM → BUE",
        titulo: "Modalidades para viajar de Lima a Buenos Aires",
        filtros: [
          { id: "todos", label: "Todas las opciones" },
          { id: "vuelo", label: "Solo Vuelo" },
          { id: "paquete", label: "Paquetes Turísticos" },
        ],
      },
      items: [
        {
          id: "lim-bue-vuelo",
          titulo: "Boleto Aéreo Lima – Buenos Aires – Lima (Ida y Vuelta)",
          pais: "Argentina",
          filtro: "vuelo",
          subtitulo: "Vuelos directos a Ezeiza (EZE) o Aeroparque (AEP)",
          precioPrincipal: "$529",
          precioSecundario: "$265",
          notaPrecio: "Boleto Ida y Vuelta · Incluye impuestos",
          tag: "Solo Vuelo",
          tagBg: "bg-blue-700",
          img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=900&q=85",
          alt: "Vuelo Lima a Buenos Aires Ida y Vuelta",
          resumenCorto: "Impuestos aeroportuarios incluidos",
          checks: [
            "Boleto aéreo ida y vuelta Lima – Buenos Aires – Lima",
            "Tasas e impuestos internacionales incluidos en el precio",
            "Asesoría para incluir equipaje de mano 10 kg o bodega 23 kg",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio del vuelo Ida y Vuelta de Lima a Buenos Aires (Desde $529 USD). ¿Me pueden ayudar?",
        },
        {
          id: "lim-bue-paquete",
          titulo: "Paquete Buenos Aires Clásico (5 Días / 4 Noches)",
          pais: "Argentina",
          filtro: "paquete",
          subtitulo: "Vuelos + Hotel con Desayuno + City Tour + Delta del Tigre",
          precioPrincipal: "$849",
          precioSecundario: "$425",
          notaPrecio: "Paquete turístico · Incluye impuestos",
          tag: "Más Vendido",
          tagBg: "bg-red-600",
          img: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?auto=format&fit=crop&w=900&q=85",
          alt: "Paquete Turístico a Buenos Aires desde Lima",
          resumenCorto: "Caminito · Puerto Madero · Recoleta · Tigre",
          checks: [
            "Boleto aéreo ida y vuelta desde Lima con impuestos incluidos",
            "4 noches de alojamiento con desayunos + traslados aeropuerto-hotel",
            "City Tour Buenos Aires + Paseo en barco por el Delta del Tigre",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar el Paquete a Buenos Aires de 5 días / 4 noches (Desde $849 USD). ¿Me pueden ayudar?",
        },
        {
          id: "lim-bue-bariloche",
          titulo: "Combinado Buenos Aires + Bariloche (7 Días / 6 Noches)",
          pais: "Argentina",
          filtro: "paquete",
          subtitulo: "Capital del Tango + Paisajes de la Patagonia Argentina",
          precioPrincipal: "$1,290",
          precioSecundario: "$645",
          notaPrecio: "Paquete turístico · Incluye impuestos",
          tag: "Combinado",
          tagBg: "bg-emerald-700",
          img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=900&q=85",
          alt: "Paquete Buenos Aires y Bariloche desde Lima",
          resumenCorto: "Incluye vuelos internos en Argentina",
          checks: [
            "Vuelos internacionales Lima – Buenos Aires – Lima + vuelo a Bariloche",
            "3 noches en Buenos Aires + 3 noches en San Carlos de Bariloche",
            "Circuito Chico y Cerro Campanario + traslados y asistencia 24/7",
          ],
          waNumber: "51944103890",
          waMensaje:
            "Hola, encontré Cityland Travel en Google. Quiero consultar el paquete Buenos Aires + Bariloche (Desde $1,290 USD). ¿Me pueden ayudar?",
        },
      ],
      pilares: [
        { titulo: "Solo con DNI", sub: "Ingresa a Argentina sin pasaporte ni visa" },
        { titulo: "4h 30m Directo", sub: "Salidas diarias en LATAM, Sky y Aerolíneas Arg." },
        { titulo: "Separa con 50%", sub: "Reserva tu paquete hoy y paga en cuotas" },
        { titulo: "RUC 20614914239", sub: "Agencia física en Los Olivos, Lima" },
      ],
      bannerFinal: {
        sobretitulo: "Salidas Diarias desde Lima",
        titulo: "¿Listo para viajar de Lima a Buenos Aires?",
        descripcion:
          "Consulta las fechas promocionales por WhatsApp y recibe tu cotización detallada al instante.",
        ctaTexto: "Consultar disponibilidad por WhatsApp",
        waNumero: "51944103890",
        waMensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Buenos Aires.",
        img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1000&q=80",
        alt: "Viajes de Lima a Buenos Aires",
      },
      waFlotante: {
        numero: "51944103890",
        texto: "Cotizar Lima → Buenos Aires",
        mensaje:
          "Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de Lima a Buenos Aires. ¿Me pueden ayudar?",
      },
    },
  },
];

const ESCALA_COMERCIAL_RUTAS_BASE: Record<
  string,
  { desde: number; items: [number, number, number] }
> = {
  "lima-madrid": { desde: 1090, items: [1090, 1180, 690] },
  "madrid-lima": { desde: 1050, items: [1050, 680, 1090] },
  "lima-barcelona": { desde: 1120, items: [1120, 1190, 1490] },
  "barcelona-lima": { desde: 1080, items: [1080, 690, 1120] },
  "lima-miami": { desde: 499, items: [499, 990, 1190] },
  "lima-buenos-aires": { desde: 430, items: [430, 699, 1090] },
  "lima-punta-cana": { desde: 540, items: [1049, 540, 1190] },
  "lima-cancun": { desde: 520, items: [999, 520, 1149] },
  "lima-cartagena": { desde: 360, items: [599, 360, 749] },
  "lima-medellin": { desde: 350, items: [589, 350, 749] },
  "lima-cusco": { desde: 109, items: [329, 279, 109] },
  "lima-roma": { desde: 1150, items: [1150, 1390, 1240] },
  "lima-paris": { desde: 1180, items: [1180, 2390, 1450] },
  "lima-rio-de-janeiro": { desde: 649, items: [1190, 649, 1390] },
  "lima-santiago": { desde: 299, items: [299, 549, 649] },
  "lima-bogota": { desde: 340, items: [340, 589, 699] },
  "lima-panama": { desde: 470, items: [699, 470, 829] },
  "lima-valencia": { desde: 1130, items: [1130, 1210, 720] },
  "lima-malaga": { desde: 1140, items: [1140, 1450, 1220] },
  "lima-milan": { desde: 1150, items: [1150, 1240, 1390] },
  "lima-amsterdam": { desde: 1180, items: [1180, 1490, 1260] },
  "lima-estambul": { desde: 1290, items: [1590, 1290, 1990] },
  "miami-lima": { desde: 490, items: [490, 320, 890] },
  "buenos-aires-lima": { desde: 420, items: [420, 280, 699] },
  "santiago-lima": { desde: 299, items: [299, 199, 589] },
  "lima-san-andres": { desde: 450, items: [749, 450, 890] },
  "lima-aruba": { desde: 560, items: [1090, 560, 1250] },
  "lima-arequipa": { desde: 99, items: [289, 99, 399] },
  "lima-piura": { desde: 109, items: [319, 109, 429] },
  "lima-sevilla": { desde: 1140, items: [1140, 1220, 1450] },
  "lima-bilbao": { desde: 1150, items: [1150, 1230, 1490] },
  "lima-lisboa": { desde: 1150, items: [1150, 1490, 1230] },
  "lima-frankfurt": { desde: 1180, items: [1180, 1260, 1550] },
  "lima-nueva-york": { desde: 650, items: [650, 1090, 1350] },
  "lima-orlando": { desde: 520, items: [1090, 520, 1290] },
  "roma-lima": { desde: 1120, items: [1120, 740, 1150] },
  "paris-lima": { desde: 1140, items: [1140, 750, 1180] },
  "milan-lima": { desde: 1120, items: [1120, 740, 1150] },
  "lima-sao-paulo": { desde: 420, items: [420, 689, 1090] },
  "lima-tarapoto": { desde: 99, items: [289, 99, 369] },
  "lima-iquitos": { desde: 129, items: [319, 129, 429] },
  "lima-puno": { desde: 109, items: [299, 109, 419] },
};

// Las rutas con precio de referencia propio son las que vendemos de verdad: siempre visibles en Google.
export const RUTAS_VUELOS_PRINCIPALES: ReadonlySet<string> = new Set(
  Object.keys(ESCALA_COMERCIAL_RUTAS_BASE).map((slug) => `/vuelos/${slug}`)
);

function normalizarImagenesRutaBase(ruta: RutaVueloSEO): RutaVueloSEO {
  const textoClave =
    ruta.destino === "Lima"
      ? `${ruta.slug} ${ruta.origen} a Lima`
      : `${ruta.destino} ${ruta.config.vitrina.pais}`;
  const [f0, , , , f4] = obtenerGaleriaPorTexto(textoClave);
  // Las tarjetas dicen "Boleto de X a <destino>": llevan la foto del destino, no la de ciudades vecinas de la galería.
  const fotosItems = [f0, f0, f0];

  const escala = ESCALA_COMERCIAL_RUTAS_BASE[ruta.slug];
  const desdeUSD = escala ? escala.desde : ruta.precioDesdeUSD;
  const desdeFmt = `$${desdeUSD.toLocaleString("en-US")}`;

  const metaTitleBase = `Vuelos de ${ruta.origen} a ${ruta.destino} Desde ${desdeFmt} | Cityland`;
  const metaTitle =
    metaTitleBase.length > 60
      ? `Vuelos ${ruta.origen} a ${ruta.destino} ${desdeFmt} | Cityland`
      : metaTitleBase;

  const metaDescriptionBase = `Cotiza vuelos y paquetes de ${ruta.origen} (${ruta.codigoOrigen}) a ${ruta.destino} (${ruta.codigoDestino}) Desde ${desdeFmt} USD con impuestos incluidos en Cityland Travel.`;
  const metaDescription =
    metaDescriptionBase.length > 158
      ? `${metaDescriptionBase.slice(0, 155).trim()}...`
      : metaDescriptionBase;

  return {
    ...ruta,
    precioDesdeUSD: desdeUSD,
    metaTitle,
    metaDescription,
    faqs: ruta.faqs.map((f) => ({
      q: f.q.replace(/Desde \$[\d,]+/g, `Desde ${desdeFmt}`),
      a: f.a.replace(/Desde \$[\d,]+/g, `Desde ${desdeFmt}`),
    })),
    config: {
      ...ruta.config,
      vitrina: {
        ...ruta.config.vitrina,
        img: f0,
        precio: desdeFmt,
        waMensaje: `Hola, encontré Cityland Travel en Google. Quiero consultar disponibilidad y precio para viajar de ${ruta.origen} a ${ruta.destino} (Desde ${desdeFmt} USD). ¿Me pueden ayudar?`,
      },
      items: ruta.config.items.map((item, idx) => {
        const pNum = escala
          ? escala.items[idx] ?? desdeUSD
          : Number(item.precioPrincipal.replace(/[^0-9]/g, "")) || desdeUSD;
        const pPrincipalFmt = `$${pNum.toLocaleString("en-US")}`;
        const pSecundarioFmt = `$${Math.round(pNum * 0.5).toLocaleString("en-US")}`;
        return {
          ...item,
          img: fotosItems[idx % fotosItems.length],
          precioPrincipal: pPrincipalFmt,
          precioSecundario: pSecundarioFmt,
          waMensaje: item.waMensaje?.replace(/Desde \$[\d,]+/g, `Desde ${pPrincipalFmt}`),
        };
      }),
      bannerFinal: {
        ...ruta.config.bannerFinal,
        img: f4,
      },
    },
  };
}

export const RUTAS_VUELOS_SEO: RutaVueloSEO[] = [
  ...RUTAS_VUELOS_BASE.map(normalizarImagenesRutaBase),
  ...RUTAS_VUELOS_LOTE_2.map(normalizarImagenesRutaBase),
  ...RUTAS_VUELOS_LOTE_3.map(normalizarImagenesRutaBase),
  ...RUTAS_VUELOS_LOTE_4.map(normalizarImagenesRutaBase),
  ...RUTAS_VUELOS_MASIVAS,
];

export function buscarRutaVuelo(slug: string): RutaVueloSEO | undefined {
  const directo = RUTAS_VUELOS_SEO.find((r) => r.slug === slug);
  if (directo) return directo;
  const normalizado = slug.replace(/-a-/g, "-");
  return RUTAS_VUELOS_SEO.find((r) => r.slug === normalizado);
}


