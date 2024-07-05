"use client";

import React, { useState } from 'react';

const Circle = ({ text, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`w-60 h-60 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300
                  ${isHovered ? 'bg-white text-black scale-110' : 'bg-white/20 text-white'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className="text-2xl text-center">{text}</span>
    </div>
  );
};

const Title = ({ text }) => {
  return (
    <h2 className="text-4xl font-bold mb-10 text-center">{text}</h2>
  );
};

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="flex flex-col items-center space-y-10">
      <Title text="¿CÓMO FUNCIONA?" />
      <div className="flex space-x-2">
        {["Evaluá las propiedades", "Regístrate", "Invertís desde 50 dólares", "Recibí tu rentabilidad"].map((text, index) => (
          <Circle
            key={index}
            text={text}
            isHovered={hoveredIndex === null ? index === 0 : hoveredIndex === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

