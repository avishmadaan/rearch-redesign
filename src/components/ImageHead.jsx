export function ImageHead({ children, imgUrl }) {
  return (
    <div className="w-full relative flex justify-center items-center h-[180px] bg-no-repeat bg-cover bg-center overflow-hidden ">
      {/* Background image effect */}
      <div
        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* Overlay div */}
        <div className="absolute inset-0 bg-blue-800 opacity-70"></div>
      </div>

      {/* Text content */}
      <h1 className="md:text-3xl text-2xl font-bold text-white relative z-10">
        {children}
      </h1>
    </div>
  );
}
