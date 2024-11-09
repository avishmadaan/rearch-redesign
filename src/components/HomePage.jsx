import { useEffect, useState } from "react";

import main_bg_4 from "../assets/main_bg_4.png"
import { CredibilityBar } from "./CredibilityBar"
import { InnovationPartner } from "./InnovationPartner"
import { ItStrategy } from "./ItStrategy";
import { RoundedFillButton } from "./ui-components/RoundedFillButton";
import { Link } from "react-router-dom";

export function HomePage() {

    const variables = ["IT Foundation", "Application", "Services"];

    const [typingVar, setTypingVar] =  useState(" ");

    useEffect(() => {
        let displayedPart = "";
        let selectedWordIndex =0;
        let index =0;
        let typingSpeed = 300;

       function addVar() {
        

        if(displayedPart.length<variables[selectedWordIndex].length) {
            const letter = variables[selectedWordIndex][index];
            displayedPart = displayedPart +letter
            setTypingVar(prev => prev + letter);
            index++;
        }
        else {
            

            displayedPart = "";
            index=0;
            setTypingVar(" ");
          selectedWordIndex++;
            selectedWordIndex = selectedWordIndex % variables.length;

        }


        }

        const intervalId = setInterval(addVar, typingSpeed)

        return () => { clearInterval(intervalId)}

    }, [])

    return (

        <div>
            <div className={` py-14 lg:py-0 lg:h-[110vh] px-3 flex flex-col overflow-hidden
   bg-center lg:bg-cover bg-no-repeat items-c m `} style={{backgroundImage:`url(${main_bg_4})`, backgroundPosition:"center top -80px" }} >



            <main className="flex  justify-center flex-col  items-center  lg:mt-14 bg-white bg-opacity-5 backdrop-blur-sm  py-6 ">
                <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 text-center" >Re: Architect Your  
              <div className="md:min-h-20 min-h-16 mt-1"> <span className="text-blue-500 ">  {typingVar} </span> </div></h1>
                <p className="w-full max-w-lg text-center mt-1 "> We combine our global consulting expertise with a tailored delivery approach unique to each client’s needs.</p>

                <Link to="contactus"><RoundedFillButton className="">Get Started</RoundedFillButton></Link>
                
            </main>

           



        </div>

        <CredibilityBar /> 
        <InnovationPartner />
        <ItStrategy />

        </div>
        
    )
}

