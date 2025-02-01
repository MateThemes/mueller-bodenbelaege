import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vinyl | Müller Bodenbeläge",
  description: "Robust und pflegeleicht für jeden Raum",
};

export default function VinylPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Vinyl</h1>
      <p className="text-lg mb-6">
        Robust und pflegeleicht für jeden Raum
      </p>
      <div className="prose max-w-none">
        <p>
          Vinylböden überzeugen durch ihre außergewöhnliche Strapazierfähigkeit und einfache Pflege. 
          Sie sind wasserbeständig und eignen sich daher besonders gut für Küche und Bad.
        </p>
      </div>
    </div>
  );
}
