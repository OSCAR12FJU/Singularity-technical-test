import { PawICon } from "../Icons/PawICon";

export const Error = () =>(
    <>
    <div className="relative flex justify-center items-center min-h-screen bg-[#F3F6FB] flex-col"> 
    <div className="py-8 px-4 mx-auto flex  justify-center items-center max-w-screen-xl lg:py-16 gap-4">
        <span className="text-[10rem] text-[#FD5D40] font-bold">4</span>
        <div className='w-32 h-32 md:w-48 md:h-48 flex justify-center rounded-full items-center bg-white overflow-hidden p-6 md:p-2'>
        <PawICon color="#FD5D40" className="md:w-[110px] md:h-[100px]"/>
        </div>
        <span className="text-[10rem] text-[#FD5D40] font-bold">4</span>
    </div>
    <p className="text-xl font-semibold text-[#212229]"><span className="font-bold text-2xl text-[#FD5D40]">Oops!</span> PAGINA NO ENCONTRADA</p>
    </div>
    </>


)