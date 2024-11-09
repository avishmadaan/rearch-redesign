

export function RoundedFillButton({
    children, className
}) {

    return (
        <button className={`px-5 py-2 bg-blue-500 text-white rounded-full mt-6 duration-200 ease-in   hover:-translate-y-2 transform  ${className}`}>{children}</button>


    )
}