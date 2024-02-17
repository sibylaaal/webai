import Image from "next/image";

export default function Home() {
  return (

    
<>




<header>
  <nav className="z-10 p-2 w-full absolute">
    <container>
      <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
        <input
          aria-hidden="true"
          type="checkbox"
          name="toggle_nav"
          id="toggle_nav"
          className="hidden peer"
        />
        <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
          <a
            href="#home"
            aria-label="logo"
            className="flex space-x-2 items-center"
          >
            <div aria-hidden="true" className="flex space-x-1">
              <div className="h-4 w-4 rounded-full bg-white dark:bg-white" />
              <div className="h-6 w-2 bg-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
           <img className="h-[70px] w-[70px] " src="/logo.png" />
            </span>
          </a>
          <div className="relative flex items-center lg:hidden max-h-10">
            <label
              role="button"
              htmlFor="toggle_nav"
              aria-label="humburger"
              id="hamburger"
              className="relative  p-6 -mr-6"
            >
              <div
                aria-hidden="true"
                id="line"
                className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
              />
              <div
                aria-hidden="true"
                id="line2"
                className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
              />
            </label>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
        />
        <div
          className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                      lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                      peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                      dark:shadow-none dark:bg-white dark:border-gray-700"
        >
          <div className="sm:text-white dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
            <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
              <li>
                <a
                  href="#features"
                  className="block  md:px-4 transition "
                >
                  <span>Features</span>
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="block  md:px-4 transition "
                >
                  <span>Solution</span>
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block  md:px-4 transition "
                >
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="block  md:px-4 transition "
                >
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 lg:mt-0">
            <a
              href="#"
              className="relative  flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-sm font-semibold text-black">
                Get Started
              </span>
            </a>
          </div>
        </div>
      </div>
    </container>
  </nav>
</header>
<div className="relative" id="home">
  <div
    aria-hidden="true"
    className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
  >
    <div className="blur-[106px] h-56 bg-gradient-to-br from-black to-white dark:from-blue-700" />
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
  </div>
  <container>
    <div className="relative pt-36 ml-auto">
      <div className="lg:w-2/3 text-center mx-auto">
        <h1 className="text-white dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
        Web.AI         <span className="text-white dark:text-white"> Your Gateway to Digital Innovation .</span>
        </h1>
        <p className="mt-8 text-gray-700 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt
          nam itaque sed eius modi error totam sit illum. Voluptas doloribus
          asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
        </p>
        <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
          <a
            href="#"
            className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative text-base font-semibold text-white">
              Get started
            </span>
          </a>
          <a
            href="#"
            className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-white sm:w-max"
          >
            <span className="relative text-base font-semibold text-primary dark:text-white">
              Learn more
            </span>
          </a>
        </div>
        <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-white sm:flex justify-between">
          <div className="text-left">
            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
              The lowest price
            </h6>
            <p className="mt-2 text-gray-500">Some text here</p>
          </div>
          <div className="text-left">
            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
              The fastest on the market
            </h6>
            <p className="mt-2 text-gray-500">Some text here</p>
          </div>
          <div className="text-left">
            <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
              The most loved
            </h6>
            <p className="mt-2 text-gray-500">Some text here</p>
          </div>
        </div>
      </div>
 
    </div>
  </container>
</div>
<div className="relative flex min-h-screen flex-col bg-black">
  <div className="min-h-28">
    <div className="mx-auto py-4">
      <h2 className="font-black text-9xl text-white uppercase">
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
              bodega x hoka
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
            <img className=" h-[300px] w-full bg-black" src="/pj3.png"/>
          </div>
        <span className="pt-4 grid grid-cols-6 gap-4">
          <span className="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
            cala x public
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
    <h2 className="font-black text-7xl text-white text-center uppercase my-16 hover:bg-white  hover:rounded-full hover:px-6">
      view select work
    </h2>
    <div className="flex justify-center align-center">
    <img className="h-[300px]" src="/gip.gif" />
</div>
  </div>
</div>
<div className="relative py-16">
  <div
    aria-hidden="true"
    className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
  >
    <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700" />
    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600" />
  </div>
  <container>
    <div className="relative">
      <div className="flex items-center justify-center -space-x-2">
   
      </div>
      <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
        <h1 className="text-center text-4xl font-bold text-white dark:text-white md:text-5xl">
          Get Started now
        </h1>
        <p className="text-center text-xl text-gray-600 dark:text-gray-300">
          Be part of millions people around the world using tailus in modern
          User Interfaces.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative text-base font-semibold text-white dark:text-dark">
              Get Started
            </span>
          </a>
          <a
            href="#"
            className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-white before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-white sm:w-max"
          >
            <span className="relative text-base font-semibold text-primary dark:text-white">
              More about
            </span>
          </a>
        </div>
      </div>
    </div>
  </container>
</div>





<div
  id="services"
  className="section relative pt-20 pb-8 md:pt-16 md:pb-0 "
>
  <div className="container xl:max-w-6xl mx-auto px-4">
    {/* Heading start */}
    <header className="text-center mx-auto mb-12 lg:px-20">
      <h2 className="text-2xl leading-normal mb-2 font-bold text-white">
        What We Do
      </h2>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 60"
        style={{ margin: "0 auto", height: 35 }}
        xmlSpace="preserve"
      >
        <circle
          cx="50.1"
          cy="30.4"
          r={5}
          className="stroke-primary"
          style={{ fill: "transparent", strokeWidth: 2, strokeMiterlimit: 10 }}
        />
        <line
          x1="55.1"
          y1="30.4"
          x2={100}
          y2="30.4"
          className="stroke-primary"
          style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
        />
        <line
          x1="45.1"
          y1="30.4"
          x2={0}
          y2="30.4"
          className="stroke-primary"
          style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
        />
      </svg>
      <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
        Save time managing advertising &amp; Content for your business.
      </p>
    </header>
    {/* End heading */}
    {/* row */}
    <div className="flex flex-wrap flex-row -mx-4 text-center">
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}
      >
        {/* service block */}
        <div className="py-8 px-12 mb-12 bg-white border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            SEO Services
          </h3>
          <p className="text-gray-500">
            This is a wider card with supporting text below as a natural
            content.
          </p>
        </div>
        {/* end service block */}
      </div>
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.1s",
          animationName: "fadeInUp"
        }}
      >
        {/* service block */}
        <div className="py-8 px-12 mb-12 bg-white border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              className="bi bi-chat-square-dots"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Social Content
          </h3>
          <p className="text-gray-500">
            This is a wider card with supporting text below as a natural
            content.
          </p>
        </div>
        {/* end service block */}
      </div>
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        {/* service block */}
        <div className="py-8 px-12 mb-12 bg-white border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              className="bi bi-badge-ad"
              viewBox="0 0 16 16"
            >
              <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
              <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
            </svg>
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Creative ads
          </h3>
          <p className="text-gray-500">
            This is a wider card with supporting text below as a natural
            content.
          </p>
        </div>
        {/* end service block */}
      </div>
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}
      >
        {/* service block */}
        <div className="py-8 px-12 mb-12 bg-white border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              className="bi bi-card-checklist"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Web App
          </h3>
          <p className="text-gray-500">
          Building Massive Web Apps with Ease
                    </p>
        </div>
        {/* end service block */}
      </div>
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.1s",
          animationName: "fadeInUp"
        }}
      >
        {/* service block */}
        <div className="py-8 px-12 mb-12 bg-white border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            {/* icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          Android  &amp; Ios
          </h3>
          <p className="text-gray-500 p-3">
           Building Native mobile apps
          </p>
        </div>
        {/* end service block */}
      </div>
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        {/* service block */}
        <div className="py-8 px-12 mb-12 bg-white border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              className="bi bi-funnel"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
            </svg>
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Optimize conversions
          </h3>
          <p className="text-gray-500 p-2">
          Optimizing Your data
          </p>
        </div>
        {/* end service block */}
      </div>
    </div>
    {/* end row */}
  </div>
</div>

<div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
  <a href="#">
    <div className="text-foreground text-8xl font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">

      Contact us
    </div>
  </a>
  <div className="relative mt-12 w-full max-w-lg sm:mt-10">
    <div
      className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
      bis_skin_checked={1}
    />
    <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
      <div className="flex flex-col p-6">
        <h3 className="text-xl font-semibold leading-6 tracking-tighter">
          Contact us
        </h3>
        <p className="mt-1.5 text-sm font-medium text-white/50">
     Contact Our team now !
        </p>
      </div>
      <div className="p-6 pt-0">
        <form>
          <div>
            <div>
              <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                <div className="flex justify-between">
                  <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                    Email
                  </label>
                  <div className="absolute right-3 translate-y-2 text-green-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                <div className="flex justify-between">
                  <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                    message
                  </label>
                </div>
                <div className="flex items-center">
              <textarea rows={3} cols={80} className="bg-black"></textarea>
                </div>
              </div>
            </div>
          </div>
   
          <div className="mt-4 flex items-center justify-end gap-x-2">
        
            <button
              className="font-semibold hover:bg-black  hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


<footer className="py-20 md:py-40">
  <container>
    <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
      <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
        <div className="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start">
          <ul className="list-inside list-disc space-y-8">
            <li>
              <a href="#" className="transition hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Guide
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Blocks
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-primary">
                Terms of Use
              </a>
            </li>
          </ul>
          <ul role="list" className="space-y-8">
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 transition hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>Github</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 transition hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 transition hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
                <span>YouTube</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 transition hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 transition hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                </svg>
                <span>Medium</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 transition hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className={5}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                </svg>
                <span>Pintrest</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 transition hover:text-primary"
              >
                <img
                  className="h-5 w-5"
                  width={32}
                  height={32}
                  src="https://c5.patreon.com/external/favicon/favicon.ico?v=69kMELnXkB"
                  alt="patreon icon"
                />
                <span>Patreon</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-3 transition hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left">
          <span className="block text-gray-500 dark:text-gray-400">
            We change the way UI components librairies are used
          </span>
          <span className="block text-gray-500 dark:text-gray-400">
            Tailus Blocks © <span id="year" />
          </span>
          <span className="flex justify-between text-gray-600 dark:text-white">
            <a href="#" className="font-medium">
              Terms of Use{" "}
            </a>
            <a href="#" className="font-medium">
              {" "}
              Privacy Policy
            </a>
          </span>
          <span className="block text-gray-500 dark:text-gray-400">
            Need help?{" "}
            <a href="#" className="font-semibold text-gray-600 dark:text-white">
              {" "}
              Contact Us
            </a>
          </span>
        </div>
      </div>
    </div>
  </container>
</footer>





</>
  );
}
