import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Inscribete() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Inscríbete</h1>
          <p className="text-xl">44° Congreso Anual Internacional - 2026</p>
          <p className="text-lg mt-4">29 de abril - 2 de mayo, 2026 | Hermosillo, Sonora</p>
        </div>
      </section>

      {/* Registration Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Registration Info */}
          <div className="bg-blue-50 p-8 rounded-lg mb-12 border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">¿Listo para inscribirte?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Obtén más información y regístrate para el 44° Congreso Anual Internacional de la Asociación Mexicana de Quemaduras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:amqsocios@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block text-center"
              >
                ¡Clic para más información!
              </a>
              <a
                href="https://www.asociacionmexicanadequemaduras.org/inscr%C3%ADbete"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold inline-block text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¡Regístrate!
              </a>
            </div>
          </div>

          {/* Registration Process */}
          <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Proceso de registro</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="font-bold text-blue-900">Elige tu categoría</h4>
                  <p className="text-gray-700">Selecciona el tipo de inscripción que mejor se adapte a tu perfil profesional.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="font-bold text-blue-900">Completa el formulario</h4>
                  <p className="text-gray-700">Llena todos los campos requeridos con tu información personal y profesional.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="font-bold text-blue-900">Realiza el pago</h4>
                  <p className="text-gray-700">Efectúa el pago correspondiente según la categoría seleccionada.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="font-bold text-blue-900">Recibe confirmación</h4>
                  <p className="text-gray-700">Obtén tu confirmación de registro y credencial digital.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-3 text-blue-900">Inscripción Profesional</h4>
              <p className="text-gray-700 mb-4">Profesionales activos en el área de quemaduras</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Acceso a todas las conferencias
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Material del congreso
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Certificado de asistencia
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Coffee breaks incluidos
                </li>
              </ul>
              <p className="text-2xl font-bold text-blue-600">Consultar tarifa</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-3 text-blue-900">Inscripción Estudiante</h4>
              <p className="text-gray-700 mb-4">Estudiantes de medicina y especialidades afines</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Acceso a conferencias principales
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Material básico del congreso
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Certificado de asistencia
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Coffee breaks incluidos
                </li>
              </ul>
              <p className="text-2xl font-bold text-blue-600">Tarifa reducida</p>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Información importante</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-900 mb-3">Fechas clave:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-semibold">Registro temprano:</span> Hasta enero 2026</li>
                  <li><span className="font-semibold">Registro regular:</span> Hasta marzo 2026</li>
                  <li><span className="font-semibold">Registro en sitio:</span> Durante el evento</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-3">Métodos de pago:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Transferencia bancaria</li>
                  <li>• Depósito en efectivo</li>
                  <li>• Pago en línea (próximamente)</li>
                  <li>• Pago en sitio</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact for Registration */}
          <div className="text-center bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">¿Necesitas ayuda con tu registro?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Nuestro equipo está listo para ayudarte con cualquier duda sobre el proceso de inscripción.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:amqsocios@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
              >
                Enviar email
              </a>
              <a
                href="tel:+52 66 23 27 40 63"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
              >
                Llamar ahora
              </a>
            </div>
            <div className="text-gray-600 mt-4">
              <p>Teléfono: +52 66 23 27 40 63</p>
              <p>Email: amqsocios@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}