import React, { useState } from "react";
import reactjs from "../../public/reactjs.png";
import flutter from "../../public/flutter.png";
import django from "../../public/django.png";
import nodejs from "../../public/node.png";
import nestjs from "../../public/nestjs.png";
import typescript from "../../public/typescript.png";
import kafka from "../../public/kafka.png";
import postgres from "../../public/postgres.png";
import redis from "../../public/redis.png";
import sqlite from "../../public/sqlite.png";
import docker from "../../public/docker.png";
import git from "../../public/git.png";
import gcp from "../../public/gcp.png";

function Experiance() {
  const [showMore, setShowMore] = useState(false);

  const cardItem = [
    { id: 1, logo: reactjs, name: "ReactJS", category: "Frontend" },
    { id: 2, logo: flutter, name: "Flutter", category: "Frontend" },
    { id: 3, logo: django, name: "Django", category: "Backend" },
    { id: 4, logo: nodejs, name: "Node.js", category: "Backend" },
    { id: 5, logo: nestjs, name: "NestJS", category: "Backend" },
    { id: 6, logo: typescript, name: "TypeScript", category: "Backend" },
    { id: 7, logo: kafka, name: "Kafka", category: "Backend" },
    { id: 8, logo: postgres, name: "PostgreSQL", category: "Database" },
    { id: 9, logo: redis, name: "Redis", category: "Database" },
    { id: 10, logo: sqlite, name: "SQLite", category: "Database" },
    { id: 11, logo: docker, name: "Docker", category: "Tool" },
    { id: 12, logo: git, name: "Git", category: "Tool" },
    { id: 13, logo: gcp, name: "Google Cloud", category: "Tool" },
  ];

  const categoryColors = {
    Frontend: "blue",
    Backend: "green",
    Database: "yellow",
    Tool: "purple",
  };

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>

        {/* Toggle Section */}
        <div className="mb-4 text-gray-700 text-justify">
          <p>
            Over the past year, I’ve gained extensive hands-on experience
            designing, developing, and deploying scalable full-stack solutions
            using modern technologies.
            <span className={`${showMore ? "" : "hidden"}`}>
              {" "}
              On the frontend, I’ve built interactive and responsive UIs with{" "}
              <strong>ReactJS</strong> and
              <strong> Flutter</strong>. On the backend, I’ve developed RESTful
              APIs using
              <strong> Django</strong>, <strong>NestJS</strong>, and{" "}
              <strong>Node.js</strong>, structured with
              <strong> TypeScript</strong> and best-practice architecture. I’ve
              implemented real-time features using <strong>Kafka</strong> and
              managed relational and in-memory databases like
              <strong> PostgreSQL</strong>, <strong>Redis</strong>, and{" "}
              <strong>SQLite</strong>. My experience also includes
              containerization with <strong>Docker</strong>, version control via{" "}
              <strong>Git</strong>, and deploying production systems on{" "}
              <strong>Google Cloud Platform</strong>. These tools have enabled
              me to build efficient, cloud-native solutions that power
              real-world applications.
            </span>
          </p>

          <button
            className="text-blue-600 font-semibold mt-2 hover:underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less ▲" : "Show More ▼"}
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name, category }) => (
            <div
              className="group flex flex-col items-center justify-center border-[2px] rounded-2xl md:w-[200px] md:h-[220px] shadow-md p-2 cursor-pointer hover:scale-105 duration-300 relative"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] object-contain rounded-full"
                alt={name}
              />
              <div className="mt-2 text-center font-semibold text-gray-800">
                {name}
              </div>
              <span
                className={`text-xs px-2 py-1 mt-1 rounded-full font-medium bg-${categoryColors[category]}-100 text-${categoryColors[category]}-800`}
              >
                {category}
              </span>

              {/* Tooltip */}
              <div className="opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs rounded-md px-2 py-1 absolute top-full mt-2 z-10">
                {`Used in ${category} development`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
