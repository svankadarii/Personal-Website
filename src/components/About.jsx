import React from "react";
import MomentumMind from '../assets/MomentumMind.jpg';
import robotics from "../assets/10700x.jpg"

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white -mx-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>
        <div>
          <div className="text-base sm:text-xl mt-4 sm:mt-12 leading-relaxed font-light text-gray-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">MomentumMind</h2>
            <p className='mt-0.5 text-base'>
              May 2024 - August 2024
            </p>
            <div>
              <div>
                <p>Software development for a new clothing brand</p>
                <div className="flex flex-wrap space-x-2 mt-2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-500 hover:scale-105 ">Next.js</span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-500 hover:scale-105">React.js</span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-500 hover:scale-105">MongoDB</span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-500 hover:scale-105">Tailwind.css</span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-500 hover:scale-105">Vercel</span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-500 hover:scale-105">Stripe</span>
                </div>
              </div>
              <div>
              <img className="w-1/4 float-right" style={{ transform: 'translateY(-80%)' }} src={MomentumMind} alt="MomentumMind" />
              </div>
              <br></br>
              <br></br>
              <br></br>
              <hr className="w-2/3 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" style={{ transform: 'translateX(20%)' }}></hr>
            </div>
          </div>
        </div>
        <div>
          <div className="text-base sm:text-xl -mt-4 leading-relaxed font-light text-gray-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">aRTmech Robotics</h2>
            <p className='mt-0.5 text-base'>
              Sep 2022 - June 2023
            </p>
            <div>
              <div>
                <p>Founding Robotics Engineer of a competitive Robotics team</p>
                <div className="flex flex-wrap space-x-2 mt-2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-500 hover:scale-105">Python</span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-500 hover:scale-105">ROS</span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-500 hover:scale-105">C++</span>
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-purple-500 hover:scale-105">3rd place in Provincials x1</span>
                 
                </div>
              </div>
              <div>
              <img className="w-1/5 float-right" style={{ transform: 'translateY(-80%)' }} src={robotics} alt="MomentumMind" />
              </div>
              <br></br>
              <br></br>
              <br></br>
              {/* <hr className="w-2/3 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" style={{ transform: 'translateX(20%)' }}></hr> */}
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default About;
