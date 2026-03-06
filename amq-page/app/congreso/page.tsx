import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Congreso() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Congreso 2026</h1>
          <p className="text-xl">44° Congreso Anual Internacional</p>
          <p className="text-lg mt-4">29 de abril - 2 de mayo, 2026 | Hermosillo, Sonora</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Conoce nuestro programa</h2>
              <p className="text-lg mb-4">
                Ponentes internacionales, conferencias magistrales, talleres especializados y espacios de networking
                diseñados para llevar tu experiencia al siguiente nivel.
              </p>
              <p className="text-lg mb-6 text-gray-600">
                Este programa está sujeto a cambios
              </p>
              <a
                href="https://www.asociacionmexicanadequemaduras.org/_files/ugd/d13e75_066a2f552b9844e3a897533c70b20cf4.pdf"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descarga el programa
              </a>
            </div>
            <div>
              <Image
                src="/congreso-panel.png"
                alt="Programa del Congreso"
                width={588}
                height={317}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Accommodation Section */}
          <div className="bg-blue-50 p-8 rounded-lg mb-12 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Hospedaje</h3>
            <p className="text-lg text-gray-700 mb-4">
              Contamos con opciones de hospedaje especiales para los asistentes del congreso. Hermosillo ofrece una
              variedad de hoteles y servicios para que disfrutes de una estancia cómoda.
            </p>
            <p className="text-lg text-gray-700">
              Para más información sobre hospedaje y tarifas especiales, contáctanos a{" "}
              <a href="mailto:amqsocios@gmail.com" className="text-blue-600 hover:underline font-semibold">
                amqsocios@gmail.com
              </a>
            </p>
          </div>

          {/* Participate Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-900">¿Quieres participar?</h3>
              <p className="text-lg mb-4">
                Si deseas compartir tu experiencia e investigación en el próximo congreso, estamos interesados en
                conocer tu trabajo.
              </p>
              <p className="text-lg mb-6 text-blue-900 font-semibold">
                ¡Tu participación puede contribuir al avance de la atención especializada en quemaduras!
              </p>
              <a
                href="https://www.asociacionmexicanadequemaduras.org/_files/ugd/d13e75_1de2363e96fc4ef08421afd91175747d.pptx?dn=FORMATO%20INSCRIPCION%20DE%20TRABAJOS%20CIENTIFICOS%20AMQ%202026.pptx"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descarga el formato de participación
              </a>
            </div>
            <div>
              <Image
                src="/congreso-panel.png"
                alt="Participar en el Congreso"
                width={693}
                height={1350}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Registration Section */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6">¿Listo para inscribirte?</h3>
            <p className="text-lg mb-6">
              Obtén más información y regístrate para el 44° Congreso Anual Internacional de la Asociación Mexicana de
              Quemaduras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:amqsocios@gmail.com"
                className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold inline-block text-center"
              >
                ¡Clic para más información!
              </a>
              <a
                href="/congreso#registro"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold inline-block text-center"
              >
                ¡Regístrate!
              </a>
            </div>
          </div>

          {/* Costs Section */}
          <div id="registro" className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Costos de inscripción</h3>
            <p className="text-lg text-gray-700 mb-6">
              Los costos de inscripción varían según la categoría de participante. Para más información sobre tarifas
              y opciones de pago, contáctanos.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 p-6 bg-white rounded">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Inscripción Regular</h4>
                <p className="text-gray-700 mb-2">Profesionales activos en el área de quemaduras</p>
                <p className="text-2xl font-bold text-blue-600">Consultar tarifa</p>
              </div>
              <div className="border-l-4 border-blue-600 p-6 bg-white rounded">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Inscripción Estudiante</h4>
                <p className="text-gray-700 mb-2">Estudiantes de medicina y especialidades afines</p>
                <p className="text-2xl font-bold text-blue-600">Tarifa reducida</p>
              </div>
            </div>
            <p className="text-center mt-8 text-lg">
              Para más información, escribe a{" "}
              <a href="mailto:amqsocios@gmail.com" className="text-blue-600 hover:underline font-semibold">
                amqsocios@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
