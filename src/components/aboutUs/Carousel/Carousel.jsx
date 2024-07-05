"use client";
import { useState, useRef } from 'react';
import Card from './Card';

import { ChevronRight, ChevronLeft } from 'lucide-react';

const Carousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].offsetWidth;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <div className="relative md:overflow-hidden">
      <button
        className="absolute left-0 z-10 text-white transform -translate-x-full -translate-y-1/2 top-1/2 md:hidden"
        onClick={handlePrev}
      >
        <ChevronLeft size={34} />
      </button>
      <div
        ref={carouselRef}
        className=" flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 my-14 w-full max-md:overflow-x-scroll [scroll-snap-type:x_mandatory]"
      >
        {cards.map((profile, index) => (
          <div
            key={profile.id}
            className="md:max-w-[400px] mx-auto w-full md:flex-1  flex-[0_0_100%] [scroll-snap-align:center]"
          >
            <Card {...profile} />
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 z-10 text-white transform translate-x-full -translate-y-1/2 top-1/2 md:hidden"
        onClick={handleNext}
      >
        <ChevronRight size={34} />
      </button>
    </div>
  );
};

export default Carousel;
