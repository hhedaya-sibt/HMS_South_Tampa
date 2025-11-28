import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'cream' | 'navy';
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    cream: 'bg-brand-cream',
    navy: 'bg-brand-navy text-white',
  };

  return (
    <section id={id} className={`${bgColors[bg]} py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;