import { ArrowBigRight, Menu, MenuIcon, X } from "lucide-react"
import ghl from "../assets/ghl.png"
import { useState } from "react"
import { CgClose } from "react-icons/cg";

export function Navbarv2( ) {

    const [open, setOpen] =  useState(false);

    function handleMenu() {

    }

    return (
        <>
    <div className="flex justify-between bg-blue-300 h-16 items-center px-10">
       <div className="logo">
        <img className="max-w-[100px] object-cover" src={ghl} alt="logo" />
       </div>

      
       


        <ul className= {`flex flex-col lg:flex-row gap-10  menu lg:static absolute bg-gray-100 lg:bg-transparent w-full lg:w-auto p-4 left-0 top-0  ease-in-out transform  ${open?"translate-x-0    duration-300" : "-translate-x-full lg:translate-x-0 duration-0"} `}>

        <div className="close float-right lg:hidden absolute right-8" onClick={() => setOpen(!open)}>
        <X />
       </div>
            <li className="text-sm">Home</li>
            <li className="text-sm mt-3 lg:mt-0">About</li>
            <li className="text-sm mt-3 lg:mt-0">Contact</li>
            <li className="text-sm mt-3 lg:mt-0">Services</li>
        </ul>


       <div className="button bg-gray-400 px-2 py-1 rounded-md hidden lg:block">
        <button className="text-sm">Contact Us</button>
       </div>

       <div className="handburger lg:hidden" onClick={() => setOpen(!open)}>
        <Menu />
       </div>
    </div>

    </>
    )
}