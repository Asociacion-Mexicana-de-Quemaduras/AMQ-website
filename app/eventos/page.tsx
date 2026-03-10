import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Eventos() {
  const upcomingEvents = [
    {
      title: "Plática virtual sobre actualización en quemaduras",
      date: "Próximamente",
      description: "Únete a nuestra plática virtual sobre los últimos avances en el tratamiento de quemaduras.",
      link: "https://us06web.zoom.us/j/81886378421?pwd=opt0u0LHwgBa7G2O5QwkY2nHcsvMtI.1",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Eventos</h1>
          <p className="text-xl">Pláticas, conferencias y actividades de la AMQ</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">¡No te lo puedes perder!</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-3 text-blue-900">{event.title}</h3>
                <p className="text-lg text-gray-700 mb-4">
                  <span className="font-semibold">Fecha:</span> {event.date}
                </p>
                <p className="text-lg text-gray-700 mb-6">{event.description}</p>
                <a
                  href={event.link}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrar a la plática
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Calendario de eventos</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 text-center mb-6">
              Consulta nuestro calendario de eventos, webinars, y talleres programados para el año 2026.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Próximos eventos</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <span className="font-semibold text-blue-900">44° Congreso Anual Internacional:</span> 29 de abril -
                  2 de mayo, 2026 en Hermosillo, Sonora
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold text-blue-900">Pláticas virtuales mensuales</span> sobre temas de
                  interés en el tratamiento de quemaduras
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold text-blue-900">Talleres especializados</span> para profesionales de
                  la salud
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-bold text-blue-900 mb-4">Eventos pasados</h4>
              <p className="text-gray-600">
                Para más información sobre eventos anteriores, contáctanos a{" "}
                <a href="mailto:amqsocios@gmail.com" className="text-blue-600 hover:underline">
                  amqsocios@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
