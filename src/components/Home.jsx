import React from "react";
import headshot from "../assets/headshot.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
   return (
      <div
         name="home"
         className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
      >
         <div className="max-w-screen-lg mx-auto flex flex-col items-center  h-full px-4 md:flex-row md:space-x-10">
            <div className="flex flex-col justify-center h-full">
            <h2 className="text-sm md:text-7xl font-bold text-white">
                  Hi I'm Sai Vankadari
               </h2>
               <p className="text-white py-2 sm:py-4 max-w-md">
                  Second Year Software Engineering Student at the Univerisity of Western Ontario
               </p>

               <div>
                  <Link
                     to="portfolio"
                     smooth
                     duration={500}
                     className="group text-white w-fit px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                  >
                     Portfolio
                     <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight className="ml-1" size={25} />
                     </span>
                  </Link>
               </div>
            </div>
            <div>
               <img
                  src={headshot}
                  alt="my profile"
                  className="rounded-2xl w-3/5 float-right  transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
                  loading="lazy"
               />
            </div>   
         </div>
      </div>
   );
};

export default Home;
