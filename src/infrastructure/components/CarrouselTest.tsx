import React, { useRef } from "react";
import {TestItems } from "./pages/Testimonios";


interface CarrousselProps{
    testimonios: TestItems[]
    className?: string;
}

export const CarrouselTest:React.FC<CarrousselProps> = ({className, testimonios}) => {
    const carouselRef = useRef<HTMLDivElement | null>(null);

      const handleScroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
          const scrollAmount = 300; // Ajusta la cantidad de desplazamiento
          if (direction === 'left') {
            carouselRef.current.scrollLeft -= scrollAmount;
          } else {
            carouselRef.current.scrollLeft += scrollAmount;
          }
        }
      };
    
    return(
    <div className={`w-full text-left ${className}`}>
    <h3 className="md:text-4xl text-3xl font-bold text-black mb-8"> TESTIMONIOS</h3>

  <div className="relative">
  <button
      onClick={() => handleScroll('left')}
      className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-second group-hover:bg-white/50">
        <svg
          className="w-4 h-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
    
  <div className="scrollbar-hide flex flex-nowrap overflow-x-auto scroll-smooth gap-4" ref={carouselRef}>

    {testimonios.map(({ image, name, testimonio } ,index) => (
        <div key={index} className="w-48 h-48 bg-[#ffbe00]">
            <img src={image} alt="oscar"/>
            <h2>{name}</h2>
            <p>{testimonio}</p>

        </div>
       
    ))}

  </div>
  <button
      onClick={() => handleScroll('right')}
      className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-second group-hover:bg-white/50">
        <svg
          className="w-4 h-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 9l4-4-4-4"
          />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
</div>

      </div>

)
}
