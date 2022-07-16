import cal from "../img/cal.png";
import Drum from "../img/Drum-kit.png";
import redbus from "../img/redBus.png";
import swiggy from "../img/swiggy.png";
import trello from "../img/Trello.png";

import textUtlies from "../img/text-utlies.png";
import resume from "../Resume/Vikram's Resume 0.1.pdf";
import {Link} from "react-router-dom"

export default function Projects(props) {
  return (
    <>
      <div id="projects" className={`pt-5 bg-${props.mode} text-${props.mode==="light" ? "dark" :"light"}`}>
        <div className="section-title">
          <h2>Projects</h2>
          <h3>Some of my work!</h3>
        </div>
        <div className="container border p-5">
          <div className="row mt-3">
            <div className=" col-lg-4 my-2">
              <div className="card">
                <img
                  src={textUtlies}
                  className="card-img-top"
                  alt="textUtlies.com Mock-up"
                />
                <div className={`card-body bg-${props.mode}`}>
                  <h4 className="card-title">Text Utlies</h4>
                  <p className="card-text">
                    A App Which help the users to transform the text e.g:
                    converting the text to upper case, to lower case, removing
                    extra spaces, etc. Technologies used:
                    <strong> REACT.JS, HTML, CSS, JS,</strong> etc.
                  </p>
                  <div className="row">
                    <a
                      href="https://text-format.netlify.app/"
                      className={`btn btn-${props.mode === "light" ? "primary" : "secondary"} col-7`}
                    >
                      Visit Site
                    </a>
                    <a
                      href="https://github.com/imvikramjagtap/text-utlies"
                      className={`btn btn-${props.mode === "light" ? "primary" :"secondary"} col-4 ms-2`}
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 my-2">
              <div className="card">
                <img
                  src={cal}
                  className="card-img-top"
                  alt="Calculator Mockup"
                />
                <div className={`card-body bg-${props.mode}`}>
                  <h4 className="card-title">Calculator</h4>
                  <p className="card-text">
                    Its a simple Java script based calculator to perform day
                    today calculations, technologies used{" "}
                    <strong>HTML, CSS, JAVASCRIPT.</strong>
                  </p>
                  <div className="text-center row">
                    <a
                      href="https://calculator-by-vikram.netlify.app/"
                      className={`btn btn-${props.mode === "light" ? "primary" : "secondary"} col-7`}
                    >
                      Calculate
                    </a>
                    <a
                      href="https://github.com/imvikramjagtap/Calculator"
                      className={`btn btn-${props.mode === "light" ? "primary" :"secondary"} col-4 ms-2`}
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 my-2">
              <div className="card">
                <img
                  src={Drum}
                  className="card-img-top"
                  alt="Drumkit  mockup"
                />
                <div className={`card-body bg-${props.mode}`}>
                  <h4 className="card-title">Drum Kit</h4>
                  <p className="card-text">
                    Its an simple virtual kit of drums with onscreen clicks and
                    even keyboard controls, technologies used{" "}
                    <strong>HTML, CSS, JAVASCRIPT </strong>{" "}
                  </p>
                  <div className="text-center row">
                    <a
                      href="https://drum-kit-by-vikram.netlify.app/"
                      className={`btn btn-${props.mode === "light" ? "primary" : "secondary"} col-7`}
                    >
                      Let's play drums
                    </a>
                    <a
                      href="https://github.com/imvikramjagtap/drumkit"
                      className={`btn btn-${props.mode === "light" ? "primary" :"secondary"} col-4 ms-2`}
                    >
                      <i className="bi bi-github bi-md align-middle"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className=" col-lg-4 my-2" data-aos="fade-up">
                            <div className="card">
                                <img src={omindst} className="card-img-top" alt="Omindst.com Mock-up"/>
                                <div className="card-body">
                                    <h4 className="card-title">Om Industries</h4>
                                    <p className="card-text">Om Industries was my first client, its a business website with around 6
                                        pages.
                                        <strong>HTML, CSS, JS,</strong> etc was used while building this project.</p>
                                    <div className="text-center">
                                        <a href="https://www.omindst.com/" className="btn btn-primary">Visit Om Industries</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            {/* <div className=" col-lg-4 my-2" data-aos="fade-up">
                                <div className="card">
                                    <img src={wellvett}className="card-img-top" alt="wellvettevents.com mockup"/>
                                    <div className="card-body">
                                        <h4 className="card-title">WellVett Events</h4>
                                        <p className="card-text">WellVett Events gave me confident to work in design field, the design
                                            and development gave me idea what a customer wants to attract toward a site. </p>
                                        <div className="text-center">
                                            <a href="https://www.wellvettevents.com/" className="btn btn-primary">Visit WellVett
                                                Events</a>
                                        </div>
                                    </div>
                                </div>
                        </div> */}

            {/* <div className="col-lg-4 my-2 " data-aos="fade-up">
                        <div className="card">
                            <img src={mecvec} className="card-img-top" alt="mecvec.com Mockup"/>
                            <div className="card-body">
                                <h4 className="card-title">MECVEC</h4>
                                <p className="card-text">I always wanted my own business site so I made a fun site that is fully
                                    functional as a company, it was fun putting my imagination on screen.</p>
                                <div className="text-center">
                                    <a href="https://www.mecvec.com/" className="btn btn-primary">Visit MECVEC.COM</a>
                                </div>
                            </div>
                        </div>
                    </div> */}

            {/* <!-- Practice Projects --> */}

            <div className=" col-lg-4 my-2">
              <div className="card">
                <img src={trello} className="card-img-top" alt="trello-clone" />
                <div className={`card-body bg-${props.mode}`}>
                  <h4 className="card-title">Trello Clone</h4>
                  <p className="card-text">
                    As trello is one of the best and simple example of bootstrap
                    it did attract me, technologies used{" "}
                    <strong>HTML, CSS, BOOTSTRAP </strong>
                  </p>
                  <div className="row">
                    <a
                      href="https://trello-clone-by-vikram.netlify.app/"
                      className={`btn btn-${props.mode === "light" ? "primary" : "secondary"} col-7`}
                    >
                      Clone site
                    </a>
                    <a
                      href="https://github.com/imvikramjagtap/trello-clone"
                      className={`btn btn-${props.mode === "light" ? "primary" :"secondary"} col-4 ms-2`}
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 my-2">
              <div className="card">
                <img src={swiggy} className="card-img-top" alt="trello-clone" />
                <div className={`card-body bg-${props.mode}`}>
                  <h4 className="card-title">Swiggy Clone</h4>
                  <p className="card-text">
                    I love to order from swiggy and while learning web
                    development skills recreating swiggy's landing page was fun.
                    technologies used <strong>HTML,CSS</strong>
                  </p>
                  <div className="row">
                    <a
                      href="https://clone-by-vikram.netlify.app/swiggy.html"
                      className={`btn btn-${props.mode === "light" ? "primary" : "secondary"} col-7`}
                    >
                      Clone site
                    </a>
                    <a
                      href="https://github.com/imvikramjagtap/clone-by-vikram/blob/main/swiggy.html"
                      className={`btn btn-${props.mode === "light" ? "primary" :"secondary"} col-4 ms-2`}
                    >
                      <i className="bi bi-github "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-lg-4 my-2">
              <div className="card">
                <img
                  src={redbus}
                  className="card-img-top"
                  alt="redbus.com mockup"
                />
                <div className={`card-body bg-${props.mode}`}>
                  <h4 className="card-title">RED BUS Clone</h4>
                  <p className="card-text">
                    I re-created front-end of RED BUS, because I love to travel
                    and redbus is my companion, technologies used{" "}
                    <strong>HTML, CSS.</strong>
                  </p>
                  <div className="text-center">
                    <a
                      href="https://clone-by-vikram.netlify.app/redbus.html"
                      className={`btn btn-${props.mode === "light" ? "primary" : "secondary"} col-7`}
                    >
                      Clone site
                    </a>
                    <a
                      href="https://github.com/imvikramjagtap/clone-by-vikram/blob/main/redbus.html"
                      className={`btn btn-${props.mode === "light" ? "primary" :"secondary"} col-4 ms-2`}
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center p-4 m-0">
          <a href={resume}>
            Download Resume <i className="bi bi-download"></i>
          </a>
        </p>
        <div className="container text-center p-4">
                     <Link to="/contact" className={`btn btn-${props.mode==="light" ? "primary" : "secondary"} px-5 ms-2 mt-2`}>Get in touch</Link>
                    <Link to="/about" className={`btn btn-${props.mode==="light" ? "primary" : "secondary"} px-5 ms-2 mt-2`}>About</Link>
                    <Link to="/" className={`btn btn-${props.mode==="light" ? "primary" : "secondary"} px-5 ms-2 mt-2`}>Go back to home</Link>
       </div>
      </div>
    </>
  );
}
