import { CarrouselTest } from "../CarrouselTest"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { HowWorks } from "./HowWorks"
import { MakeFetch } from "./MakeFetch"
import { OurServices } from "./OurServices"
import { PrintipalPet } from "./PrintipalPet"

export const Layout = () =>{
    return(
        <>
        <div className="relative z-50 bg-principal-svg bg-no-repeat bg-cover min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <PrintipalPet />
        </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F3F6FB]">
        <OurServices />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F3F6FB] mt-6 md:mt-6">
        <CarrouselTest />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F3F6FB]">
        <HowWorks />
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F3F6FB]">
            
        <MakeFetch />
        </div>
        <Footer />        

        </>
    )
}