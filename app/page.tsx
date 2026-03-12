import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HeroCarousel from "@/app/components/HeroCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Bienvenidos Section */}
      <section
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 20%, #9333ea 60%, #3b82f6 100%)" }}
      >
        <h2 className="text-4xl font-extrabold text-center text-white mb-10 tracking-widest">
          BIENVENIDOS
        </h2>
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base mb-4 font-semibold">
                Estimados Colegas, Socios y Participantes del 44° Congreso Anual Internacional
                de la Asociación Mexicana de Quemaduras.
              </p>
              <p className="text-base mb-4">
                Es un inmenso honor y un gran privilegio para nuestra Asociación y la ciudad de
                Hermosillo, Sonora, darles la más cordial bienvenida a este trascendental evento
                que reúne a líderes y profesionales dedicados a la atención integral del
                paciente quemado, que se llevará a cabo del 29 de abril al 2 de mayo del 2026.
              </p>
              <p className="text-base mb-4">
                En nombre de la Asociación Mexicana de Quemaduras y de todos los que hacemos
                vida en esta tierra del sol, hemos elegido Hermosillo, la orgullosa capital de
                Sonora, como el punto de encuentro y estamos emocionados de ser la sede de este tan
                importante Congreso, un espacio vital para el intercambio de conocimientos, la
                actualización científica y el fortalecimiento de lazos profesionales.
              </p>
              <p className="text-base mb-4">
                Hermosillo es una ciudad que se distingue no solo por su clima cálido, sino
                también por la bondad y calidez de su gente. Los sonorenses somos conocidos por
                nuestro espíritu hospitalario y generoso, y no se diga de la carne asada,
                garantizándoles que su estancia estará llena de atenciones y experiencias memorables.
                Sentirán el calor de nuestro estado, no solo en la temperatura, sino en cada sonrisa
                y en cada encuentro.
              </p>
              <p className="text-base mb-4">
                No dudamos que este 44° Congreso será un rotundo éxito académico y una
                oportunidad para llevarse a casa, no solo nuevos conocimientos, sino también el recuerdo
                de la calidez, la cultura y los hermosos paisajes de Sonora.
              </p>
              <p className="text-base font-semibold">¡Bienvenidos a Hermosillo!, nuestra casa es su casa.</p>
              <p className="text-base mt-4">Atentamente</p>
              <p className="text-base font-semibold">
                Dr. Marco Aurelio Lizárraga Celaya<br />
                Presidente de la Asociación Mexicana de Quemaduras A.C.
              </p>
            </div>
            <div>
              <Image
                src="/Dr-Marco-Aurelio-Lizarraga.png"
                alt="Dr. Marco Aurelio Lizárraga Celaya"
                width={662}
                height={1024}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Panels Section */}
      <section className="grid md:grid-cols-3 h-72">
        {/* Panel 1: Congreso */}
        <div className="relative overflow-hidden">
          <Image src="/carousel-1.png" alt="44° Congreso Internacional" fill className="object-cover" />
          <div className="absolute inset-0 hover:bg-black/40 flex flex-col items-center justify-end text-center p-4">
            <Link
              href="/congreso/inscribete"
              className="mt-3 bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2 rounded text-sm transition-colors"
            >
              ¡INSCRÍBETE!
            </Link>
          </div>
        </div>

        {/* Panel 2: Mesa directiva */}
        <div className="relative overflow-hidden">
          <Image src="/nosotros-panel.png" alt="Mesa directiva" fill className="object-cover" />
          <div className="absolute inset-0 hover:bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white font-bold text-2xl drop-shadow">Mesa directiva</p>
            <Link
              href="/nosotros"
              className="mt-3 text-white font-semibold px-6 py-3 text-base transition-colors"
              style={{ backgroundColor: "#1b2a4a" }}
            >
              ¡Conócenos!
            </Link>
          </div>
        </div>

        {/* Panel 3: Eventos */}
        <div className="relative overflow-hidden">
          <Image src="/socios-panel.png" alt="Eventos" fill className="object-cover" />
          <div className="absolute inset-0 hover:bg-black/20 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white font-bold text-2xl drop-shadow">Eventos</p>
            <Link
              href="/eventos"
              className="mt-3 text-white font-semibold px-6 py-3 text-base transition-colors"
              style={{ backgroundColor: "#1b2a4a" }}
            >
              Pláticas y conferencias para ustedes.
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
