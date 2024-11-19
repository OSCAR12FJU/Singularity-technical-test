import React from "react"

interface ServicesItemProps{
    children: React.ReactNode;
    text: string;
}

export const ServicesItem: React.FC<ServicesItemProps> = ({children, text} ) =>{
    return(
    <div className="flex flex-col items-center justify-center px-12 py-8 text-center shadow-card rounded-xl">
      {children}
      <p className="text-lg text-center text-gray-500">{text}</p>
    </div>
    )
}