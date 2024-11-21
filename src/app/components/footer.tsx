export default function Footer() {
    return (
      <footer className="bg-emerald-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre Taller Kebekwak</h3>
              <p className="text-sm">
              Fusce luctus massa sapien, eu luctus lacus lacinia molestie. Suspendisse sed eros risus. Proin luctus metus eget mi molestie, 
              at molestie metus maximus. Vivamus tempus dui eu tortor feugiat, id facilisis arcu porta. 
              In ullamcorper vehicula diam tempus ornare.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:underline">Términos y Condiciones</a></li>
                <li><a href="#" className="text-sm hover:underline">Política de Privacidad</a></li>
                <li><a href="#" className="text-sm hover:underline">Preguntas Frecuentes</a></li>
                <li><a href="#" className="text-sm hover:underline">Envíos y Devoluciones</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
              
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-emerald-700 text-center">
            <p className="text-sm">&copy; 2024 Taller Kebekwak. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  }
