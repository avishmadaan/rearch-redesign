import { Menu } from "lucide-react";
import { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import { OutlineButton } from "./ui-components/OutlineButton";

export function Navbar({className}) {

    const [isMenuOpen, setIsMenuOpen] =useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    

    return (
        <div className={`flex relative p-4 px-10 md:px-20 text-xl justify-between items-center ${className} border-b-[1px]` } >
            <Link to={"/"}>
            <h1 className="font-bold cursor-pointer">Re<span className="text-blue-500 " >Arck</span></h1>
            </Link>
            <div className=" md:hidden" >

                <Menu className="cursor-pointer" onClick={toggleMenu} />

            </div>
            {/* <ul
        className={`absolute md:static left-0 top-16  md:flex text-sm  md:opacity-100 duration-200
        ${isMenuOpen ? "flex flex-col bg-white p-4 shadow-md opacity-100 translate-y-0 " : "opacity-0 gap-5 -translate-y-full pointer-events-none "} w-full md:w-auto
        `}
      > */}

<ul
                className={`absolute md:static left-0 top-16 md:flex text-sm transition-opacity duration-200   md:opacity-100
                ${isMenuOpen ? "flex flex-col bg-white p-4 shadow-md opacity-100" : "opacity-0  gap-5 "}
                w-full md:w-auto z-10`}
            >

<Link to="/" onClick={()=> setIsMenuOpen(close)}>
<li className={`cursor-pointer p-2 hover:text-blue-500 hover:font-bold ${location.pathname === "/" ?"font-bold text-blue-500":"" }`}>Home</li></Link>


                <Link to="/services" onClick={()=> setIsMenuOpen(close)}>
        <li className={`cursor-pointer p-2 hover:text-blue-500 hover:font-bold ${location.pathname === "/services" ?"font-bold text-blue-500":"" }`}>Services</li></Link>
        <Link to="/aboutus" onClick={()=> setIsMenuOpen(close)}>
        <li className={`cursor-pointer p-2  hover:text-blue-500 hover:font-bold ${location.pathname === "/aboutus" ?"font-bold text-blue-500":"" }`}>About Us</li></Link>
        <Link to="/contactus" onClick={()=> setIsMenuOpen(close)}>
        <li className={`cursor-pointer p-2  hover:text-blue-500 hover:font-bold ${location.pathname === "/contactus" ?"font-bold text-blue-500":"" }`}>Contact Us</li></Link>
            </ul>


            <OutlineButton className={"md:block hidden"} >Start</OutlineButton>


        </div>
    )
}