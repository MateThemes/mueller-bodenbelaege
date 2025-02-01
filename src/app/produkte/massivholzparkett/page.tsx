import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massivholzparkett | Müller Bodenbeläge",
  description: "Zeitlose Eleganz und natürliche Schönheit für Ihr Zuhause",
};

export default function MassivholzparkettPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Massivholzparkett</h1>
      <p className="text-lg mb-6">
        Zeitlose Eleganz und natürliche Schönheit für Ihr Zuhause
      </p>
      <div className="prose max-w-none">
        <p>
          Massivholzparkett ist der Inbegriff von Natürlichkeit und Langlebigkeit. 
          Jede Diele wird aus einem Stück Holz gefertigt und bringt so die einzigartige 
          Maserung und Charakteristik des Materials voll zur Geltung.
        </p>
      </div>
    </div>
  );
}
