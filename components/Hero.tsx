export function Hero({ hero }) {
  const taglines = hero.tagline.split(".")
  return (
    <div className="relative overflow-hidden h-[330px] lg:h-screen font-header">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" src={hero.backgroundImage.url} />
        <div
            className="absolute inset-0 bg-gray-400"
            style={{ "mixBlendMode": "multiply" }}
          ></div> 
      </div>
      {/* sm:text-8xl lg:text-8xl */}
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-center text-xl lg:text-4xl font-extrabold tracking-wider sm:tracking-tight font-header font-extrabold uppercase">
          <span className="block text-white lg:text-8xl ">A world free of</span>
        </h1>
        <div className="lg:hidden text-xl flex flex-col sm:flex-row sm:text-2xl">
          {taglines.map(item=><span className="text-white tracking-wider uppercase font-extrabold">{item}{"."}</span>)}
        </div>
        <div className="hidden lg:flex mt-6 h-[110px] w-[633px] bg-green-dark bg-opacity-90 items-center justify-center py-2 overflow-hidden rounded-md">
          <div className="h-full font-header text-yellow animate-slide px-2">
              {
                  taglines.map(item=>(
                    <div className="tracking-tight sm:text-8xl lg:text-8xl font-extrabold uppercase text-center">
                    {item}
                  </div>
                  ))
              }
          </div>
        </div>
      </div>
    </div>
  );
}
