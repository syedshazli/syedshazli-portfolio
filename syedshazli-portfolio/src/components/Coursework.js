import React from "react";
import "./Coursework.css";

const Coursework = () => {
  const courseworkData = [
    {
      subject: "Math",
      courses: ["Calculus I", "Linear Algebra", "Discrete Mathematics"],
    },
    {
      subject: "Computer Science",
      courses: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Machine Learning",
      ],
    },
    {
      subject: "ECE",
      courses: ["Digital Logic Design", "Signals and Systems", "Embedded Systems"],
    },
  ];

  return (
    <section id="coursework">
      <div className="container">
        <h2>Coursework</h2>
        <div className="coursework-list">
          {courseworkData.map((item, index) => (
            <div key={index} className="coursework-item">
              <h3>{item.subject}</h3>
              <ul>
                {item.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coursework;