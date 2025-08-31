import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How JobZee Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>
              Sign up quickly as a job seeker or employer to get started with your professional journey.
            </p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Find a Job / Post a Job</p>
            <p>
              Explore thousands of job listings as a seeker or post your openings to reach the right candidates.
            </p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Apply / Recruit</p>
            <p>
              Apply to jobs seamlessly or hire qualified candidates efficiently using JobZee’s intuitive platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
