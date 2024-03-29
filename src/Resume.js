import React, { useState } from "react";
import LinkTrio from "./LinkTrio";

const Resume = () => {
  const [openItems, setOpenItems] = useState([
    "collapseOne",
    "collapseTwo",
    "collapseThree",
    "collapseFour",
    "collapseFive",
  ]);

  const handleAccordionClick = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const isAccordionOpen = (id) => openItems.includes(id);
  return (
    <div className="container text-center position-relative">
      <h1 className="position-absolute top-0 end-0 text-primary">resume</h1>
      <div className="accordion" style={{ paddingTop: "75px" }}>
        <div className="card bg-success" style={{ padding: "15px" }}>
          <div className="card bg-secondary">
            <br />
            <h2 className="card-title text-primary">Sarah Goewey</h2>
            <h5 className="card-subtitle text-success-emphasis">
              Software Engineer | New York, NY
            </h5>
            <br />
            <LinkTrio />
            <br />
          </div>
          <br />
          <div className="accordion-item">
            <h6 className="accordion-header">
              <button
                className={`accordion-button bg-secondary ${
                  isAccordionOpen("collapseOne") ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("collapseOne")}
              >
                SUMMARY
              </button>
            </h6>
            <div
              id="collapseOne"
              className={`accordion-collapse collapse ${
                isAccordionOpen("collapseOne") ? "show" : ""
              }`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-secondary-subtle text-success">
                <p style={{ textAlign: "left" }}>
                  Full-stack Software Engineer who recently completed Fullstack
                  Academy's Web Development Bootcamp; worked individually and in
                  teams to develop multiple full-stack applications.
                  Professional background in customer service and inventory
                  management roles enables a unique perspective in designing
                  user-friendly and efficient applications. Seeking to leverage
                  skills to create and maintain user-centric digital products.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h6 className="accordion-header">
              <button
                className={`accordion-button bg-secondary ${
                  isAccordionOpen("collapseTwo") ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("collapseTwo")}
              >
                TECHNICAL SKILLS
              </button>
            </h6>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse ${
                isAccordionOpen("collapseTwo") ? "show" : ""
              }`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-secondary-subtle text-success">
                <div style={{ textAlign: "left" }}>
                  <span className="text-primary">Proficient:</span> Javascript,
                  PostgreSQL, Express, React, Node, Redux, HTML5, CSS3, Git,
                  GitHub, Chrome DevTools
                </div>
                <div style={{ textAlign: "left" }}>
                  <span className="text-primary">Familiar:</span> Typescript,
                  Java
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h6 className="accordion-header">
              <button
                className={`accordion-button bg-secondary ${
                  isAccordionOpen("collapseThree") ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("collapseThree")}
              >
                TECHNICAL PROJECTS
              </button>
            </h6>
            <div
              id="collapseThree"
              className={`accordion-collapse collapse ${
                isAccordionOpen("collapseThree") ? "show" : ""
              }`}
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body bg-secondary-subtle text-success"
                style={{ textAlign: "left" }}
              >
                <p>
                  <a href="https://eat-easy.onrender.com">EatEasy</a> |
                  Co-developer | February 2024{" "}
                </p>
                <p>
                  • Working with another developer to build a fully functional
                  recipe and meal planner app
                </p>
                <p>
                  • Building full-stack functionality to allow users to search
                  for recipes, add them to a personal meal planner, and add the
                  ingredients to a customized shopping list
                </p>
                <p>
                  • Using Javascript, React, Redux, Node, Express, PostgreSQL,
                  Bootstrap, Spoonacular API, and deploying with Render
                </p>
                <br />
                <p>
                  <a href="https://backup-cash-register.onrender.com/">
                    Backup Cash Register
                  </a>{" "}
                  | Developer | August 2023{" "}
                </p>
                <p>
                  • Developed an intuitive cash register application for
                  assisting retail workers whose point-of-sale system has
                  crashed
                </p>
                <p>
                  • Employed fixed-point decimal representation when calculating
                  totals on the front end
                </p>
                <p>
                  • Utilized a PostgreSQL database to enable users to persist
                  and refer to their transaction history
                </p>
                <br />
                <p>
                  <a href="https://spiffy-stickies.onrender.com/#/">
                    Spiffy Stickies
                  </a>{" "}
                  | Developer | May 2023{" "}
                </p>
                <p>
                  • Created a full-stack CRUD app that allows users to create,
                  read, update and delete sticky notes
                </p>
                <p>
                  • Implemented user authentication and authorization to allow
                  users to keep their notes private or share them publicly
                </p>
                <p>
                  • Employed technologies such as HTML, CSS, Javascript, React,
                  Redux, Node.js, Express, PostgreSQL, and deployed the app
                  using Render
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h6 className="accordion-header">
              <button
                className={`accordion-button bg-secondary ${
                  isAccordionOpen("collapseFour") ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("collapseFour")}
              >
                RELEVANT WORK EXPERIENCE
              </button>
            </h6>
            <div
              id="collapseFour"
              className={`accordion-collapse collapse ${
                isAccordionOpen("collapseFour") ? "show" : ""
              }`}
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body bg-secondary-subtle text-success"
                style={{ textAlign: "left" }}
              >
                <p>
                  <span className="text-primary">Greenlight Bookstore</span> |
                  Ecommerce Bookseller/Receiver/Shiftleader | Brooklyn, NY
                </p>
                <p>July 2018 - June 2022</p>
                <p>
                  • Handled 500+ web orders per week and provided customer
                  support, troubleshooting technical issues and improving the
                  overall online customer experience
                </p>
                <p>
                  • Streamlined inventory management by sorting and receiving
                  incoming shipments, executing returns and markdowns, and
                  organizing stock using Basil inventory management software
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h6 className="accordion-header">
              <button
                className={`accordion-button bg-secondary ${
                  isAccordionOpen("collapseFive") ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleAccordionClick("collapseFive")}
              >
                EDUCATION
              </button>
            </h6>
            <div
              id="collapseFive"
              className={`accordion-collapse collapse ${
                isAccordionOpen("collapseFive") ? "show" : ""
              }`}
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body bg-secondary-subtle text-success"
                style={{ textAlign: "left" }}
              >
                <p className="text-primary">
                  Fullstack Academy Web Development Bootcamp
                </p>
                <p>December 2022-June 2023</p>
                <p>Software Engineering Certificate</p>
                <br />
                <p className="text-primary">Northern Arizona University</p>
                <p>August 2009-May 2013</p>
                <p>Bachelor of Arts in Theatre Performance</p>
                <p>Graduated Summa Cum Laude with cumulative 4.0 GPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
