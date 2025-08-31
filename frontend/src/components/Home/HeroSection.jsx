import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    { id: 1, title: "1,23,441", subTitle: "Live Jobs", icon: <FaSuitcase /> },
    { id: 2, title: "91,220", subTitle: "Companies", icon: <FaBuilding /> },
    { id: 3, title: "2,34,200", subTitle: "Job Seekers", icon: <FaUsers /> },
    { id: 4, title: "1,03,761", subTitle: "Employers", icon: <FaUserPlus /> },
  ];

  return (
    <section className="heroSection bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        <div className="title lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find a Job That Suits <br /> Your Interests and Skills
          </h1>
          <p className="text-lg md:text-xl text-gray-100">
            Discover thousands of opportunities tailored to your career goals. 
            Connect with top employers and take your career to new heights.
          </p>
        </div>

        <div className="image lg:w-1/2">
          <img
            src="/heroS.jpg"
            alt="hero"
            className="rounded-xl shadow-2xl border-2 border-white"
          />
        </div>
      </div>

      <div className="details mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {details.map((el) => (
          <div key={el.id} className="card flex items-center gap-4 bg-white text-gray-800 rounded-lg p-4 shadow-md">
            <div className="icon text-3xl text-green-500">{el.icon}</div>
            <div className="content">
              <p className="font-bold text-xl">{el.title}</p>
              <p className="text-gray-500">{el.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
