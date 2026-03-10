import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Marco Aurelio Lizárraga Celaya",
    role: "Presidente",
    specialty: "Cirugía Plástica, Estética y Reconstructiva",
    image: "/nosotros-presidente.png",
  },
  {
    name: "Dr. Marcial Pérez Dosal",
    role: "Vicepresidente",
    specialty: "Cirugía Plástica, Estética y Reconstructiva",
    image: "/nostros-vicepresidente.png",
  },
  {
    name: "Dr. Hilarión Castañeda Rodríguez",
    role: "Secretario",
    specialty: "Cirugía Plástica, Estética y Reconstructiva",
    image: "/nosotros-secretario.png",
  },
  {
    name: "Dra. Ivette Paola Vázquez Mellado Martínez",
    role: "Tesorera",
    specialty: "Cirugía Plástica, Estética y Reconstructiva",
    image: "/nosotros-tesorera.png",
  },
  {
    name: "Dra. Ivette Paola Vázquez Mellado Martínez",
    role: "Primer Vocal",
    specialty: "Cirugía Plástica, Estética y Reconstructiva",
    image: "/nosotros-primer-vocal.png",
  },
  {
    name: "Dr. Cuauhtémoc Leonardo Hernández Perales",
    role: "Segundo Vocal",
    specialty: "Cirugía Plástica, Estética y Reconstructiva",
    image: "/nosotros-presidente.png",
  },
];

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Nuestra historia — 50/50 split */}
      <section className="flex flex-col md:flex-row min-h-[500px]">
        {/* Left: surgical photo */}
        <div className="relative w-full md:w-1/2 min-h-[350px]">
          <Image
            src="/nosotros-panel.png"
            alt="Cirugía"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: text on light gray */}
        <div
          className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-10 py-16"
          style={{ backgroundColor: "#e8e8e8" }}
        >
          <h2 className="text-4xl font-light mb-3" style={{ color: "#2a9d8f" }}>
            Nuestra historia
          </h2>
          <p className="text-lg text-gray-500 mb-6">Dedicación y servicio</p>
          <p className="text-base text-gray-700 mb-5 max-w-md">
            Es increíble cómo una pequeña idea puede convertirse en algo tan especial.
            Asociación Mexicana de Quemaduras se basa en la creencia de que todos tenemos
            la responsabilidad intrínseca de marcar una diferencia significativa en nuestra
            comunidad. Con una variedad de proyectos activos y una amplia plantilla de
            voluntarios, aprovechamos nuestras habilidades y recursos para alcanzar con éxito
            nuestros objetivos.
          </p>
          <p className="text-base text-gray-700 max-w-md">
            Desde que comenzamos en el año 1974, nos enorgullece ser testigos de cómo nuestras
            actividades han beneficiado a la comunidad de México y a muchos más.
          </p>
        </div>
      </section>

      {/* Conoce al equipo — teal background */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2a9d8f" }}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl font-light text-white text-center mb-2">
            Conoce al equipo
          </h2>
          <p className="text-center text-white text-lg mb-16">
            Directiva de la Asociación Mexicana de Quemaduras A.C. 2024-2026
          </p>

          {teamMembers.map((member, index) => (
            <div key={index} className="text-center mb-20">
              <h3 className="text-2xl font-bold text-white mb-6">{member.role}</h3>
              <div className="flex justify-center mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={370}
                  className="object-cover rounded"
                />
              </div>
              <p className="text-xl text-white font-medium">{member.name}</p>
              <p className="text-white/80 text-sm mt-1">{member.specialty}</p>
              <p className="text-white/80 text-sm mt-3 max-w-lg mx-auto">
                Un miembro muy respetado del equipo de Asociación Mexicana de Quemaduras, ha
                desempeñado un papel fundamental en la configuración de nuestra visión y nuestros
                programas. Aporta años de experiencia para que Asociación Mexicana de Quemaduras
                gane renombre.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
