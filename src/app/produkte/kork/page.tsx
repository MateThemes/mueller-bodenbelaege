import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kork | Müller Bodenbeläge",
  description: "Natürlich warm und schalldämmend",
};

export default function KorkPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Kork</h1>
      <p className="text-lg mb-6">
        Natürlich warm und schalldämmend
      </p>
      <div className="prose max-w-none">
        <p>
          Korkböden sind angenehm warm und weich. Sie dämpfen Trittschall und schonen die Gelenke. 
          Ein natürlicher Bodenbelag mit hohem Wohlfühlfaktor.
        </p>
      </div>
    </div>
  );
}
