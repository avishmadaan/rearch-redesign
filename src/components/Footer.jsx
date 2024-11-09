import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";


export function Footer() {


    return (

        <div className="bg-gray-100 py-10 ld:py-24 px-10 md:px-20 lg:px-32 border-t-[1px]">

            <div className="grid lg:grid-cols-5 gap-10 text-blue-800">

                <div className="col-span-2">
                <Link to={"/"}>
            <h1 className="font-bold cursor-pointer text-2xl">Re<span className="text-blue-500 " >Arck</span></h1>
            </Link>
                    <p className="mt-3 text-xs md:text-sm">ReArck specializes in digital innovation, providing custom application development, data science, and IT strategy consulting to enhance clients technology infrastructure and drive business transformation. </p>
                </div>

                <div className="text-sm">

                    <ul>
                        <li className="font-semibold text-md">EXPLORE</li>
                        <li className="pt-2 "><Link to={"/services"} >Services</Link></li>
                        <li className="pt-1"><Link to={"/contactus"} >Contact Us</Link></li>
                        <li className="pt-1"><Link to={"/aboutus"} >About Us</Link></li>
                  
                    </ul>
                 
                </div>

                <div className="text-sm">

<ul>
    <li className="font-semibold text-md">ABOUT US</li>
    <li className="pt-2"><Link to={"/services"} >Leadership</Link></li>
    <li className="pt-1"><Link to={"/services"} >Careers</Link></li>
    <li className="pt-1"><Link to={"/services"} >Contact Us</Link></li>
</ul>

</div>

<div className="Legal text-sm">

<ul>
    <li className="font-semibold text-md">ABOUT US</li>
    <li className="pt-2"><Link to={"/services"} >Cookie Settings</Link></li>

</ul>

</div>


            </div>

            <div className="social mt-10">
                <div className="flex gap-5 text-gray-400">
                    <Instagram />
                    <Linkedin />
                    <Youtube />

                </div>

                <p className="text-xs mt-2">Copyright @ 2022 ReArck. All rights reserved.</p>
            </div>

        </div>
    )
}