import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Socios() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* CTA split: navy left / photo right */}
      <section className="flex flex-col md:flex-row min-h-[320px]">
        <div
          className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-10 py-16"
          style={{ backgroundColor: "#1b2a4a" }}
        >
          <p className="text-white font-bold text-2xl mb-4 max-w-sm leading-snug">
            Únete y sé parte de la prevención y tratamiento de quemaduras.
          </p>
          <p className="text-white font-bold text-xl mb-8">¡Haz la diferencia hoy mismo!</p>
          <a
            href="#requisitos"
            className="border border-white text-white px-6 py-2 text-sm font-medium hover:bg-white hover:text-[#1b2a4a] transition-colors"
          >
            Conoce los requisitos
          </a>
        </div>
        <div className="relative w-full md:w-1/2 min-h-[280px]">
          <Image
            src="/socios-panel.png"
            alt="Formación para profesionales médicos"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Cuota de Anualidad */}
      <section id="requisitos" className="py-12 px-8">
        <h2 className="text-3xl font-bold text-[#1b2a4a] mb-1">Cuota de Anualidad</h2>
        <hr className="border-gray-300 mb-8" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <span className="text-6xl font-black text-[#1b2a4a]">$1,500</span>
            <span className="text-3xl font-bold text-[#1b2a4a]">MXN</span>
          </div>
          <div className="text-gray-500 text-sm leading-relaxed">
            <p>
              En caso de requerir factura, enviar correo a{" "}
              <a href="mailto:amqsocios@gmail.com" className="text-blue-600 hover:underline">
                amqsocios@gmail.com
              </a>{" "}
              o a nuestro{" "}
              <span className="font-semibold text-gray-700">whatsapp 66 23 27 40 63</span>
            </p>
          </div>
        </div>
      </section>

      {/* Dark divider */}
      <div style={{ backgroundColor: "#1b2a4a", height: "12px" }} />

      {/* Datos de transferencia card */}
      <section className="py-16 px-4 flex justify-center">
        <div
          className="rounded-lg p-10 text-center max-w-md w-full"
          style={{ backgroundColor: "#1b2a4a" }}
        >
          <h3 className="text-white font-bold text-3xl mb-6">
            Datos de<br />transferencia
          </h3>
          <p className="text-white font-black text-3xl tracking-widest mb-6">BBVA</p>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-white/60 font-semibold uppercase tracking-wide">
                NOMBRE DEL TITULAR:
              </p>
              <p className="text-white font-medium">Asociación Mexicana de Quemaduras A.C</p>
            </div>
            <div>
              <p className="text-white/60 font-semibold uppercase tracking-wide">
                NÚMERO DE CUENTA:
              </p>
              <p className="text-white font-medium">0120386022</p>
            </div>
            <div>
              <p className="text-white/60 font-semibold uppercase tracking-wide">
                CLABE INTERBANCARIA:
              </p>
              <p className="text-white font-medium">012180001203860226</p>
            </div>
            <div>
              <p className="text-white/60 font-semibold uppercase tracking-wide">
                CÓDIGO SWIFT:
              </p>
              <p className="text-white font-medium">BCMRMXMMPYM</p>
            </div>
          </div>
          <p className="mt-8 text-white/80 text-xs bg-white/10 rounded px-3 py-2">
            Es importante enviar el comprobante de pago a nuestro correo{" "}
            <span className="font-semibold">amqsocios@gmail.com</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
