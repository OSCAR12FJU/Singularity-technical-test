import { NavItem } from "./NavItem"
import LogoPet from "../files/LogoPet.png"

export const Header = () =>{
    return(
<nav className="border-gray-200 ">
  <div className="flex items-center justify-between mx-auto p-4">
    <a className='w-12 h-12 md:w-18 md:h-18 flex justify-center rounded-full items-center bg-white overflow-hidden p-2 md:p-4'>
     <img src={LogoPet} alt='LogoPet' className='object-cover'/>
    </a>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-sm text-xl text-white flex flex-col p-4 md:p-0 mt-4 bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
        <NavItem link="#" title="Location"/>
        <NavItem link="#" title="Blog"/>
        <NavItem link="#" title="Services"/>
        <NavItem link="#" title="About Us"/>
        <NavItem link="#" title="Franchise with US"/>
      </ul>
    </div>
  </div>
</nav>


    )
}