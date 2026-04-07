const TRAVEL_AGENCY = {"@context":"https://schema.org","@type":"TravelAgency",name:"Cityland Travel",url:"https://citylandtravelpe.com",logo:"https://citylandtravelpe.com/logo.png",description:"Agencia de viajes en Lima especializada en paquetes migratorios a Europa y turísticos al Caribe, Sudamérica y todo el mundo.",telephone:"+51941551530",address:{"@type":"PostalAddress",streetAddress:"Av. Antúnez de Mayolo N. 814",addressLocality:"Los Olivos",addressRegion:"Lima",postalCode:"15304",addressCountry:"PE"},geo:{"@type":"GeoCoordinates",latitude:-11.9556,longitude:-77.0642},openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],opens:"09:00",closes:"19:00"}],priceRange:"$$",aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"500",bestRating:"5"},sameAs:["https://www.facebook.com/citylandtravel","https://www.instagram.com/citylandtravel","https://www.tiktok.com/@citylandtravel"],foundingDate:"2015",taxID:"20614914239"};

const FAQ_SCHEMA = {"@context":"https://schema.org","@type":"FAQPage",mainEntity:[
  {"@type":"Question",name:"¿Necesito visa para viajar a Europa desde Perú?",acceptedAnswer:{"@type":"Answer",text:"No. Los ciudadanos peruanos no necesitan visa para ingresar al espacio Schengen por hasta 90 días."}},
  {"@type":"Question",name:"¿Cuál es la diferencia entre paquete migratorio y turístico?",acceptedAnswer:{"@type":"Answer",text:"Migratorio: Solo ida, con documentación transitoria para emigrar. Turístico: Ida y vuelta con hotel para vacaciones."}},
  {"@type":"Question",name:"¿Qué formas de pago acepta Cityland Travel?",acceptedAnswer:{"@type":"Answer",text:"Transferencia bancaria, Yape, Plin, efectivo, crédito mayorista y tarjeta de crédito/débito. Cuotas sin interés."}},
  {"@type":"Question",name:"¿Cuánto demoran en enviar la cotización?",acceptedAnswer:{"@type":"Answer",text:"Menos de 2 horas por WhatsApp de lunes a sábado de 9am a 7pm."}},
  {"@type":"Question",name:"¿Los precios incluyen impuestos?",acceptedAnswer:{"@type":"Answer",text:"Los precios son referenciales. Al cotizar damos el precio final con impuestos incluidos."}},
  {"@type":"Question",name:"¿Tienen seguro de viaje incluido?",acceptedAnswer:{"@type":"Answer",text:"Sí. Todos los paquetes incluyen seguro. Para Europa con cobertura Schengen."}},
  {"@type":"Question",name:"¿Dónde queda la oficina?",acceptedAnswer:{"@type":"Answer",text:"Av. Antúnez de Mayolo N. 814, Los Olivos, Lima. Lun-Sáb 9am-7pm. WhatsApp 24/7: +51 941 551 530."}},
]};

const OFFERS = {"@context":"https://schema.org","@type":"ItemList",name:"Paquetes de viaje populares",itemListElement:[
  {"@type":"ListItem",position:1,item:{"@type":"Product",name:"Paquete Migratorio Lima a Madrid",description:"Boleto ida, hotel tránsito, seguro Schengen, retorno flexible.",brand:{"@type":"Brand",name:"Cityland Travel"},offers:{"@type":"Offer",priceCurrency:"USD",price:"799",availability:"https://schema.org/InStock"},aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"320"}}},
  {"@type":"ListItem",position:2,item:{"@type":"Product",name:"Paquete Turístico Punta Cana Todo Incluido",description:"Vuelo ida y vuelta, resort all-inclusive, seguro y transfers.",brand:{"@type":"Brand",name:"Cityland Travel"},offers:{"@type":"Offer",priceCurrency:"USD",price:"799",availability:"https://schema.org/InStock"}}},
  {"@type":"ListItem",position:3,item:{"@type":"Product",name:"Paquete Migratorio Lima a Barcelona",description:"Boleto ida a Barcelona, hotel tránsito, seguro Schengen.",brand:{"@type":"Brand",name:"Cityland Travel"},offers:{"@type":"Offer",priceCurrency:"USD",price:"849",availability:"https://schema.org/InStock"}}},
]};

export default function SchemaOrg() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(TRAVEL_AGENCY) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OFFERS) }} />
    </>
  );
}
