import { CatIcon } from "../Icons/CatIcon"
import { ServicesItem } from "../ServicesItem"

export const HowWorks = () =>{

    return(
    <div className="grid grid-cols-1 bg-[#F3F6FB] md:grid-cols-5 gap-4 p-4">
    <div className="py-8 col-span-3 order-2 md:order-1 max-w-screen-xl lg:py-16">
     <div className="flex flex-row gap-[10rem] justify-center items-center">
     <ServicesItem text="Reserve">
        <CatIcon />
    </ServicesItem>
    <div className="flex text-center justify-center items-center px-16 py-8"></div>
     </div>

     <div className="flex flex-row gap-[10rem] justify-center items-center">
    <div className="flex text-center justify-center items-center px-16 py-8"></div>
     <ServicesItem text="Reserve">
        <CatIcon />
    </ServicesItem>
    </div>

     <div className="flex flex-row gap-[10rem] justify-center items-center">
     <ServicesItem text="Reserve">
        <CatIcon />
    </ServicesItem>
    <div className="flex text-center justify-center items-center px-16 py-8"></div>
     </div>
</div>
{/* ----------------- */}
<div className="grid grid-cols-1 col-span-2 place-items-center md:-mt-40">
<div className="p-8 md:px-12 py-8 mb-8 text-start flex flex-col justify-center  items-start">
    <h2 className="text-[#FD5D40] text-3xl md:text-5xl font-extrabold mb-8">How it Works</h2>
    <p className="text-lg font-normal text-gray-500 mb-6">Because finding a good pet sitter shouldn't be a hassle. With Fetch It's as easy as.. </p>
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
</div>
</div>



    )
}