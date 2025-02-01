import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teppichboden | Müller Bodenbeläge",
  description: "Behaglichkeit und Komfort für Ihre Räume",
};

export default function TeppichbodenPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Teppichboden</h1>
      <p className="text-lg mb-6">
        Behaglichkeit und Komfort für Ihre Räume
      </p>
      <div className="prose max-w-none">
        <p>
          Teppichböden schaffen eine behagliche Atmosphäre und sorgen für angenehme Raumakustik. 
          Sie sind in unzähligen Farben und Qualitäten erhältlich.
        </p>
      </div>
    </div>
  );
}
