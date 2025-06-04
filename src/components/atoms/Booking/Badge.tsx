import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'accent';
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = 'primary', children }) => {
  const variants = {
    primary: 'bg-green-600 text-white',
    accent: 'bg-accent-600 text-white'
  };

  return (
    <span className={`${variants[variant]} py-1 px-2 md:px-3 text-xs md:text-sm rounded-full font-medium shadow-md whitespace-nowrap`}>
      {children}
    </span>
  );
};

export default Badge;