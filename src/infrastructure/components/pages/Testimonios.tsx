import React  from "react";
import "../../App.css";
import { CarrouselTest } from "../CarrouselTest";

export interface TestItems{
    image: string;
    name: string;
    testimonio: string;
}
export const Testimonios: React.FC = () => {
    return(
        <>
        <section className={`w-full mx-auto md:max-w-6xl max-w-2xl py-10 md:pt-10pb-10`} >
        <CarrouselTest />
        </section>
        </>


    )
  }
