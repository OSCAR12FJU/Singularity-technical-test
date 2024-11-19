import Chihuahua from "../files/Chihuahua.png";

export const MakeFetch = () =>{
    return(
        <>
        {/* <div className="relative flex justify-center items-center md:min-h-screen bg-[#F3F6FB] ">

     <div className='md:py-8 px-4 w-full max-w-screen-lg lg:py-16'>

  <div className="grid md:grid-cols-5 md:gap-0 mt-5 bg-[#4082FC]">

  <div className="flex justify-center col-span-2 md:justify-start items-center  relative">
  <div className='flex justify-start items-start p-4'>
   <img src={Chihuahua} alt='LogoPet' className='object-cover w-full'/>
  </div>
  </div>

  <div className='flex flex-col justify-center items-start text-start p-4 leading-normal col-span-3'>
  <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h2>
        <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </div>

  </div>
  </div>
 */}
        {/* <div className="flex justify-center items-center bg-[#4082FC] border border-gray-200 max-w-screen mx-auto rounded-lg shadow flex-row">

        <div className="flex justify-center items-center">
        <img className="object-cover rounded-t-lg h-96  md:rounded-none md:rounded-s-lg" src={Chihuahua} alt="" />

        </div>

    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
        <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
    </div> */}
        {/* </div> */}
        <section className="py-32 flex justify-center items-center">

  <div className="container">
    <div className="grid items-center gap-8 grid-cols-1 lg:grid-cols-3 lg:gap-2 bg-[#3F7FFA] py-8 md:py-6 rounded-[2rem] px-6 md:px-0">
        
      <div className="col-span-1 flex justify-center items-center">
      <img src={Chihuahua} alt="placeholder hero"
        className="max-h-64 max-w-[22rem] md:max-h-96 w-full rounded-md object-cover" />
      </div>

      <div className="flex flex-col items-start lg:text-left col-span-2 pr-4">
        <h2 className="text-4xl font-bold text-[#FFE530] md:text-5xl mb-6">Make Fetch! Happen</h2>
        <p className="mb-8 text-xl md:text-3xl text-white leading-normal">
          If you love pets and want exciting work, apply to be a Fetch!
          Pet Care Provider! We train every team member and provide ongoing support to help you ger the most from your
        </p>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
          <button
            className="inline-flex items-center justify-center text-xl font-bold bg-white h-11 rounded-full py-8 px-8 w-full text-[#FE6B49] sm:w-auto">
                Join Now</button>
        </div>
      </div>


    </div>
  </div>
</section>


</>
    )
}