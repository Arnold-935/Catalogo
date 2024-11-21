import React, { useState, useRef, useEffect } from 'react';
import Button from './button';

interface DropdownMenuProps {
  children: React.ReactNode;
}

const DropdownMenuTrigger: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => (
    <div onClick={onClick}>
      {children}
    </div>
  );

const DropdownMenuContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="absolute bg-white border border-gray-300 rounded-md shadow-lg mt-2">
    {children}
  </div>
);

const DropdownMenuItem: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => (
  <div
    onClick={onClick}
    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 cursor-pointer"
  >
    {children}
  </div>
);

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Escuchar clics fuera del menú
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative inline-block">
      {React.Children.map(children, (child) => {
        if (child.type === DropdownMenuTrigger) {
          return React.cloneElement(child as React.ReactElement, {
            onClick: () => setIsOpen(!isOpen),
          });
        }
        if (child.type === DropdownMenuContent && isOpen) {
          return React.cloneElement(child as React.ReactElement, {});
        }
        return child;
      })}
    </div>
  );
};

DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;

export { DropdownMenu };
