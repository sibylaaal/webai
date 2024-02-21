import Link from "next/link";



export default function Blogcompo(){
    return(
        <>



<section className="flex flex-col p-10 justify-center antialiased bg-gray-900 text-gray-200 min-h-screen">
 
 <div className="flex pt-20 pl-20  rounded-full bg-[#0d1829] px-2 w-full max-w-[600px]">
<button className="self-center flex p-1 cursor-pointer bg-[#0d1829]">
{" "}
<svg
width="30px"
height="30px"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g id="SVGRepo_bgCarrier" strokeWidth={0} />
<g
 id="SVGRepo_tracerCarrier"
 strokeLinecap="round"
 strokeLinejoin="round"
/>
<g id="SVGRepo_iconCarrier">
 {" "}
 <path
   fillRule="evenodd"
   clipRule="evenodd"
   d="M11.567 9.8895C12.2495 8.90124 12.114 7.5637 11.247 6.7325C10.3679 5.88806 9.02339 5.75928 7.99998 6.4215C7.57983 6.69308 7.25013 7.0837 7.05298 7.5435C6.85867 7.99881 6.80774 8.50252 6.90698 8.9875C7.00665 9.47472 7.25054 9.92071 7.60698 10.2675C7.97021 10.6186 8.42786 10.8563 8.92398 10.9515C9.42353 11.049 9.94062 11.0001 10.413 10.8105C10.8798 10.6237 11.2812 10.3033 11.567 9.8895Z"
   stroke="white"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
 />{" "}
 <path
   fillRule="evenodd"
   clipRule="evenodd"
   d="M12.433 17.8895C11.7504 16.9012 11.886 15.5637 12.753 14.7325C13.6321 13.8881 14.9766 13.7593 16 14.4215C16.4202 14.6931 16.7498 15.0837 16.947 15.5435C17.1413 15.9988 17.1922 16.5025 17.093 16.9875C16.9933 17.4747 16.7494 17.9207 16.393 18.2675C16.0298 18.6186 15.5721 18.8563 15.076 18.9515C14.5773 19.0481 14.0614 18.9988 13.59 18.8095C13.1222 18.6234 12.7197 18.3034 12.433 17.8895V17.8895Z"
   stroke="white"
   strokeWidth="1.5"
   strokeLinecap="round"
   strokeLinejoin="round"
 />{" "}
 <path
   d="M12 7.75049C11.5858 7.75049 11.25 8.08627 11.25 8.50049C11.25 8.9147 11.5858 9.25049 12 9.25049V7.75049ZM19 9.25049C19.4142 9.25049 19.75 8.9147 19.75 8.50049C19.75 8.08627 19.4142 7.75049 19 7.75049V9.25049ZM6.857 9.25049C7.27121 9.25049 7.607 8.9147 7.607 8.50049C7.607 8.08627 7.27121 7.75049 6.857 7.75049V9.25049ZM5 7.75049C4.58579 7.75049 4.25 8.08627 4.25 8.50049C4.25 8.9147 4.58579 9.25049 5 9.25049V7.75049ZM12 17.2505C12.4142 17.2505 12.75 16.9147 12.75 16.5005C12.75 16.0863 12.4142 15.7505 12 15.7505V17.2505ZM5 15.7505C4.58579 15.7505 4.25 16.0863 4.25 16.5005C4.25 16.9147 4.58579 17.2505 5 17.2505V15.7505ZM17.143 15.7505C16.7288 15.7505 16.393 16.0863 16.393 16.5005C16.393 16.9147 16.7288 17.2505 17.143 17.2505V15.7505ZM19 17.2505C19.4142 17.2505 19.75 16.9147 19.75 16.5005C19.75 16.0863 19.4142 15.7505 19 15.7505V17.2505ZM12 9.25049H19V7.75049H12V9.25049ZM6.857 7.75049H5V9.25049H6.857V7.75049ZM12 15.7505H5V17.2505H12V15.7505ZM17.143 17.2505H19V15.7505H17.143V17.2505Z"
   fill="white"
 />{" "}
</g>
</svg>
</button>
<input
type="text"
className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
placeholder="Search name movie or select options"
/>
<button type="submit" className="relative p-2 bg-[#0d1829] rounded-full">
<svg
width="30px"
height="30px"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g id="SVGRepo_bgCarrier" strokeWidth={0} />
<g
 id="SVGRepo_tracerCarrier"
 strokeLinecap="round"
 strokeLinejoin="round"
/>
<g id="SVGRepo_iconCarrier">
 {" "}
 <path
   d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
   stroke="#999"
   strokeWidth={2}
   strokeLinecap="round"
   strokeLinejoin="round"
 />{" "}
</g>
</svg>
</button>
</div>

<div className="max-w-6xl mx-auto p-10  sm:px-6 h-full">
{/* Blog post */}
<Link href={`/blog/${1}`} className="max-w-sm  py-10 mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
<a className="relative block group" href="#0">
 <div
   className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
   aria-hidden="true"
 />
 <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
   <img
     className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
     src="https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
     width={540}
     height={303}
     alt="Blog post"
   />
 </figure>
</a>
<div>
 <header>
   <div className="mb-3">
     <ul className="flex flex-wrap text-xs font-medium -m-1">
       <li className="m-1">
         <a
           className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
           href="#0"
         >
           Product
         </a>
       </li>
       <li className="m-1">
         <a
           className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
           href="#0"
         >
           Engineering
         </a>
       </li>
     </ul>
   </div>
   <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
     <a
       className="hover:text-gray-100 transition duration-150 ease-in-out"
       href="#0"
     >
       Designing a functional workflow at home.
     </a>
   </h3>
 </header>
 <p className="text-lg text-gray-400 flex-grow">
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
   dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
 </p>
 <footer className="flex items-center mt-4">
   <a href="#0">
     <img
       className="rounded-full flex-shrink-0 mr-4"
       src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
       width={40}
       height={40}
       alt="Author 04"
     />
   </a>
   <div>
     <a
       className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
       href="#0"
     >
       Chris Solerieu
     </a>
     <span className="text-gray-700"> - </span>
     <span className="text-gray-500">Jan 19, 2020</span>
   </div>
 </footer>
</div>
</Link>
<Link href={`/blog/${2}`} className="max-w-sm py-10  mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
<a className="relative block group" href="#0">
 <div
   className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
   aria-hidden="true"
 />
 <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
   <img
     className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
     src="https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg"
     width={540}
     height={303}
     alt="Blog post"
   />
 </figure>
</a>
<div>
 <header>
   <div className="mb-3">
     <ul className="flex flex-wrap text-xs font-medium -m-1">
       <li className="m-1">
         <a
           className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
           href="#0"
         >
           Product
         </a>
       </li>
       <li className="m-1">
         <a
           className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
           href="#0"
         >
           Engineering
         </a>
       </li>
     </ul>
   </div>
   <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
     <a
       className="hover:text-gray-100 transition duration-150 ease-in-out"
       href="#0"
     >
       Designing a functional workflow at home.
     </a>
   </h3>
 </header>
 <p className="text-lg text-gray-400 flex-grow">
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
   dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
 </p>
 <footer className="flex items-center mt-4">
   <a href="#0">
     <img
       className="rounded-full flex-shrink-0 mr-4"
       src="https://preview.cruip.com/open-pro/images/news-author-04.jpg"
       width={40}
       height={40}
       alt="Author 04"
     />
   </a>
   <div>
     <a
       className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
       href="#0"
     >
       Chris Solerieu
     </a>
     <span className="text-gray-700"> - </span>
     <span className="text-gray-500">Jan 19, 2020</span>
   </div>
 </footer>
</div>
</Link>
</div>
<>

<div className="flex justify-center">
{/* Previous Button */}
<a
href="#"
className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
>
<svg
 className="w-3.5 h-3.5 me-2 rtl:rotate-180"
 aria-hidden="true"
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 14 10"
>
 <path
   stroke="currentColor"
   strokeLinecap="round"
   strokeLinejoin="round"
   strokeWidth={2}
   d="M13 5H1m0 0 4 4M1 5l4-4"
 />
</svg>
Previous
</a>
<a
href="#"
className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
>
Next
<svg
 className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
 aria-hidden="true"
 xmlns="http://www.w3.org/2000/svg"
 fill="none"
 viewBox="0 0 14 10"
>
 <path
   stroke="currentColor"
   strokeLinecap="round"
   strokeLinejoin="round"
   strokeWidth={2}
   d="M1 5h12m0 0L9 1m4 4L9 9"
 />
</svg>
</a>
</div>
</>

</section>
        </>
    )
}