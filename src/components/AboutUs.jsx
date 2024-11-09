import { ImageHead } from "./ImageHead";
import company_us from "../assets/company_us.jpg"

export function AboutUs() {

    return (

        <div>
           <ImageHead imgUrl={company_us}>About Us</ImageHead>

           <div className="  grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-5
           px-10 md:px-20 py-10 md:py-20">
            
            <img src="https://img1.wsimg.com/isteam/stock/DjaoYQd/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/fx-gs/rs=w:1920,m" className="rounded-xl" alt="aboutus" />

            <div className="content">

            <h1 className="md:text-3xl text-xl font-extrabold text-blue-800 " >Technocrats Who Love To   <span className="text-blue-500">Solve Tough Problems  </span></h1>
               
                <p className="pt-4 text-sm leading-7 text-gray-600">ReArck is a tight-knit bunch of creative, curious, and passionate technocrats.   ReArck is a pioneer in digitalization. Reimagining business technology with architecture thinking led to solutions that reduce cost, increase adoption, and elevate the customer experience. The complete strategy-to-solution expertise sets ReArck apart in helping customers achieve exponential outcomes across their logistics, supply chain, field, and plant operations. We make the complex simple. We are technocrats, innovators that have fun while working hard.   

 
                <br /><br />
We are based out of Texas, United States. We focus on delivering high value to clients through integrated, reliable, responsive, and cost-effective solutions. We have been a trusted partner to several small, medium and large companies, including Fortune 500 firms, enabling businesses to overcome critical business challenges.

We hold profound experience and expertise in providing solutions for complex IT implementation projects and integrating emerging technologies in a dynamic environment.


                </p>
            </div>
           </div>
        </div>
    )
}