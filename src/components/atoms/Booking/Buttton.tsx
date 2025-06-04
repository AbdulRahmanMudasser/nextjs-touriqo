import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  icon?: typeof LucideIcon;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon: Icon,
  className = '',
  onClick 
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition-all duration-300';
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg',
    outline: 'border border-green-600 text-green-600 hover:bg-green-50'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};

export default Button;