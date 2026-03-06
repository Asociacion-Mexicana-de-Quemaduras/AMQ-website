import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <Image
          src="/carousel-1.png"
          alt="Congreso AMQ 2026"
          width={1960}
          height={976}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">44° Congreso Anual Internacional</h1>
            <p className="text-xl mb-6">Asociación Mexicana de Quemaduras</p>
            <a href="/congreso" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              ¡INSCRÍBETE!
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">BIENVENIDOS</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Estimados Colegas, Socios y Participantes del 44° Congreso Anual Internacional
                de la Asociación Mexicana de Quemaduras.
              </p>
              <p className="text-lg mb-4">
                Es un inmenso honor y un gran privilegio para nuestra Asociación y la ciudad de
                Hermosillo, Sonora, darles la más cordial bienvenida a este trascendental evento
                que reúne a líderes y profesionales dedicados a la atención integral del
                paciente quemado, que se llevará a cabo del 29 de abril al 2 de mayo del 2026.
              </p>
              <p className="text-lg mb-4">
                En nombre de la Asociación Mexicana de Quemaduras y de todos los que hacemos
                vida en esta tierra del sol, hemos elegido Hermosillo, la orgullosa capital de
                Sonora, como el punto de encuentro y estamos emocionados de ser la sede de este tan
                importante Congreso, un espacio vital para el intercambio de conocimientos, la
                actualización científica y el fortalecimiento de lazos profesionales.
              </p>
            </div>
            <div>
              <Image
                src="/Dr-Marco-Aurelio-Lizarraga.png"
                alt="Dr. Marco Aurelio Lizárraga Celaya"
                width={662}
                height={1024}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg mb-4">
              Hermosillo es una ciudad que se distingue no solo por su clima cálido, sino
              también por la bondad y calidez de su gente. Los sonorenses somos conocidos por
              nuestro espíritu hospitalario y generoso, y no se diga de la carne asada,
              garantizándoles que su estancia estará llena de atenciones y experiencias memorables.
              Sentirán el calor de nuestro estado, no solo en la temperatura, sino en cada sonrisa
              y en cada encuentro.
            </p>
            <p className="text-lg mb-4">
              No dudamos que este 44° Congreso será un rotundo éxito académico y una
              oportunidad para llevarse a casa, no solo nuevos conocimientos, sino también el recuerdo
              de la calidez, la cultura y los hermosos paisajes de Sonora.
            </p>
            <p className="text-lg font-semibold">
              ¡Bienvenidos a Hermosillo!, nuestra casa es su casa.
            </p>
            <p className="text-lg mt-4">
              Atentamente
            </p>
            <p className="text-lg font-semibold">
              Dr. Marco Aurelio Lizárraga Celaya<br/>
              Presidente de la Asociación Mexicana de Quemaduras A.C.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Mesa directiva</h3>
              <p className="mb-4">¡Conócenos!</p>
              <a href="/nosotros" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Ver más
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Eventos</h3>
              <p className="mb-4">Pláticas y conferencias para ustedes.</p>
              <a href="/eventos" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Ver más
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Congreso 2026</h3>
              <p className="mb-4">Más información sobre el congreso.</p>
              <a href="/congreso" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Ver más
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
