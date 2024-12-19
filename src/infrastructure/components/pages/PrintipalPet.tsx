// import GoldenPet from './files/GoldenPet.png'
import GoldenPet from '../files/GoldenPet.png'
import '../../../App.css'


export const PrintipalPet = () =>{

    return(
        <>  
        <div className="flex justify-center items-center py-8 px-4"> 
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* -------------------- */}
        <div className="p-8 md:px-12 md:pt-10 md:pb-12 mb-8 flex flex-col justify-center text-start items-start">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-8">We Get Pet Care!</h1>
            <p className="text-lg font-normal text-white mb-6">For over 17 years, Fetch! Pet Care has been a trusted parther in keeping pets healthy and happy!</p>
            <div className="inline-flex justify-center gap-2">
            <a href="#" className=" py-4 px-8 text-base md:text-lg font-semibold text-center text-white rounded-full bg-[#4487FF]">
                Shedule Service
            </a>
            {/* <a href="#" className="py-4 px-8 text-lg font-normal text-center text-white rounded-full ">
                Or Call 866.338.2463
            </a> */}
            </div>
        </div>
        {/* -------------------------- */}
        <div className="flex justify-center items-center mx-auto w-full">
        <div className="flex justify-end items-center ">
        <img src={GoldenPet} alt="Golden Pet" 
             className="object-cover" />
       </div>

        </div>
        </div>

        </div>
        </>
    )
}