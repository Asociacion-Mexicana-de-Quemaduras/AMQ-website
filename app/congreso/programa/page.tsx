import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

const gradientBar = "linear-gradient(90deg, #f97316 0%, #ea580c 30%, #9333ea 70%, #3b82f6 100%)";

export default function Programa() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Gradient header bar */}
      <section className="py-10 px-4 text-center" style={{ background: gradientBar }}>
        <h1 className="text-4xl font-black text-white mb-3">Programa</h1>
        <a
          href="https://www.asociacionmexicanadequemaduras.org/_files/ugd/d13e75_066a2f552b9844e3a897533c70b20cf4.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline text-lg font-medium hover:opacity-80"
        >
          Descargar aquí
        </a>
        <p className="text-white/80 text-sm mt-2 italic">*Este programa puede cambiar</p>
      </section>

      {/* Program poster image */}
      <section className="flex justify-center py-12 px-4">
        <div className="w-full max-w-2xl">
          <Image
            src="/congreso-panel.png"
            alt="Programa Preliminar — 44° Congreso Internacional AMQ 2026"
            width={800}
            height={1100}
            className="w-full h-auto"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
