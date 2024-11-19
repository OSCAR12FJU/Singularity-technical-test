import React  from "react";
import "../../App.css";
import { CarrouselTest } from "../CarrouselTest";

export interface TestItems{
    image: string;
    name: string;
    testimonio: string;
}

const Peoples= [
    {
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_883442-MLA79886224354_102024-V.webp',
    name: 'Oscar Flores',
    testimonio: 'era hace una vez que estaba al pedo y lelve a mi perro a que lo asicales, quedo menos feo de lo habitual gracias.',
    },
    {
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_883442-MLA79886224354_102024-V.webp',
    name: 'Oscar Flores',
    testimonio: 'era hace una vez que estaba al pedo y lelve a mi perro a que lo asicales, quedo menos feo de lo habitual gracias.',
    },
    {
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_883442-MLA79886224354_102024-V.webp',
    name: 'Oscar Flores',
    testimonio: 'era hace una vez que estaba al pedo y lelve a mi perro a que lo asicales, quedo menos feo de lo habitual gracias.',
    },
    {
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_883442-MLA79886224354_102024-V.webp',
    name: 'Oscar Flores',
    testimonio: 'era hace una vez que estaba al pedo y lelve a mi perro a que lo asicales, quedo menos feo de lo habitual gracias.',
    },
    {
    image: 'https://http2.mlstatic.com/D_Q_NP_2X_883442-MLA79886224354_102024-V.webp',
    name: 'Oscar Flores',
    testimonio: 'era hace una vez que estaba al pedo y lelve a mi perro a que lo asicales, quedo menos feo de lo habitual gracias.',
    },
]

export const Testimonios: React.FC = () => {
    return(
        <>
        <section className={`w-full mx-auto md:max-w-6xl max-w-2xl py-10 md:pt-10pb-10`} >
        <CarrouselTest testimonios={Peoples}/>
        </section>
        </>


    )
  }
