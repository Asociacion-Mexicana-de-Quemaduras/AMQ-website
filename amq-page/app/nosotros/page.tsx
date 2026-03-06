import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Nosotros() {
  const teamMembers = [
    {
      name: "Dr. Marco Aurelio Lizárraga Celaya",
      role: "Presidente",
      specialty: "Cirugía Plástica, Estética y Reconstructiva",
      image:
        "https://static.wixstatic.com/media/d13e75_d98f1f0633ca4ea5bb9819a16ed69d0a~mv2.png/v1/crop/x_710,y_311,w_502,h_489/fill/w_600,h_587,al_c,lg_1,q_85,enc_avif,quality_auto/Dr_%20maro%20aurelio.png",
    },
    {
      name: "Dr. Marcial Pérez Dosal",
      role: "Vicepresidente",
      specialty: "Cirugía Plástica, Estética y Reconstructiva",
      image:
        "https://static.wixstatic.com/media/d13e75_c802599415534809afce933e2a07d411~mv2.png/v1/crop/x_699,y_335,w_525,h_461/fill/w_630,h_553,al_c,lg_1,q_85,enc_avif,quality_auto/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(3).png",
    },
    {
      name: "Dr. Hilarión Castañeda Rodríguez",
      role: "Secretario",
      specialty: "Cirugía Plástica, Estética y Reconstructiva",
      image:
        "https://static.wixstatic.com/media/d13e75_ff5bce7abf3e4c1fac0535d676fe5a14~mv2.png/v1/crop/x_784,y_300,w_351,h_486/fill/w_421,h_580,al_c,lg_1,q_85,enc_avif,quality_auto/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(4).png",
    },
    {
      name: "Dr. Hilarión Castañeda Rodríguez",
      role: "Tesorero",
      specialty: "Cirugía Plástica, Estética y Reconstructiva",
      image:
        "https://static.wixstatic.com/media/d13e75_8528bfd4c90a4ea5bb9819a16ed69d0a~mv2.png/v1/crop/x_739,y_265,w_439,h_565/fill/w_525,h_678,al_c,lg_1,q_85,enc_avif,quality_auto/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(2).png",
    },
    {
      name: "Dra. Ivette Paola Vázquez Mellado Martínez",
      role: "Primer Vocal",
      specialty: "Cirugía Plástica, Estética y Reconstructiva",
      image:
        "https://static.wixstatic.com/media/d13e75_eb42f08b92c54e9fa1de95a66eeb557b~mv2.png/v1/crop/x_763,y_305,w_377,h_464/fill/w_452,h_555,al_c,lg_1,q_85,enc_avif,quality_auto/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(1).png",
    },
    {
      name: "Dr. Cuauhtémoc Leonardo Hernández Perales",
      role: "Segundo Vocal",
      specialty: "Cirugía Plástica, Estética y Reconstructiva",
      image:
        "https://static.wixstatic.com/media/d13e75_d98f1f0633ca4ea5bb9819a16ed69d0a~mv2.png/v1/crop/x_710,y_311,w_502,h_489/fill/w_600,h_587,al_c,lg_1,q_85,enc_avif,quality_auto/Dr_%20maro%20aurelio.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Acerca de nosotros</h1>
          <p className="text-xl">Nuestra historia y equipo directivo</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">Nuestra historia</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-900">Dedicación y servicio</h3>
              <p className="text-lg mb-4">
                Es increíble cómo una pequeña idea puede convertirse en algo tan especial. Asociación Mexicana de
                Quemaduras se basa en la creencia de que todos tenemos la responsabilidad intrínseca de marcar una
                diferencia significativa en nuestra comunidad.
              </p>
              <p className="text-lg mb-4">
                Con una variedad de proyectos activos y una amplia plantilla de voluntarios, aprovechamos nuestras
                habilidades y recursos para alcanzar con éxito nuestros objetivos.
              </p>
              <p className="text-lg mb-4">
                Desde que comenzamos en el año 1974, nos enorgullece ser testigos de cómo nuestras actividades han
                beneficiado a la comunidad de México y a muchos más.
              </p>
            </div>
            <div>
              <Image
                src="https://static.wixstatic.com/media/11062b_51d6cb9828a04eb88ce21ba4e443a1f3~mv2.jpg/v1/fill/w_980,h_1774,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_51d6cb9828a04eb88ce21ba4e443a1f3~mv2.jpg"
                alt="Cirugía"
                width={980}
                height={1774}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">Conoce al equipo</h2>
          <p className="text-center text-lg mb-12 font-semibold text-blue-900">
            Directiva de la Asociación Mexicana de Quemaduras A.C. 2024-2026
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">{member.name}</h3>
                  <p className="font-semibold text-blue-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.specialty}</p>
                  <p className="text-gray-700 mt-4 text-sm">
                    Un miembro muy respetado del equipo de Asociación Mexicana de Quemaduras, ha desempeñado un papel
                    fundamental en la configuración de nuestra visión y nuestros programas. Aporta años de experiencia
                    para que Asociación Mexicana de Quemaduras gane renombre.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
