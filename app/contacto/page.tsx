'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      mensaje: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl">¡Nos encantaría escucharte!</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-900">Información de contacto</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Teléfono</h3>
                  <a href="tel:+52 66 23 27 40 63" className="text-lg text-blue-600 hover:underline">
                    +52 66 23 27 40 63
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Correo electrónico</h3>
                  <a href="mailto:amqsocios@gmail.com" className="text-lg text-blue-600 hover:underline">
                    amqsocios@gmail.com
                  </a>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Síguenos en redes sociales</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/asociacionmexicanadequemaduras"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/asomexquemaduras/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">WhatsApp</h3>
                  <a href="https://wa.me/5266232764 0" target="_blank" rel="noopener noreferrer" className="text-lg text-green-600 hover:underline">
                    66 23 27 40 63
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-900">Envíanos un mensaje</h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p className="font-bold">¡Mensaje enviado correctamente!</p>
                  <p>Nos pondremos en contacto contigo pronto.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-lg font-semibold text-blue-900 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="apellido" className="block text-lg font-semibold text-blue-900 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tu apellido"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-blue-900 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-lg font-semibold text-blue-900 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tu mensaje"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
