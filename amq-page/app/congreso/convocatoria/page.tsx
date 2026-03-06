import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Convocatoria() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Convocatoria</h1>
          <p className="text-xl">44° Congreso Anual Internacional - 2026</p>
          <p className="text-lg mt-4">Comparte tu experiencia e investigación</p>
        </div>
      </section>

      {/* Call Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">¡Participa en el congreso!</h2>
              <p className="text-lg mb-4">
                Si deseas compartir tu experiencia e investigación en el próximo congreso, estamos
                interesados en conocer tu trabajo.
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
                Descarga la convocatoria completa
              </a>
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/d13e75_e357a4da9052486ab2b36804ec8dd3ad~mv2.png/v1/fill/w_693,h_1350,al_c,q_90,enc_avif,quality_auto/d13e75_e357a4da9052486ab2b36804ec8dd3ad~mv2.png"
                alt="Convocatoria del Congreso"
                width={693}
                height={1350}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Participation Types */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Modalidades de participación</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-3 text-blue-900">Presentación Oral</h4>
                <p className="text-gray-700 mb-4">
                  Exposición de investigaciones o casos clínicos innovadores en sesiones plenarias.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 10-15 minutos de exposición</li>
                  <li>• 5 minutos para preguntas</li>
                  <li>• Material audiovisual permitido</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-3 text-blue-900">Póster Científico</h4>
                <p className="text-gray-700 mb-4">
                  Presentación visual de investigaciones en formato póster durante las sesiones.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Formato estándar (90x120 cm)</li>
                  <li>• Sesión de discusión con autores</li>
                  <li>• Certificado de participación</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-3 text-blue-900">Taller Interactivo</h4>
                <p className="text-gray-700 mb-4">
                  Sesiones prácticas donde compartir técnicas y procedimientos especializados.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Duración: 60-90 minutos</li>
                  <li>• Participación activa del público</li>
                  <li>• Material didáctico incluido</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-3 text-blue-900">Mesa Redonda</h4>
                <p className="text-gray-700 mb-4">
                  Discusiones especializadas con panelistas expertos en temas específicos.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Moderador designado</li>
                  <li>• Participación del público</li>
                  <li>• Documentación del debate</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Submission Process */}
          <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Proceso de envío</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-bold text-blue-900">Descarga el formato</h4>
                  <p className="text-gray-700">Obtén el formato oficial de presentación de trabajos científicos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-bold text-blue-900">Completa la información</h4>
                  <p className="text-gray-700">Llena todos los campos requeridos con tu información y resumen del trabajo.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-bold text-blue-900">Envía tu propuesta</h4>
                  <p className="text-gray-700">Envía el formulario completo a amqsocios@gmail.com antes de la fecha límite.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-bold text-blue-900">Espera confirmación</h4>
                  <p className="text-gray-700">Recibirás una confirmación de recepción y posteriormente la aceptación de tu trabajo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="bg-blue-50 p-8 rounded-lg mb-12 border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Fechas importantes</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="font-semibold text-blue-900">Apertura de convocatoria:</span>
                <span className="text-gray-700">1 de enero de 2026</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="font-semibold text-blue-900">Fecha límite de envío:</span>
                <span className="text-gray-700">15 de marzo de 2026</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-200">
                <span className="font-semibold text-blue-900">Notificación de aceptación:</span>
                <span className="text-gray-700">30 de marzo de 2026</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-blue-900">Congreso:</span>
                <span className="text-gray-700">29 de abril - 2 de mayo de 2026</span>
              </div>
            </div>
          </div>

          {/* Evaluation Criteria */}
          <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Criterios de evaluación</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-900 mb-3">Criterios científicos:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Originalidad e innovación</li>
                  <li>• Metodología y rigor científico</li>
                  <li>• Relevancia clínica</li>
                  <li>• Impacto potencial</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-3">Criterios formales:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Claridad en la presentación</li>
                  <li>• Cumplimiento del formato</li>
                  <li>• Calidad de las imágenes</li>
                  <li>• Ortografía y gramática</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">¿Tienes preguntas sobre la convocatoria?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Contáctanos para obtener más información sobre las modalidades de participación.
            </p>
            <a
              href="mailto:amqsocios@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
            >
              Contactar al comité científico
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}