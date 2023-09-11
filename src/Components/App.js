import React, { useEffect } from "react";
import About from "./About";
import ProjectsPage from "./ProjectsPage";
import Resume from "./Resume";
import Contact from "./Contact";
import { Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <div className="position-relative">
        <div>
          <div className="dropend">
            <button
              className="btn btn-outline-light btn-lg dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              menu
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/">
                  about
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/resume">
                  resume
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/projects">
                  projects
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/contact">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="position-absolute top-0 end-0">
          <h1>sarah goewey</h1>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
