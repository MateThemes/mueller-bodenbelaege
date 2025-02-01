import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designvinyl | Müller Bodenbeläge",
  description: "Moderne Optik mit praktischen Vorteilen",
};

export default function DesignvinylPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Designvinyl</h1>
      <p className="text-lg mb-6">
        Moderne Optik mit praktischen Vorteilen
      </p>
      <div className="prose max-w-none">
        <p>
          Designvinyl vereint die Optik hochwertiger Naturmaterialien mit den praktischen Vorteilen 
          eines modernen Bodenbelags. Robust, pflegeleicht und in vielen Designs erhältlich.
        </p>
      </div>
    </div>
  );
}
