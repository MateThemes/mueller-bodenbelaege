import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fertigparkett | Müller Bodenbeläge",
  description: "Die praktische Alternative für schnelle Installation",
};

export default function FertigparkettPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Fertigparkett</h1>
      <p className="text-lg mb-6">
        Die praktische Alternative für schnelle Installation
      </p>
      <div className="prose max-w-none">
        <p>
          Fertigparkett verbindet die Schönheit von echtem Holz mit moderner Verarbeitungstechnik. 
          Die mehrschichtige Konstruktion gewährleistet eine hohe Formstabilität.
        </p>
      </div>
    </div>
  );
}
