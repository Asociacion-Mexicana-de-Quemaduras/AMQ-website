import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Socios() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Socios</h1>
          <p className="text-xl">Únete a nuestra comunidad de profesionales dedicados a la atención de quemaduras</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Únete a la AMQ</h2>
              <p className="text-lg mb-4">
                Únete y sé parte de la prevención y tratamiento de quemaduras. ¡Haz la diferencia hoy mismo!
              </p>
              <p className="text-lg mb-6">
                La Asociación Mexicana de Quemaduras es una organización dedicada a promover la atención integral
                del paciente quemado a través de la investigación, educación y capacitación de profesionales de la salud.
              </p>
              <a
                href="/socios#requisitos"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
              >
                Conoce los requisitos
              </a>
            </div>
            <div>
              <Image
                src="/../../public/socios-panel.png"
                alt="Formación para profesionales médicos"
                width={982}
                height={724}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Annual Fee Section */}
          <div id="requisitos" className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Cuota de Anualidad</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-blue-600 mb-4">$1,500 MXN</h4>
                <p className="text-lg mb-4">
                  En caso de requerir factura, enviar correo a{" "}
                  <a href="mailto:amqsocios@gmail.com" className="text-blue-600 hover:underline">
                    amqsocios@gmail.com
                  </a>{" "}
                  o a nuestro WhatsApp{" "}
                  <a href="tele:+52 66 23 27 40 63" className="text-blue-600 hover:underline">
                    66 23 27 40 63
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 text-blue-900">Datos de transferencia</h4>
                <div className="space-y-3 text-lg">
                  <div>
                    <p className="font-semibold">Nombre del titular:</p>
                    <p>Asociación Mexicana de Quemaduras A.C</p>
                  </div>
                  <div>
                    <p className="font-semibold">Número de cuenta:</p>
                    <p>0120386022</p>
                  </div>
                  <div>
                    <p className="font-semibold">CLABE Interbancaria:</p>
                    <p>012180001203860226</p>
                  </div>
                  <div>
                    <p className="font-semibold">Código SWIFT:</p>
                    <p>BCMRMXMMPYM</p>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  Es importante enviar el comprobante de pago a nuestro correo{" "}
                  <a href="mailto:amqsocios@gmail.com" className="text-blue-600 hover:underline">
                    amqsocios@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
