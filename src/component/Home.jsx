import React from 'react'

import pic from "../../public/image.png"

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home"
       className="max-w-screen-2xl container mx-auto px-4 my-20">
        <div className="flex flex-col md:flex-row">

          {/* Image Section - shows first on mobile, right side on desktop */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end md:w-1/2 md:mt-24">
            <img
              src={pic}
              className="rounded-full w-40 h-40 md:w-[450px] md:h-[450px] object-cover"
              alt="Saurabh Web Developer"
            />
          </div>

          {/* Left Section - text, shows second on mobile, left side on desktop */}
          <div className="order-2 md:order-1 md:w-1/2 mt-6 md:mt-24 space-x-2">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>

              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a passionate B.Tech student and aspiring full‑stack developer, focused on building responsive, user‑friendly web applications. With hands‑on experience in React, Tailwind CSS, and Java, I love turning ideas into functional digital solutions.
              Dedicated to crafting clean code and modern designs, my goal is to deliver impactful web experiences that combine creativity with technical precision.
              As a web developer in training, I am committed to learning, experimenting, and building projects that showcase both technical skills and creative problem‑solving. My vision is to grow into a professional who designs solutions that truly make a difference.
            </p>
            <br />

            {/* Social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-4">
                  <li>
                    <a href="https://www.facebook.com/" targets="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                      </a>
                      </li>
                  <li>
                    <a href="https://www.linkedin.com/" targets="_blank">
                  <FaLinkedinIn className="text-2xl cursor-pointer" />
                  </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" targets="_blank">
                  <FaYoutube className="text-2xl cursor-pointer" />
                  </a>
                  </li>
                  <li>
                    <a href="https://t.me/" targets="_blank">
                    <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                    </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className=" font-bold">Currently working on</h1>
                <div className="flex space-x-4 text-3xl">
                  <DiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <br/>
      <hr/>
    </>
  );
}

export default Home;