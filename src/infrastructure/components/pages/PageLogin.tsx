import { useState } from "react"
import { FormLogin } from "../FormLogin"
import { Loading } from "../Loading"
import { ModalNewUser } from "../ModalNewUser"
import { useAuth } from "../SectionContext"
import LogoPet from "../files/LogoPet.png"

export const PageLogin = () =>{

const {loading} = useAuth()

const [isModalOpen, setIsmodalOpen] = useState(false);

const handleModal = () =>{
    setIsmodalOpen((prev) => !prev)
}

return(
<>
<div className="relative flex justify-center items-center min-h-screen w-full bg-custom-svg bg-cover"> 
{
loading && <Loading />}

<div className='md:py-8 px-6 md:px-4 w-full max-w-screen-xl lg:py-16'>

<div className="grid md:grid-cols-2 md:gap-6 mt-5">

<div className="flex justify-center md:justify-start items-center ps-4  h-48 md:h-64 relative">
<div className='w-32 h-32 md:w-64 md:h-64 flex justify-center rounded-full items-center bg-white overflow-hidden p-6 md:p-12'>
 <img src={LogoPet} alt='LogoPet' className='object-cover'/>
 
</div>
</div>

<div className='flex flex-col justify-center items-center'>
<FormLogin closeModal = {handleModal}/>

</div>

</div>
{ isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40">

        <ModalNewUser closeModal ={handleModal} />
    </div>

)
}

</div>
</div>

        </>
    )

}