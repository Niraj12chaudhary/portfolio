import React from "react";
import django from "../../public/django.png";
import postgresql from "../../public/postgres.png";
import reactjs from "../../public/reactjs.png";
import nestjs from "../../public/nestjs.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: postgresql,
      name: "PostgreSQL",
    },
    {
      id: 2,
      logo: nestjs,
      name: "NestJS",
      source: "https://github.com/Niraj12chaudhary/tips-backend",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: django,
      name: "Django",
      source: "https://github.com/Niraj12chaudhary/railway-management-api",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, source }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto mt-4"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 text-center">
                  {name}
                </div>
              </div>
              {source && (
                <div className="px-6 py-4 flex justify-center">
                  <a href={source} target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                      Source code
                    </button>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
