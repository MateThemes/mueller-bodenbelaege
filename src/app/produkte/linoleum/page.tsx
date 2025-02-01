import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linoleum | Müller Bodenbeläge",
  description: "Nachhaltig und langlebig aus natürlichen Materialien",
};

export default function LinoleumPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Linoleum</h1>
      <p className="text-lg mb-6">
        Nachhaltig und langlebig aus natürlichen Materialien
      </p>
      <div className="prose max-w-none">
        <p>
          Linoleum wird aus natürlichen Rohstoffen hergestellt und ist damit besonders umweltfreundlich. 
          Der Bodenbelag ist antistatisch, bakteriostatisch und sehr langlebig.
        </p>
      </div>
    </div>
  );
}
