import CaribePage, { metadata as caribeMetadata } from "../caribe/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...caribeMetadata,
  title: "Paquetes Turísticos Internacionales Todo Incluido desde Lima | Cityland Travel",
  description:
    "Paquetes turísticos completos desde Lima a Punta Cana, Cancún, Cartagena, San Andrés, Aruba, Medellín, Río de Janeiro y Europa. Separa con el 50% en Cityland Travel.",
  alternates: {
    canonical: "https://citylandtravel.com/paquetes",
  },
};

export default CaribePage;
