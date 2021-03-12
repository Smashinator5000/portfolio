import React from "react";
import APhoto from "../img/Ash.jpg";
import AshleysResume from "../docs/AshleysResume.pdf"
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { BsFileText } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={APhoto} alt="AshleysPhoto" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2 className="about-heading">About Me</h2>
          <p>
          Hello! I am Ashley Bartholomew. I am new to Web Development. My purpose is in life is not what I do. It is how I make people feel. Seeing someone smile because of what I had done for them is such a great feeling. Whether it be through massaging them building them a website, or even just acknowledging them. I am currently enrolled in the University of Denver's Coding Boot Camp. I am adding to my career as a massage therapist. I know I can not do it forever, so I am looking for something new to do. I have 3 cats and a dog.
          </p>
          <a href="https://github.com/Smashinator5000" target="_blank" rel="noreferrer" className="icon">
            <FaGithubSquare size={40} />
          </a>
          <a href="https://www.linkedin.com/in/ashley-bartholomew-b154aa6b/" target="_blank" rel="noreferrer" className="icon">
            <FaLinkedinIn size={40} />
          </a>
          <a href={AshleysResume} target="_blank" rel="noreferrer" className="icon">
            <BsFileText size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;