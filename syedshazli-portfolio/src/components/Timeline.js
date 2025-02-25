import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const timelineData = [
    {
      date: "August 2023",
      title: "Started My Education",
      description: "Enrolled in a degree program in Computer Science.",
    },
    {
      date: "Summer 2024",
      title: "Internship at XYZ Company",
      description: "Worked as a software development intern, contributing to real-world projects.",
    },
    {
      date: "December 2024",
      title: "Completed First Major Project",
      description: "Built a full-stack web application using React and Node.js.",
    },
    {
      date: "May 2025",
      title: "Graduated with Honors",
      description: "Graduated with a Bachelor's degree in Computer Science.",
    },
  ];

  return (
    <section id="timeline">
      <div className="container">
        <h2>My Journey</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;