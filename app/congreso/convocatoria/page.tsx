import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Convocatoria() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Split layout: text left / photo right */}
      <section className="flex flex-col md:flex-row min-h-[420px]">
        {/* Left */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-12 py-16 gap-6">
          <span
            className="inline-block text-white font-black text-2xl px-8 py-3 rounded self-start"
            style={{ background: "linear-gradient(90deg, #f97316, #9333ea)" }}
          >
            ¡Participa!
          </span>
          <p className="text-gray-700 text-lg max-w-sm">
            Descarga nuestras bases y presenta tu trabajo en el 44 Congreso Internacional
            de la Asociación Mexicana de Quemaduras
          </p>
          <a
            href="https://www.asociacionmexicanadequemaduras.org/_files/ugd/d13e75_1de2363e96fc4ef08421afd91175747d.pptx?dn=FORMATO%20INSCRIPCION%20DE%20TRABAJOS%20CIENTIFICOS%20AMQ%202026.pptx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded self-start transition-colors tracking-widest"
          >
            CLICK AQUÍ
          </a>
        </div>

        {/* Right: photo */}
        <div className="relative w-full md:w-1/2 min-h-[320px]">
          <Image
            src="/participa-panel.png"
            alt="Participa en el congreso"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Dark navy strip */}
      <div style={{ backgroundColor: "#1b2a4a", height: "60px" }} />

      <Footer />
    </div>
  );
}
