
import img_1 from "../assets/img_1.png"
import img_2 from "../assets/img_2.png"
import img_3 from "../assets/img_3.png"

export function InnovationPartner() {

    return (

        <div className="bg-white px-10 md:px-20 py-10 md:py-15 min-h-screen">

<h1 className="md:text-3xl text-xl font-extrabold text-blue-800 text-center" >Your <span className="text-blue-500">Digital Innovation  </span>Partner   </h1>

<div className="3pointer grid gap-10 mt-8 md:mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

    <div className=" rounded-xl  min-h-[20vh] bg-white shadow-md flex flex-col justify-center items-center hover:shadow-xl md:hover:-translate-y-4 duration-200 ease-in ">
        <img src={img_1} alt="Technology" />

        <div className="p-5 pb-10">
        <h1 className="text-xl font-semibold text-blue-800 text-center">Engineering & Technology</h1>

        <p className="mt-3 text-sm text-[#363636]">We help our customers accelerate their innovation roadmap with an agile approach, providing light touch assessments to transformational product development.</p>

        <ul className="text-sm text-[#363636] list-disc px-4">
            <li className="pt-3">Custom Application Development</li>
            <li className="pt-3">Application Modernization</li>
            <li className="pt-3">API Development</li>
            <li className="pt-3">AWS Cloud Services</li>
            <li className="pt-3">Enterprise Architecture</li>
        </ul>

        </div>

    </div>

    <div className=" rounded-xl  min-h-[20vh] bg-white shadow-md flex flex-col justify-center items-center hover:shadow-xl md:hover:-translate-y-4 duration-200 ease-in">
        <img className="" src={img_2} alt="Data-Science" />

        <div className="p-5 pb-10">
        <h1 className="text-xl font-semibold text-blue-800 text-center">Data Science</h1>
        <p className="mt-3 text-sm text-[#363636]">Data Science offerings allow customers to derive value, improve operational performance and tap into new market segments through advanced statistical analysis and automation.</p>

        <ul className="text-sm text-[#363636] list-disc px-4">
            <li className="pt-3">Demand Prediction</li>
            <li className="pt-3">Business Intelligence</li>
            <li className="pt-3">Cloud Analytics</li>
            <li className="pt-3">Data Mining</li>
            <li className="pt-3">Machine Learning</li>
        </ul>

        </div>

    </div>

    <div className=" rounded-xl   min-h-[20vh] bg-white shadow-md flex flex-col justify-center items-center hover:shadow-xl md:hover:-translate-y-4 duration-200 ease-in">
        <img src={img_3} alt="Data-Science" />

        <div className="p-5 pb-10">
        <h1 className="text-xl font-semibold text-blue-800 text-center">Assessment & Strategy</h1>
        <p className="mt-3 text-sm text-[#363636]">Digital technologies are proliferating at a rapid pace. We live in a multi-app ecosystem that can threaten internal organizations. Our experts help provide clarity and data to inform decision-making and define your strategy and roadmap.</p>

        <ul className="text-sm text-[#363636] list-disc px-4">
            <li className="pt-3">Business Intelligence</li>
            <li className="pt-3">Cloud Analytics</li>
            <li className="pt-3">Data Mining</li>
            <li className="pt-3">Machine Learning</li>
        </ul>

        </div>

    </div>

</div>

        </div>


    )
}