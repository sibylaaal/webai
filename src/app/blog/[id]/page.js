import Header from "@/app/components/header";



export default function Blog(){

    return(
        <>
    <Header/>  

<div className="py-20 bg-gray-900" >

       <main className="mt-10">
  <div
    className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
    style={{ height: "24em" }}
  >
    <div
      className="absolute left-0 bottom-0 w-full h-full z-10"
      style={{
        backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"
      }}
    />
    <img
      src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
      className="absolute left-0 top-0 w-full h-full z-0 object-cover"
    />
    <div className="p-4 absolute bottom-0 left-0 z-20">
      <a
        href="#"
        className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
      >
        Nutrition
      </a>
      <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
        Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
        massa et auctor.
      </h2>
      <div className="flex mt-3">
        <img
          src="https://randomuser.me/api/portraits/men/97.jpg"
          className="h-10 w-10 rounded-full mr-2 object-cover"
        />
        <div>
          <p className="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
          <p className="font-semibold text-gray-400 text-xs"> 14 Aug </p>
        </div>
      </div>
    </div>
  </div>
  <div className="px-4 lg:px-0 mt-12 text-white max-w-screen-md mx-auto text-lg leading-relaxed">
 
    <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
      Sportsman do offending supported extremity breakfast by listening.
      Decisively advantages nor expression unpleasing she led met. Estate was
      tended ten boy nearer seemed. As so seeing latter he should thirty whence.
      Steepest speaking up attended it as. Made neat an on be gave show snug
      tore.
    </div>
    <p className="pb-6">
      Exquisite cordially mr happiness of neglected distrusts. Boisterous
      impossible unaffected he me everything. Is fine loud deal an rent open
      give. Find upon and sent spot song son eyes. Do endeavor he differed
      carriage is learning my graceful. Feel plan know is he like on pure. See
      burst found sir met think hopes are marry among. Delightful remarkably new
      assistance saw literature mrs favourable.
    </p>
    <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
      Uneasy barton seeing remark happen his has
    </h2>
    <p className="pb-6">
      Guest it he tears aware as. Make my no cold of need. He been past in by my
      hard. Warmly thrown oh he common future. Otherwise concealed favourite
      frankness on be at dashwoods defective at. Sympathize interested
      simplicity at do projecting increasing terminated. As edward settle limits
      at in.
    </p>
    <p className="pb-6">
      Dashwood contempt on mr unlocked resolved provided of of. Stanhill
      wondered it it welcomed oh. Hundred no prudent he however smiling at an
      offence. If earnestly extremity he he propriety something admitting
      convinced ye. Pleasant in to although as if differed horrible. Mirth his
      quick its set front enjoy hoped had there. Who connection imprudence
      middletons too but increasing celebrated principles joy. Herself too
      improve gay winding ask expense are compact. New all paid few hard pure
      she.
    </p>

  </div>
</main>



</div>
 <section className="bg-gray-900 py-8 lg:py-16 antialiased">
  <div className="max-w-2xl mx-auto px-4">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900 text-white">
        Discussion (20)
      </h2>
    </div>
    <form className="mb-6">
      <div className="py-2 px-4 mb-4  rounded-lg rounded-t-lg border border-gray-200 bg-gray-800 border-gray-700">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={6}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none text-white placeholder-gray-400 bg-gray-800"
          placeholder="Write a comment..."
          required=""
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="inline-flex bg-black items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 focus:ring-primary-900 hover:bg-primary-800"
      >
        Post comment
      </button>
    </form>
    <article className="p-6 text-base  rounded-lg bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Michael Gough"
            />
            Michael Gough
          </p>
          <p className="text-sm text-gray-600 text-gray-400">
            <time pubdate="" dateTime="2022-02-08" title="February 8th, 2022">
              Feb. 8, 2022
            </time>
          </p>
        </div>
        <button
          id="dropdownComment1Button"
          data-dropdown-toggle="dropdownComment1"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 text-gray-400  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 bg-gray-900 hover:bg-gray-700 focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdownComment1"
          className="hidden z-10 w-36  rounded divide-y divide-gray-100 shadow bg-gray-700 divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Remove
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Report
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-gray-500 text-gray-400">
        Very straight-to-point article. Really worth time reading. Thank you!
        But tools are just the instruments for the UX designers. The knowledge
        of the design tools are as important as the creation of the design
        strategy.
      </p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline text-gray-400 font-medium"
        >
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </article>
    <article className="p-6 mb-3 ml-6 lg:ml-12 text-base  rounded-lg bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="Jese Leos"
            />
            Jese Leos
          </p>
          <p className="text-sm text-gray-600 text-gray-400">
            <time pubdate="" dateTime="2022-02-12" title="February 12th, 2022">
              Feb. 12, 2022
            </time>
          </p>
        </div>
        <button
          id="dropdownComment2Button"
          data-dropdown-toggle="dropdownComment2"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 text-gray-40  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 bg-gray-900 hover:bg-gray-700 focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdownComment2"
          className="hidden z-10 w-36  rounded divide-y divide-gray-100 shadow bg-gray-700 divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Remove
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Report
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-gray-500 text-gray-400">
        Much appreciated! Glad you liked it ☺️
      </p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline text-gray-400 font-medium"
        >
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </article>
    <article className="p-6 mb-3 text-base  border-t border-gray-200 border-gray-700 bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie Green"
            />
            Bonnie Green
          </p>
          <p className="text-sm text-gray-600 text-gray-400">
            <time pubdate="" dateTime="2022-03-12" title="March 12th, 2022">
              Mar. 12, 2022
            </time>
          </p>
        </div>
        <button
          id="dropdownComment3Button"
          data-dropdown-toggle="dropdownComment3"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 text-gray-40  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 bg-gray-900 hover:bg-gray-700 focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdownComment3"
          className="hidden z-10 w-36  rounded divide-y divide-gray-100 shadow bg-gray-700 divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Remove
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Report
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-gray-500 text-gray-400">
        The article covers the essentials, challenges, myths and stages the UX
        designer should consider while creating the design strategy.
      </p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline text-gray-400 font-medium"
        >
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </article>
    <article className="p-6 text-base  border-t border-gray-200 border-gray-700 bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              alt="Helene Engels"
            />
            Helene Engels
          </p>
          <p className="text-sm text-gray-600 text-gray-400">
            <time pubdate="" dateTime="2022-06-23" title="June 23rd, 2022">
              Jun. 23, 2022
            </time>
          </p>
        </div>
        <button
          id="dropdownComment4Button"
          data-dropdown-toggle="dropdownComment4"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 text-gray-40  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 bg-gray-900 hover:bg-gray-700 focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdownComment4"
          className="hidden z-10 w-36  rounded divide-y divide-gray-100 shadow bg-gray-700 divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Remove
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
              >
                Report
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-gray-500 text-gray-400">
        Thanks for sharing this. I do came from the Backend development and
        explored some of the tools to design my Side Projects.
      </p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline text-gray-400 font-medium"
        >
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </article>
  </div>
</section>


        
        
        </>
    )
}