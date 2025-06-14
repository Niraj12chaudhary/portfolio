import React from "react";

import pic from "../../public/photo.jpeg";
import resume from "../../public/resume.pdf";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import {
  SiPostgresql,
  SiDjango,
  SiNestjs,
  SiReact,
  SiFlutter,
} from "react-icons/si";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          {/* LEFT SECTION */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
            <span className="text-xl">Welcome to My Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[
                  "Software Developer",
                  "DeVops Engineer",
                  "Full-Stack Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-md text-justify">
              I'm Shivam Kumar Chaudhary, a Computer Science graduate and
              Software Developer with hands-on industry experience building
              secure, scalable, and real-time systems. I’ve worked across the
              full development lifecycle — from designing backend APIs with
              Django and NestJS, to building mobile apps with Flutter and
              integrating cloud infrastructure using Docker, PostgreSQL, and
              GCP. My work at Sarva Suvidhaen Pvt Ltd includes developing a
              Kafka-based notification system, creating a geolocation-based
              attendance tracker, and contributing to a railway operations
              platform deployed to real users. I’m passionate about solving
              real-world problems with clean architecture, automation, and
              continuous learning.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col md:flex-row md:space-x-4 mt-4 space-y-4 md:space-y-0">
              <a
                href={resume}
                download="Shivam_Kumar_Resume.pdf"
                className="bg-green-600 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded shadow"
              >
                Download Resume
              </a>
              <a
                href="mailto:shivamkr7822@gmail.com"
                className="bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded shadow"
              >
                Hire Me
              </a>
            </div>

            {/* SOCIAL & TECH STACK */}
            <div className="flex flex-col items-center md:flex-row justify-between mt-8 space-y-6 md:space-y-0">
              {/* SOCIALS */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5 justify-center">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/shivam-kr-chaudhary/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Niraj12chaudhary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank" rel="noreferrer">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* TECH STACK */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5 justify-center">
                  <SiPostgresql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] p-1 cursor-pointer" />
                  <SiNestjs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] p-1 cursor-pointer" />
                  <SiDjango className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] p-1 cursor-pointer" />
                  <SiReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] p-1 cursor-pointer" />
                  <SiFlutter className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] p-1 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION (IMAGE) */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] object-cover border-4 shadow-lg"
              alt="Shivam Kumar Chaudhary"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
