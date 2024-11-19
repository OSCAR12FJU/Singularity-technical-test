import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { HowWorks } from "./HowWorks"
import { MakeFetch } from "./MakeFetch"
import { OurServices } from "./OurServices"
import { PrintipalPet } from "./PrintipalPet"

export const Layout = () =>{
    return(
        <>
        <Header />
        <PrintipalPet />
        <OurServices />
        <HowWorks />
        <MakeFetch />
        <Footer />


        </>
    )
}