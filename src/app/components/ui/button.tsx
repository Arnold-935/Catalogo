import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'; // Variantes del botón
  size?: 'small' | 'medium' | 'large'; // Tamaños del botón
}

const buttonStyles = {
  base: 'inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
  },
  sizes: {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  },
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
  // Concatenar manualmente las clases
  const combinedClassName = `${buttonStyles.base} ${buttonStyles.variants[variant]} ${buttonStyles.sizes[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;

