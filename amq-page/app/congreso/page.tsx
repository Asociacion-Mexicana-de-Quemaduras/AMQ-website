import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";

const gradientBar = "linear-gradient(90deg, #f97316 0%, #ea580c 30%, #9333ea 70%, #3b82f6 100%)";

export default function Congreso() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero split: text left / poster right */}
      <section className="flex flex-col md:flex-row min-h-[500px]">
        <div className="w-full md:w-2/5 flex flex-col justify-center px-12 py-16">
          <h1 className="text-5xl font-black text-[#1b2a4a] leading-none mb-8">
            CONGRESO<br />2026
          </h1>
          <div className="flex flex-col gap-3 w-fit">
            <a
              href="mailto:amqsocios@gmail.com"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded text-center transition-colors"
            >
              ¡Clic para mas información!
            </a>
            <Link
              href="/congreso/inscribete"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded text-center transition-colors"
            >
              ¡Regístrate!
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-3/5 min-h-[400px]">
          <Image
            src="/congreso-panel.png"
            alt="44° Congreso Internacional AMQ 2026"
            fill
            className="object-contain md:object-cover object-top"
          />
        </div>
      </section>

      {/* COSTOS header bar */}
      <div className="py-4 text-center" style={{ background: gradientBar }}>
        <h2 className="text-3xl font-black text-white tracking-widest">COSTOS</h2>
      </div>

      {/* Three cost images */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        <div className="relative min-h-[400px]">
          <Image src="/congreso-costos-1.png" alt="Datos de transferencia" fill className="object-cover" />
        </div>
        <div className="relative min-h-[400px]">
          <Image src="/congreso-costos-2.png" alt="Costo de inscripción" fill className="object-cover" />
        </div>
        <div className="relative min-h-[400px]">
          <Image src="/congreso-costos-3.png" alt="Congreso highlights" fill className="object-cover" />
        </div>
      </section>

      {/* Conoce nuestro programa */}
      <section
        className="grid md:grid-cols-2 items-center min-h-[200px]"
        style={{ background: gradientBar }}
      >
        <div className="px-12 py-10">
          <h2 className="text-3xl font-black text-white leading-tight">
            Conoce<br />nuestro programa
          </h2>
        </div>
        <div className="px-12 py-10 text-white">
          <p className="mb-4">
            Ponentes internacionales, conferencias magistrales, talleres especializados y espacios
            de networking diseñados para llevar tu experiencia al siguiente nivel.
          </p>
          <p className="mb-4">Haz clic y accede al programa completo.</p>
          <a
            href="https://www.asociacionmexicanadequemaduras.org/_files/ugd/d13e75_066a2f552b9844e3a897533c70b20cf4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold hover:opacity-80 block"
          >
            DESCARGA AQUÍ
          </a>
          <p className="text-xs mt-2 opacity-80">*Este programa está sujeto a cambios</p>
        </div>
      </section>

      {/* HOSPEDAJE header bar */}
      <div className="py-4 text-center" style={{ background: gradientBar }}>
        <h2 className="text-3xl font-black text-white tracking-widest">HOSPEDAJE</h2>
      </div>

      {/* Hospedaje images */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="relative min-h-[220px]">
            <Image
              src={`/congreso-hospedaje-${n}.png`}
              alt={`Hospedaje opción ${n}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </section>

      <div className="py-8 px-8 text-center text-gray-700">
        <p className="text-lg">
          Para más información sobre hospedaje y tarifas especiales, contáctanos a{" "}
          <a href="mailto:amqsocios@gmail.com" className="text-blue-600 hover:underline font-semibold">
            amqsocios@gmail.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
}
