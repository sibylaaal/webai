



export default function Featured(){
    return(
        <>
        
        
        <section id="projects" className="relative flex min-h-screen flex-col bg-black">
  <div className="min-h-28">
    <div className="mx-auto py-4">
      <h2 className="font-black text-5xl sm:text-9xl text-white uppercase">
        featured work
      </h2>
      <div className="gap-6 mt-8 mx-4 md:flex">
        <div className="md:w-1/2">
          <div className="wrap-video">
            <img className=" h-[300px] w-full bg-black" src="/pj1.jpeg"/>
          </div>
          <span className="pt-4 grid grid-cols-6 gap-4">
            <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
              Web App using React js
            </span>
            <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
              <span className="">fashion/retail</span>
            </span>
          </span>
          <span className="block text-slate-400 text-xs uppercase font-mono">
            the trail less taken
          </span>
        </div>
        <div className="md:w-1/2">
        <div className="wrap-video">
            <img className="  w-full bg-black" src="/pj2.png"/>
          </div>
          <span className="pt-4 grid grid-cols-6 gap-4">
            <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">

  Shop using Next.js
            </span>
            <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
              <span className="">music video</span>
            </span>
          </span>
          <span className="block text-slate-400 text-xs uppercase font-mono">
            the world at large
          </span>
        </div>
      </div>
    </div>
    <div className="gap-6 mt-8 mx-4 md:flex">
      <div className="md:w-1/2">
      <div className="wrap-video">
            <img className="  w-full bg-black" src="/pj4.jpeg"/>
          </div>
        <span className="pt-4 grid grid-cols-6 gap-4">
          <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
            React Dashboard
          </span>
          <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
            <span className="">music video</span>
          </span>
        </span>
        <span className="block text-slate-400 text-xs uppercase font-mono">
          grandma cabbage
        </span>
      </div>
      <div className="md:w-1/2">
      <div className="wrap-video">
            <img className=" h-[280px] w-full bg-black" src="/pj3.png"/>
          </div>
        <span className="pt-4 grid grid-cols-6 gap-4">
          <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
            Lravel s' Api
          </span>
          <span className="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
            <span className="">music video</span>
          </span>
        </span>
        <span className="block text-slate-400 text-xs uppercase font-mono">
          transportation the perfect pants
        </span>
      </div>
    </div>
  
    <div className="flex justify-center align-center">
    <img className="h-[300px]" src="/gip.gif" />
</div>
  </div>
</section>
        
        </>
    )
}