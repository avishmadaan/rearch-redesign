import { ImageHead } from "./ImageHead";
import contact_us from "../assets/contact_us.jpg";
import { useForm } from "react-hook-form";

export function ContactUs() {
    const { register, handleSubmit, formState: { errors, isSubmitting, isValid, isSubmitSuccessful  }, reset } = useForm();

    const setDelay = (d) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, d * 1000);
        });
    };

    const onSubmit = async data => {
        await setDelay(4);

        console.log(data);
        reset();
    };

    return (
        <div>
            <ImageHead imgUrl={contact_us}>Contact Us</ImageHead>
            
            <div className="flex flex-col justify-center items-center px-10 md:px-20 py-10 md:py-20">
                <div className="form bg-gray-100  p-5 md:p-10 w-[70vw]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className="border-[1px] border-gray-200 rounded-[5px] w-full py-2 px-3" {...register("name", { required: "Name is required", minLength: { value: 3, message: "Min Length is 3" } })} placeholder="Name" />
                        {errors.name && <span className="text-red-500 text-sm"> {errors.name.message}</span>}
                        <br />

                        <input type="text" className="mt-3 border-[1px] border-gray-200 rounded-[5px] w-full py-2 px-3" {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Please enter a valid email address" } })} placeholder="Email Address" />
                        {errors.email && <span className="text-red-500 text-sm"> {errors.email.message}</span>}
                        <br />

                        <textarea rows="5" className="mt-3 border-[1px] border-gray-200 rounded-[5px] w-full py-2 px-3" {...register("message", { required: "Message is Required", minLength: { value: 5, message: "Write at least 5 characters" } })} placeholder="Message" />
                        {errors.message && <span className="text-red-500 text-sm"> {errors.message.message}</span>}
                        <br />

                        <button
                            disabled={ isSubmitting}
                            type="submit"
                            className={`px-5 py-2 bg-blue-500 text-white rounded-full mt-3 duration-200 ease-in hover:-translate-y-2 transform flex items-center justify-center ${!isValid? "bg-gray-400":""}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="loader mr-2"></div>
                                    Submitting...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </button>

                        {isSubmitSuccessful && <p className="text-xs inline-block mt-3 text-green-800">Your Request Is Submitted ✅</p> }
                    </form>
                </div>
            </div>
        </div>
    );
}
