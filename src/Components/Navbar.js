import logo from "../img/Vj.png";
import {Link} from "react-router-dom";

export default function Navbar (props){
    return(
        <>
        <nav id="top" className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img className="rounded" height="50px" src={logo} alt="VJ Logo"
                    srcSet=""/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-lg-end me-4" id="navbarNav">
            
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Get In Touch</Link>
                    </li>
                </ul>
                <div  className="form-check form-switch justify-content-end">
                    <input  className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label  className={`form-check-label text-${props.mode === "light" ? "dark" : "secondary"}`} htmlFor="flexSwitchCheckDefault">{`${props.mode === "light" ? "Enable" : "Disable"} Dark Mode`}</label>
            </div>
                
                
            </div>
            
        </div>
    </nav>
        
        </>
    );
} 