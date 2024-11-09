export function OutlineButton({
    children, className
}) {

return (
    <button className={`px-5 py-2 border-blue-500 border-2 rounded-full duration-200 ease-in   hover:bg-blue-500 hover:text-white transform  text-xs ${className}`}>{children}</button>

)

}