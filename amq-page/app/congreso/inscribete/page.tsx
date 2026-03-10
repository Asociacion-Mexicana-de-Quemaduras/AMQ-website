'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { useState } from "react";

export default function Inscribete() {
  const [form, setForm] = useState({
    nombre: "", apellido: "", correo: "", telefono: "",
    regimenFiscal: "", rfc: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:amqsocios@gmail.com?subject=Inscripción Congreso 2026&body=Nombre: ${form.nombre} ${form.apellido}%0ANombre: ${form.correo}%0ATeléfono: ${form.telefono}`;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="px-8 py-12">
        <h1 className="text-5xl font-black text-[#1b2a4a] text-center mb-12">¡Regístrate!</h1>

        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-start">

          {/* Left: form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Nombre *</label>
              <input
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Apellido *</label>
              <input
                name="apellido"
                required
                value={form.apellido}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Correo *</label>
              <input
                name="correo"
                type="email"
                required
                value={form.correo}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Teléfono *</label>
              <input
                name="telefono"
                type="tel"
                required
                value={form.telefono}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
            </div>

            <p className="text-sm text-gray-500 mt-2">En caso de requerir factura:</p>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Régimen Fiscal</label>
              <input
                name="regimenFiscal"
                value={form.regimenFiscal}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">RFC</label>
              <input
                name="rfc"
                value={form.rfc}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Comprobante de pago</label>
              <label className="cursor-pointer border border-gray-400 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 inline-block">
                + Subir archivo
                <input type="file" className="hidden" accept="image/*,.pdf" />
              </label>
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold py-3 mt-2 transition-colors"
              style={{ backgroundColor: "#1b2a4a" }}
            >
              Enviar
            </button>
          </form>

          {/* Right: cost table + transfer info */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full">
              <Image
                src="/congreso-costos-2.png"
                alt="Costo de inscripción"
                width={600}
                height={500}
                className="w-full h-auto rounded"
              />
            </div>
            <h3 className="text-xl font-bold text-[#1b2a4a]">Datos para transferir:</h3>
            <div className="relative w-full">
              <Image
                src="/congreso-costos-1.png"
                alt="Datos de transferencia BBVA"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
