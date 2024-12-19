import { useState } from "react";
import chicaChina from "./files/china.png"

export const CarrouselTest = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array con colores para las tarjetas
  const cards = [
    { id: 0, color: "bg-[#FD6845]" },
    { id: 1, color: "bg-[#3D75EC]" },
    { id: 2, color: "bg-[#FD6845]" },
  ];

  // Función para cambiar al siguiente slide
  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Función para cambiar al slide anterior
  const prevCard = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (

    <div className="flex w-full flex-col justify-center text-center overflow-hidden py-8  ">

      <h2 className="text-[#FD6845] text-3xl md:text-5xl font-extrabold mb-8 max-w-5xl mx-auto">Here's what pet owners have to say about Fetch! Pet Case...</h2>

    <div className="relative w-full max-w-5xl mx-auto min-h-[500px] flex justify-center items-center">
      {/* Botones de navegación */}
      <button
        onClick={prevCard}
        className="absolute left-10 z-20 bg-[#FD6845] px-3 py-3 rounded-full shadow-2xl text-white text-2xl font-bold"
      >
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" stroke-width="1"> <path d="M5 12l14 0"></path> <path d="M5 12l6 6"></path> <path d="M5 12l6 -6"></path> </svg> 
      </button>

      <button
        onClick={nextCard}
        className="absolute right-10 z-20 bg-[#FD6845] px-3 py-3 rounded-full shadow-2xl text-white text-2xl font-bold" 
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" stroke-width="1">
  <path d="M5 12l14 0"></path>
  <path d="M13 18l6 -6"></path>
  <path d="M13 6l6 6"></path>
</svg> 
      </button>
      

      {/* Contenedor de tarjetas */}
      <div className="relative flex justify-center items-center">
        {cards.map((card, index) => {
          const isActive = index === activeIndex; // Tarjeta del frente
          const isPrev =
            index === (activeIndex - 1 + cards.length) % cards.length; // Tarjeta izquierda
          const isNext = index === (activeIndex + 1) % cards.length; // Tarjeta derecha

          return (
            <div
              key={card.id}
              className={`absolute min-w-72 md:w-[25rem] rounded-lg shadow-lg transition-transform flex justify-center items-center flex-col px-6 py-8 duration-500 shadow-2xl ${
                isActive
                  ? "z-10 scale-110" // Tarjeta activa (frente)
                  : "z-0 scale-90 " // Tarjetas atrás
              } ${isPrev ? "-translate-x-32" : ""} ${
                isNext ? "translate-x-32" : ""
              } ${card.color}`}
            >
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={chicaChina} alt="Bonnie image"/>
        <h5 className="mb-2 text-xl font-normal text-white">Bonnie Green</h5>
        <span className="text-md text-white ">"I like that i got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication i get about the dog and how my dog is doning."</span>

            </div>
          );
        })}
      </div>
    </div>
    </div>

  );
};
