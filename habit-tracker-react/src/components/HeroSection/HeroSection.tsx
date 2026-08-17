import React from 'react';
import type { HeroSectionProps } from '../../types/HeroSectionProps';

export const HeroSection: React.FC<HeroSectionProps> = ({ title = 'Construa sua rotina', subtitle }) => {
  return (
    <section className="hero-section">
      <div>
        <h2>{title}</h2>
        <p>{subtitle ?? 'Adicione hábitos, acompanhe seu progresso e alcance seus objetivos!'}</p>
      </div>
    </section>
  );
};
