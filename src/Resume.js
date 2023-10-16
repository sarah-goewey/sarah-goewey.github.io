import React, { useState } from "react";

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
      <h1 className="position-absolute top-0 end-0 text-primary-emphasis">
        resume
      </h1>
      <div className="accordion" style={{ paddingTop: "75px" }}>
        <div className="card bg-primary-subtle">
          <br />
          <h2 className="card-title text-primary-emphasis">Sarah Goewey</h2>
          <h5 className="card-subtitle text-success-emphasis">
            Software Engineer | New York, NY
          </h5>
          <br />
          <div className="row" style={{ maxWidth: "300px", margin: "auto" }}>
            <div className="col">
              <a href="https://www.linkedin.com/in/sarah-goewey-software-engineer/">
                <button type="button" className="btn btn-primary-emphasis">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </button>
              </a>
            </div>
            <div className="col">
              <a href="https://github.com/sarah-goewey">
                <button type="button" className="btn btn-primary-emphasis">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </button>
              </a>
            </div>
            <div className="col">
              <a href="mailto:sarahgoewey627@gmail.com">
                <button type="button" className="btn btn-primary-emphasis">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className={`accordion-button bg-primary-subtle ${
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
            <div className="accordion-body bg-secondary text-success">
              <p style={{ textAlign: "left" }}>
                Full-stack Software Engineer who recently completed Fullstack
                Academy's Web Development Bootcamp; worked individually and in
                teams to develop multiple full-stack applications. Professional
                background in customer service and inventory management roles
                enables a unique perspective in designing user-friendly and
                efficient applications. Seeking to leverage skills to create
                user-centric digital products.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className={`accordion-button bg-primary-subtle ${
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
            <div className="accordion-body bg-secondary text-success">
              <div className="row">
                <div className="col">Javascript</div>
                <div className="col">Node</div>
                <div className="col">React/Redux</div>
              </div>
              <div className="row">
                <div className="col">Express</div>
                <div className="col">HTML5</div>
                <div className="col">CSS</div>
              </div>
              <div className="row">
                <div className="col">PostgreSQL</div>
                <div className="col">Git</div>
                <div className="col">WebSockets</div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className={`accordion-button bg-primary-subtle ${
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
              className="accordion-body bg-secondary text-success"
              style={{ textAlign: "left" }}
            >
              <p>
                <a href="https://backup-cash-register.onrender.com/">
                  Backup Cash Register
                </a>{" "}
                | Developer | August 2023{" "}
              </p>
              <p>
                • Developed an intuitive cash register application for assisting
                retail workers whose point-of-sale system has crashed
              </p>
              <p>
                • Employed fixed-point decimal representation when calculating
                totals on the front end
              </p>
              <p>
                • Utilized a PostgreSQL database to enable users to persist and
                refer to their transaction history
              </p>
              <br />
              <p>
                <a href="https://cooking-party.onrender.com/">Cooking Party</a>{" "}
                | Co-developer | June 2023{" "}
              </p>
              <p>
                • Worked with three other developers to build a fully functional
                social cooking app
              </p>
              <p>
                • Built full-stack functionality to allow users to send, accept
                and reject friend requests, to make and join groups, and to chat
                with other online users
              </p>
              <p>
                • Used Javascript, React, Redux, Node.js, Express, PostgreSQL,
                WebSockets, Material UI, two third-party recipe APIs, and
                deployed using Render
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
                Redux, Node.js, Express, PostgreSQL, and deployed the app using
                Render
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className={`accordion-button bg-primary-subtle ${
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
              className="accordion-body bg-secondary text-success"
              style={{ textAlign: "left" }}
            >
              <p>
                <span className="text-primary-emphasis">
                  Greenlight Bookstore
                </span>{" "}
                | Ecommerce Bookseller/Receiver/Shiftleader | Brooklyn, NY
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
              className={`accordion-button bg-primary-subtle ${
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
              className="accordion-body bg-secondary text-success"
              style={{ textAlign: "left" }}
            >
              <p className="text-primary-emphasis">
                Fullstack Academy Web Development Bootcamp
              </p>
              <p>December 2022-June 2023</p>
              <p>Software Engineering Certificate</p>
              <br />
              <p className="text-primary-emphasis">
                Northern Arizona University
              </p>
              <p>August 2009-May 2013</p>
              <p>Bachelor of Arts in Theatre Performance</p>
              <p>Graduated Summa Cum Laude with cumulative 4.0 GPA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
