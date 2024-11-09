import { RoundedFillButton } from "./ui-components/RoundedFillButton";

import { Link } from "react-router-dom";


export function PreFooter() {

    const handleScrollToTop =() => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return (
        <div className="flex flex-col justify-center items-center py-10 bg-blue-500 text-white h-60">

            <h3 className="text:xl md:text-3xl text-center font-semibold">We want to help you create something extraordinary</h3>


            <Link to="/contactus" onClick={handleScrollToTop}>
            <RoundedFillButton className="bg-white text-[#0250FA] text-sm">Get Started</RoundedFillButton>
            </Link>



        </div>
    )
}