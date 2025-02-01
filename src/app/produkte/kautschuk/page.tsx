import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kautschuk | Müller Bodenbeläge",
  description: "Extrem belastbar und ideal für stark frequentierte Bereiche",
};

export default function KautschukPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Kautschuk</h1>
      <p className="text-lg mb-6">
        Extrem belastbar und ideal für stark frequentierte Bereiche
      </p>
      <div className="prose max-w-none">
        <p>
          Kautschukböden zeichnen sich durch ihre extreme Belastbarkeit aus. 
          Sie sind rutschfest, schalldämmend und eignen sich besonders für stark beanspruchte Bereiche.
        </p>
      </div>
    </div>
  );
}
