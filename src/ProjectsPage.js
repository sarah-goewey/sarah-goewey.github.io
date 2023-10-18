import React from "react";
import cavesofmercury from "./images/cavesofmercury.png";
import cookingparty from "./images/cookingparty.png";
import bcr from "./images/bcr.png";
import spiffystickies from "./images/spiffystickies.png";
import Project from "./Project";

const ProjectsPage = () => {
  return (
    <div className="container text-center position-relative">
      <h1 className="position-absolute top-0 end-0 text-primary">projects</h1>
      <div style={{ paddingTop: "75px" }}>
        <div className="card bg-success" style={{ padding: "15px" }}>
          <div
            className="card bg-primary-subtle"
            style={{ paddingTop: "15px" }}
          >
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Project
                    title="Backup Cash Register"
                    renderLink="https://backup-cash-register.onrender.com/#/"
                    githubLink="https://github.com/sarah-goewey/backup-cash-register-2"
                    image={bcr}
                    summary="This project was inspired by a common frustration from my
                      time in retail: whenever our point-of-sale system
                      (frequently) crashed, we were reduced to using a
                      cumbersome combination of calculators and Excel
                      spreadsheets to take cash from customers. Backup Cash
                      Register is intended as a sleek, user-friendly plan B,
                      calculating discount, tax and change so that harried
                      retail workers don't have to. Users can also save their
                      transactions to their account, for later reference."
                  />
                </div>
                <div className="carousel-item">
                  <Project
                    title="Caves of Mercury"
                    renderLink="https://caves-of-mercury.onrender.com/"
                    githubLink="https://github.com/sarah-goewey/harmoniums"
                    image={cavesofmercury}
                    summary="Caves of Mercury is a deliberately super-simplified social
                      platform inspired by my favorite passage from Kurt
                      Vonnegut's Sirens of Titan. In Sirens, the caves of
                      Mercury are inhabited by a primitive species called
                      Harmoniums who can only communicate two thoughts: 'I am
                      here' and 'So glad you are'. And isn't this all actually
                      want from social media: to announce our presence, and to
                      be acknowledged? Caves of Mercury uses this contraint to
                      offer users a zen experience of pure, uncomplicated
                      connection."
                  />
                </div>
                <div className="carousel-item">
                  <Project
                    title="Cooking Party"
                    renderLink="https://cooking-party.onrender.com/"
                    githubLink="https://github.com/cookingparty/cooking-party"
                    image={cookingparty}
                    summary="Built in collaboration with Rebecca Cherry, Angel Gao and
                      Nicholas Race as our Fullstack Academy capstone project,
                      Cooking Party is a feature-rich social cooking app. It is
                      a platform where food enthusiasts, home cooks, and
                      aspiring chefs can come together to explore recipes, share
                      their own culinary triumphs, and connect with like-minded
                      individuals from around the world. Users can browse,
                      search and favorite recipes, organize their week with our
                      meal planner, send, accept and reject friend requests,
                      join groups, and chat with other online users."
                  />
                </div>
                <div className="carousel-item">
                  <Project
                    title="Spiffy Stickies"
                    renderLink="https://spiffy-stickies.onrender.com/#/"
                    githubLink="https://github.com/sarah-goewey/stackathon"
                    image={spiffystickies}
                    summary="Completed during my time at Fullstack Academy, Spiffy
                      Stickies is a full-stack CRUD app that is intended for use
                      both in writing personal notes-to-self and in sharing
                      public notes with all users. Users are able to choose the
                      color and font of their sticky notes, and even add a
                      little emoji to their note's title."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
