import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PVC | Müller Bodenbeläge",
  description: "Vielseitig einsetzbar und kostengünstig",
};

export default function PvcPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">PVC</h1>
      <p className="text-lg mb-6">
        Vielseitig einsetzbar und kostengünstig
      </p>
      <div className="prose max-w-none">
        <p>
          PVC-Böden sind äußerst robust und pflegeleicht. Sie bieten ein ausgezeichnetes 
          Preis-Leistungs-Verhältnis und sind in vielen Designs erhältlich.
        </p>
      </div>
    </div>
  );
}
