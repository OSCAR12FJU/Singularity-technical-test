import { CatIcon } from "../Icons/CatIcon"
import { HouseIcon } from "../Icons/HouseIcon"
import { PawICon } from "../Icons/PawICon"
import { ServicesItem } from "../ServicesItem"
import DogIcon from "../Icons/DogIcon.png"


export const OurServices = () =>{

    return(
        <>
<div className="relative flex justify-center items-center md:min-h-screen bg-[#F3F6FB]"> 

<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
<div className="grid md:grid-cols-2 gap-8 md:gap-12">
{/* -------------------- */}
<div className="bg-white p-8 md:p-12 mb-8 text-start flex flex-col items-start">
    <h2 className="text-[#FD5D40] text-3xl md:text-5xl font-extrabold mb-8">Our Services</h2>
    <p className="text-lg font-normal text-gray-500 mb-6">National Brand With a Local Feel Experience the Fetch! Difference</p>
    <span className="text-[#FD5D40] font-bold mb-4">Enter Your Location and Fetch Our Services</span>

    <button type="button" className="text-gray-400 bg-[#F3F6FB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg  py-1.5 text-center inline-flex items-center rounded-full pl-6 pr-0 justify-center gap-6 font-normal shadow">
    Zip Code
    <span className="rounded-full bg-[#FF6752] flex justify-center items-center w-12 h-12 ml-auto ml-2 md:ml-6 mr-1">
        <svg className="rtl:rotate-180 w-6 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </span>
</button>

</div>
{/* -------------------------- */}
<div className="grid mb-8 shadow-sm md:mb-12 grid-cols-2 md:grid-cols-2 gap-6 mx-auto">
    <ServicesItem text="Dog Wailking">
        <div className="max-w-lg mx-auto mb-4 text-gray-500 lg:mb-8">
            <img src={DogIcon} alt="DogIcon" />
        </div>
    </ServicesItem>
    <ServicesItem text="Pet Sitting">
        <CatIcon className="mb-6" />
    </ServicesItem>
    <ServicesItem text="Overnight Care">
        <HouseIcon className="mb-6"/>
    </ServicesItem>
    <ServicesItem text="Other Services">
        <PawICon className="mb-6" color="#00225c" opacity="0.3"/>
    </ServicesItem>

</div>
</div>

</div>
</div>
        
        </>

    )
}
