

import { DropdownMenu } from './ui/dropdown-menu';
import Button from './ui/button';

export default function Header({ }) {
  return (
    <header className="bg-emerald-700 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Kebekwak</h1>
        </div>
        <div className="flex-1 mx-4">
          
        </div>
        <Button variant="outline" className="text-white border-white">
          
          Ver carrito ()
        </Button>
      </div>
    </header>
  );
}
