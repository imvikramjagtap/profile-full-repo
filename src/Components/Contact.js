import {Link} from "react-router-dom"

export default function Contact (props){
    const icon={
        height:60,
        width:60
    }
    return(
        <>
        <section id="contact"  className={`contact bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>
        <div  className="container " >

            <div  className="section-title ">
                <h2>Contact Me</h2>
            </div>

            <div  className="container mt-2">
                <div  className="row info mt-5">
                    <div  className="address col-lg-4">
                        <div className="row">
                            <div style={icon} className={`col-4 rounded-circle text-center d-flex bg-${props.mode === "light" ? "primary" : "light"} text-${props.mode} `}>
                              <i  className="bi bi-geo-alt fs-2 my-auto mx-auto"></i>
                            </div>
                            <div className="col-8">
                            <h4>Location:</h4>
                            <p>Maharashtra, India</p>
                            </div> 
                        </div>
                    </div>

                    <div  className="email col-lg-4 row">
                        <div className="row">
                            <div style={icon} className={`col-4 rounded-circle text-center d-flex bg-${props.mode === "light" ? "primary" : "light"} text-${props.mode} `}>
                              <i  className="bi bi-envelope fs-2 my-auto mx-auto"></i>
                            </div>
                            <div className="col-8">
                                <h4>Email:</h4>
                                <a href="mailto:imvikramjagtap@gmail.com">
                                    <p>imvikramjagtap@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div  className="phone col-lg-4">
                        <div className="row">
                            <div style={icon} className={`col-4 rounded-circle text-center d-flex bg-${props.mode === "light" ? "primary" : "light"} text-${props.mode} `}>    
                                <i  className="bi bi-phone fs-2 my-auto mx-auto"></i>
                            </div>
                            <div className="col-8">
                                <h4>Call:</h4>
                                <a href="tel:+91 9503225485">
                                    <p>+91 9503225485</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-5">
                 <div className="social-links  ms-lg-3">
                        <a href="https://www.linkedin.com/in/imvikramjagtap/" className={`linkedin text-${props.mode==="light" ? "dark" : "light"}  fs-3`}><i className="bi bi-linkedin"></i></a>
                        <a href="https://github.com/imvikramjagtap" className={`github text-${props.mode==="light" ? "dark" : "light"}  fs-3 ms-lg-5 ms-3`}><i className="bi bi-github"></i></a>
                        <a href="https://twitter.com/imvikramj" className={`twitter text-${props.mode==="light" ? "dark" : "light"}  fs-3 ms-lg-5 ms-3`}><i className="bi bi-twitter"></i></a>
                        <a href="https://www.instagram.com/imvikramjagtap/" className={`instagram text-${props.mode==="light" ? "dark" : "light"}  fs-3 ms-lg-5 ms-3`}><i
                              className="bi bi-instagram"></i></a>
                        <a href="https://www.facebook.com/imvikramjagtap/" className={`facebook text-${props.mode==="light" ? "dark" : "light"}  fs-3 ms-lg-5 ms-3`}><i className="bi bi-facebook"></i></a>
                        <a href="mailto:imvikramjagtap@gmail.com" className={`envelope text-${props.mode==="light" ? "dark" : "light"}  fs-3 ms-lg-5 ms-3`}><i className='bi bi-envelope'></i></a>
                  </div>
            </div>
            <div className="container text-center p-3 mt-2">
                     <Link to="/about" className={`btn btn-${props.mode==="light" ? "primary" : "secondary"} px-5 ms-2 mt-2`}>About</Link>
                    <Link to="/projects" className={`btn btn-${props.mode==="light" ? "primary" : "secondary"} px-5 ms-2 mt-2`}>Projects</Link>
                    <Link to="/" className={`btn btn-${props.mode==="light" ? "primary" : "secondary"} px-5 ms-2 mt-2`}>Go back to home</Link>
       </div>
        </div>
    </section>
        </>
    );
}