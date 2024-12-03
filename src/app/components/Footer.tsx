"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button, Input } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Ecommerce</h2>
            <p className="text-gray-400">
              Ofrecemos soluciones innovadoras para tu negocio.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-gray-300 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/acerca"
                  className="hover:text-gray-300 transition-colors"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Columna 4: Formulario de suscripción */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Suscríbete a nuestro boletín
            </h3>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-8 border-gray-800" />

        {/* Derechos de autor */}
        <div className="text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
