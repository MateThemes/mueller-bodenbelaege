import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teppichfliesen | Müller Bodenbeläge",
  description: "Flexible Gestaltungsmöglichkeiten für Büro und Wohnraum",
};

export default function TeppichfliesenPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Teppichfliesen</h1>
      <p className="text-lg mb-6">
        Flexible Gestaltungsmöglichkeiten für Büro und Wohnraum
      </p>
      <div className="prose max-w-none">
        <p>
          Teppichfliesen bieten maximale Flexibilität bei der Gestaltung von Bodenflächen. 
          Einzelne Fliesen können bei Bedarf einfach ausgetauscht werden.
        </p>
      </div>
    </div>
  );
}
