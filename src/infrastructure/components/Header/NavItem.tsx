interface NavItemProps{
    className?: string;
    link: string;
    title: string
}

export const NavItem:React.FC<NavItemProps> = ({className, link, title}) =>(
    <>
    <li>
    <a href={link} className={`block py-2 px-3 text-white rounded md:p-0 ${className}`} aria-current="page">{title}</a>
  </li>
    </>

)