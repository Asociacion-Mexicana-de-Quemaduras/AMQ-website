import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Programa() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Programa del Congreso</h1>
          <p className="text-xl">44° Congreso Anual Internacional - 2026</p>
          <p className="text-lg mt-4">29 de abril - 2 de mayo, 2026 | Hermosillo, Sonora</p>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Conoce nuestro programa</h2>
              <p className="text-lg mb-4">
                Ponentes internacionales, conferencias magistrales, talleres especializados y espacios de networking
                diseñados para llevar tu experiencia al siguiente nivel.
              </p>
              <p className="text-lg mb-6 text-gray-600 italic">
                *Este programa está sujeto a cambios
              </p>
              <a
                href="https://www.asociacionmexicanadequemaduras.org/_files/ugd/d13e75_066a2f552b9844e3a897533c70b20cf4.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descarga el programa completo
              </a>
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/d13e75_77f555428baa4d17b4855dd02e7dfb3f~mv2.png/v1/crop/x_666,y_382,w_588,h_317,q_85,blur_2,enc_avif,quality_auto/d13e75_77f555428baa4d17b4855dd02e7dfb3f~mv2.png"
                alt="Programa del Congreso"
                width={588}
                height={317}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Program Highlights */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Actividades destacadas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-blue-900">Conferencias Magistrales</h4>
                    <p className="text-gray-700">Presentaciones de expertos internacionales en el tratamiento de quemaduras.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-blue-900">Talleres Especializados</h4>
                    <p className="text-gray-700">Sesiones prácticas sobre técnicas avanzadas y tratamientos innovadores.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-blue-900">Espacios de Networking</h4>
                    <p className="text-gray-700">Oportunidades para conectar con colegas y establecer colaboraciones.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                  <div>
                    <h4 className="font-bold text-blue-900">Presentaciones Científicas</h4>
                    <p className="text-gray-700">Compartición de investigaciones y casos clínicos innovadores.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">5</div>
                  <div>
                    <h4 className="font-bold text-blue-900">Actualización Científica</h4>
                    <p className="text-gray-700">Mantente al día con los últimos avances en el campo.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">6</div>
                  <div>
                    <h4 className="font-bold text-blue-900">Fortalecimiento Profesional</h4>
                    <p className="text-gray-700">Desarrollo de habilidades y conocimientos especializados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Preview */}
          <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Vista previa del programa</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-blue-900">Día 1 - 29 de abril</h4>
                <p className="text-gray-700">Inauguración y conferencias magistrales de apertura</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-blue-900">Día 2 - 30 de abril</h4>
                <p className="text-gray-700">Talleres especializados y presentaciones científicas</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-blue-900">Día 3 - 1 de mayo</h4>
                <p className="text-gray-700">Sesiones temáticas y networking</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-blue-900">Día 4 - 2 de mayo</h4>
                <p className="text-gray-700">Cierre del congreso y clausura</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Para el programa completo con horarios detallados, descarga el documento oficial.
              </p>
              <a
                href="https://www.asociacionmexicanadequemaduras.org/_files/ugd/d13e75_066a2f552b9844e3a897533c70b20cf4.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar Programa Completo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}