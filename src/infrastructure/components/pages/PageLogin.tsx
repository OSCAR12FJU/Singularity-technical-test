import { FormLogin } from "../FormLogin"
import { Loading } from "../Loading"
import { useAuth } from "../SectionContext"
import LogoPet from "../files/LogoPet.png"

export const PageLogin = () =>{

const {loading} = useAuth()
return(
<>
<div className=" relative flex justify-center items-center md:min-h-screen bg-gray-100"> 
{
loading && <Loading />}

<div className='md:py-8 px-4 w-full max-w-screen-xl lg:py-16'>

<div className="grid md:grid-cols-2 md:gap-6 mt-5">

<div className="flex justify-center md:justify-start items-center ps-4  h-64 relative">
<div className='w-32 h-32 md:w-64 md:h-64 flex justify-center rounded-full items-center bg-white overflow-hidden p-6 md:p-12'>
 <img src={LogoPet} alt='LogoPet' className='object-cover'/>
 
</div>
</div>

<div className='flex flex-col justify-center items-center'>
<FormLogin />
</div>

</div>
</div>
</div>

        </>
    )

}