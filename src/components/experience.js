import React from "react";

const experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-Current</h3>
            <p>University of Denver's Full Stack Web Development Certificate Course.</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2009-Current</h3>
            <p>Institute of Buisness and Medical Careers, Associates Degree in Massge Therapy</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Massage Therapy</h3>
            <p>Associate's in Massage Therapy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default experience;