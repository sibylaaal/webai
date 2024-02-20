import { Container } from "postcss";
import Header from "../components/header";

export default function Blog(){
    return(
        <>
        <Header/>
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
            <span className="text-white dark:text-white"> Best Community Blogs</span>
        </h1>
       

      </div>
      <div tabIndex={0} className="focus:outline-none">
  {/* Remove py-8 */}
  <div className="mx-auto container py-8">
    <div className="flex flex-wrap items-center lg:justify-between justify-center">
      {/* Card 1 */}
      <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        <div>
          <img
            alt="person capturing an image"
            src="https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png"
            tabIndex={0}
            className="focus:outline-none w-full "
          />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tabIndex={0}
                className="focus:outline-none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-yellow-700"
              >
                Featured
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2
                tabIndex={0}
                className="focus:outline-none text-lg font-semibold"
              >
                iphone XS
              </h2>
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-gray-600 pl-5"
              >
                4 days ago
              </p>
            </div>
            <p
              tabIndex={0}
              className="focus:outline-none text-xs text-gray-600 mt-2"
            >
              The Apple iPhone XS is available in 3 colors with 64GB memory.
              Shoot amazing videos
            </p>
            <div className="flex mt-4">
              <div>
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  12 months warranty
                </p>
              </div>
              <div className="pl-2">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xs font-semibold"
              >
                Bay Area, San Francisco
              </h2>
              <h3
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xl font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card 1 Ends */}
      {/* Card 2 */}
      <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        <div>
          <img
            alt="person capturing an image"
            src="https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png"
            tabIndex={0}
            className="focus:outline-none w-full "
          />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tabIndex={0}
                className="focus:outline-none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-yellow-700"
              >
                Featured
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2
                tabIndex={0}
                className="focus:outline-none text-lg font-semibold"
              >
                iphone XS
              </h2>
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-gray-600 pl-5"
              >
                4 days ago
              </p>
            </div>
            <p
              tabIndex={0}
              className="focus:outline-none text-xs text-gray-600 mt-2"
            >
              The Apple iPhone XS is available in 3 colors with 64GB memory.
              Shoot amazing videos
            </p>
            <div className="flex mt-4">
              <div>
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  12 months warranty
                </p>
              </div>
              <div className="pl-2">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xs font-semibold"
              >
                Bay Area, San Francisco
              </h2>
              <h3
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xl font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 Ends */}
      {/* Card 3  */}
      <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        <div>
          <img
            alt="person capturing an image"
            src="https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png"
            tabIndex={0}
            className="focus:outline-none w-full "
          />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tabIndex={0}
                className="focus:outline-none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-yellow-700"
              >
                Featured
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2
                tabIndex={0}
                className="focus:outline-none text-lg font-semibold"
              >
                iphone XS
              </h2>
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-gray-600 pl-5"
              >
                4 days ago
              </p>
            </div>
            <p
              tabIndex={0}
              className="focus:outline-none text-xs text-gray-600 mt-2"
            >
              The Apple iPhone XS is available in 3 colors with 64GB memory.
              Shoot amazing videos
            </p>
            <div className="flex mt-4">
              <div>
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  12 months warranty
                </p>
              </div>
              <div className="pl-2">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xs font-semibold"
              >
                Bay Area, San Francisco
              </h2>
              <h3
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xl font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 Ends */}
      {/* Card 4  */}
      <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        <div>
          <img
            alt="person capturing an image"
            src="https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png"
            tabIndex={0}
            className="focus:outline-none w-full "
          />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tabIndex={0}
                className="focus:outline-none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-yellow-700"
              >
                Featured
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2
                tabIndex={0}
                className="focus:outline-none text-lg font-semibold"
              >
                iphone XS
              </h2>
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-gray-600 pl-5"
              >
                4 days ago
              </p>
            </div>
            <p
              tabIndex={0}
              className="focus:outline-none text-xs text-gray-600 mt-2"
            >
              The Apple iPhone XS is available in 3 colors with 64GB memory.
              Shoot amazing videos
            </p>
            <div className="flex mt-4">
              <div>
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  12 months warranty
                </p>
              </div>
              <div className="pl-2">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xs font-semibold"
              >
                Bay Area, San Francisco
              </h2>
              <h3
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xl font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card 4 Ends */}
    </div>
    <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
      {/* Card 1 */}
      <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        <div>
          <img
            alt="girl texting"
            src="https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png"
            className="focus:outline-none w-full "
          />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tabIndex={0}
                className="focus:outline-none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-yellow-700"
              >
                Featured
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2
                tabIndex={0}
                className="focus:outline-none text-lg font-semibold"
              >
                iphone XS
              </h2>
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-gray-600 pl-5"
              >
                4 days ago
              </p>
            </div>
            <p
              tabIndex={0}
              className="focus:outline-none text-xs text-gray-600 mt-2"
            >
              The Apple iPhone XS is available in 3 colors with 64GB memory.
              Shoot amazing videos
            </p>
            <div className="flex mt-4">
              <div>
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  12 months warranty
                </p>
              </div>
              <div className="pl-2">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xs font-semibold"
              >
                Bay Area, San Francisco
              </h2>
              <h3
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xl font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card 1 Ends */}
      {/* Card 2 */}
      <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        <div>
          <img
            alt="girl texting"
            src="https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png"
            className="focus:outline-none w-full "
          />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tabIndex={0}
                className="focus:outline-none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-yellow-700"
              >
                Featured
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2
                tabIndex={0}
                className="focus:outline-none text-lg font-semibold"
              >
                iphone XS
              </h2>
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-gray-600 pl-5"
              >
                4 days ago
              </p>
            </div>
            <p
              tabIndex={0}
              className="focus:outline-none text-xs text-gray-600 mt-2"
            >
              The Apple iPhone XS is available in 3 colors with 64GB memory.
              Shoot amazing videos
            </p>
            <div className="flex mt-4">
              <div>
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  12 months warranty
                </p>
              </div>
              <div className="pl-2">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xs font-semibold"
              >
                Bay Area, San Francisco
              </h2>
              <h3
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xl font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card 2 Ends */}
      {/* Card 3  */}
      <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        <div>
          <img
            alt="girl texting"
            src="https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png"
            className="focus:outline-none w-full "
          />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tabIndex={0}
                className="focus:outline-none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-yellow-700"
              >
                Featured
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2
                tabIndex={0}
                className="focus:outline-none text-lg font-semibold"
              >
                iphone XS
              </h2>
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-gray-600 pl-5"
              >
                4 days ago
              </p>
            </div>
            <p
              tabIndex={0}
              className="focus:outline-none text-xs text-gray-600 mt-2"
            >
              The Apple iPhone XS is available in 3 colors with 64GB memory.
              Shoot amazing videos
            </p>
            <div className="flex mt-4">
              <div>
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  12 months warranty
                </p>
              </div>
              <div className="pl-2">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xs font-semibold"
              >
                Bay Area, San Francisco
              </h2>
              <h3
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xl font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card 3 Ends */}
      {/* Card 4  */}
      <div tabIndex={0} className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
        <div>
          <img
            alt="girl texting"
            src="https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png"
            className="focus:outline-none w-full "
          />
        </div>
        <div className="bg-white">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                tabIndex={0}
                className="focus:outline-none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-yellow-700"
              >
                Featured
              </p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2
                tabIndex={0}
                className="focus:outline-none text-lg font-semibold"
              >
                iphone XS
              </h2>
              <p
                tabIndex={0}
                className="focus:outline-none text-xs text-gray-600 pl-5"
              >
                4 days ago
              </p>
            </div>
            <p
              tabIndex={0}
              className="focus:outline-none text-xs text-gray-600 mt-2"
            >
              The Apple iPhone XS is available in 3 colors with 64GB memory.
              Shoot amazing videos
            </p>
            <div className="flex mt-4">
              <div>
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  12 months warranty
                </p>
              </div>
              <div className="pl-2">
                <p
                  tabIndex={0}
                  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                >
                  Complete box
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <h2
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xs font-semibold"
              >
                Bay Area, San Francisco
              </h2>
              <h3
                tabIndex={0}
                className="focus:outline-none text-indigo-700 text-xl font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Card 4 Ends */}
    </div>
  </div>
  {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
</div>
<div className="flex items-center justify-center ">
  <div className="flex justify-center items-center space-x-4">
    <div className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm">
      &lt;
    </div>
    <div className="text-slate-500">1 / 24</div>
    <div className="border rounded-md bg-gray-100 px-2 py-1 text-3xl leading-6 text-slate-400 transition hover:bg-gray-200 hover:text-slate-500 cursor-pointer shadow-sm">
      &gt;
    </div>
  </div>
</div>

 
    </div>
  </container>

</div>
        
        
        </>
    )
}