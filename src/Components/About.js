import pic from "../img/profile-img.JPG"
import {Link} from "react-router-dom"

export default function About(props){
    return(
        <>
         <section id="about" className={`about bg-${props.mode}`}>
        <div className="container" data-aos="fade-up">

            <div className={`section-title text-${props.mode==="light" ? "dark" :"light"}`}>
                <h2>About Me</h2>
                <h3> I prefer to keep learning, continue challenging myself, and do
                    interesting things that matters.</h3>
            </div>

            <div className={`row text-${props.mode==="light" ? "dark" : "light"}`}>
                <div className="col-lg-4">
                    <img src={pic} className="img-fluid rounded-circle" alt=""/>
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content text-center">
                    <h3>Web Developer</h3>
                    <p className="fs-5">
                        Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing
                        to follow
                        my fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a
                        natural
                        ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have
                        an almost
                        impulsive need to act on them.
                    </p>
                    <div className="m-5 text-center">
                        <h3>Skills</h3>
                        <div className="mt-3 ">
                            <h5 className="btn btn-secondary rounded">HTML</h5>
                            <h5 className="btn btn-secondary rounded ms-2">CSS</h5>
                            <h5 className="btn btn-secondary rounded ms-2">BOOTSTRAP</h5>
                            <h5 className="btn btn-secondary rounded ms-2">JAVA SCRIPT</h5>
                            <h5 className="btn btn-secondary rounded ms-2">REACT.JS</h5>
                            <h5 className="btn btn-secondary rounded ms-2">RESPONSIVE DESIGN</h5>
                            <h5 className="btn btn-secondary rounded ms-2">GIT HUB</h5>
                        </div>

                    </div>
                    <Link to="/contact" className={`btn btn-${props.mode==="light" ? "primary" : "secondary"} px-5 ms-2 mt-2`}>Get in touch</Link>
                    <Link to="/projects" className={`btn btn-${props.mode==="light" ? "primary" : "secondary"} px-5 ms-2 mt-2`}>Projects</Link>
                    <Link to="/" className={`btn btn-${props.mode==="light" ? "primary" : "secondary"} px-5 ms-2 mt-2`}>Go back to home</Link>

                </div>
            </div>

        </div>
    </section>
        </>
    );
}