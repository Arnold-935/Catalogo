'use client';

import Footer from "./components/footer";
import Header from "./components/header";
import CardContent from "./components/ui/cardcontent";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-500 via-blue-500 to-red-500">
      <Header />
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestros Productos</h2>
      
      {/* Contenedor para el contenido de las tarjetas */}
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <CardContent />
      </div>

      <Footer />
    </div>
  );
}

