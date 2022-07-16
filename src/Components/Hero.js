import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {Link} from "react-router-dom"


 export default function Hero(props) {

    const {text} = useTypewriter({
        words: ['Web Developer', 'Web Designer', 'Mechanical Engineer'],
        loop: {},
        
      })

      const myStyleLight={
        background : "rgba(255, 255, 255, 0.8)"
      }

      const myStyleDark={
        background:"rgba(105, 105, 105, 0.8)",
  
      }

      const modeHome= ()=>{
        if(props.mode==="light"){
         return myStyleLight
        }else{
         return myStyleDark
        }
      };

     

     return(
     
       <>
       <div id="hero-bg">
          <div id="hero" style={modeHome()} className={`d-flex flex-column justify-content-center text-${props.mode==="light" ? "dark" :"light"} `}>
              <div className="container text-center text-lg-start">  
                <h1>Vikram Jagtap</h1>
                <p className="ms-lg-4">I'm <span className={`text-${props.mode==="light" ? "primary":"dark"}`}>{text}</span><Cursor/></p>   
                  <div className="social-links  ms-lg-3">
                      <a href="https://www.linkedin.com/in/imvikramjagtap/" className={`linkedin text-${props.mode==="light" ? "dark" : "light"}  fs-3`}><i className="bi bi-linkedin"></i></a>
                      <a href="https://github.com/imvikramjagtap" className={`github text-${props.mode==="light" ? "dark" : "light"}  fs-3`}><i className="bi bi-github"></i></a>
                        <a href="https://twitter.com/imvikramj" className={`twitter text-${props.mode==="light" ? "dark" : "light"}  fs-3`}><i className="bi bi-twitter"></i></a>
                        <a href="https://www.instagram.com/imvikramjagtap/" className={`instagram text-${props.mode==="light" ? "dark" : "light"}  fs-3`}><i
                              className="bi bi-instagram"></i></a>
                        <a href="https://www.facebook.com/imvikramjagtap/" className={`facebook text-${props.mode==="light" ? "dark" : "light"}  fs-3`}><i className="bi bi-facebook"></i></a>
                        <a href="mailto:imvikramjagtap@gmail.com" className={`envelope text-${props.mode==="light" ? "dark" : "light"}  fs-3`}><i className='bi bi-envelope'></i></a>
                  </div>

                    <div className="row mt-4 text-center ">
                      <div className="col-lg-2 p-2">
                        <Link to="/about"><button className={` btn btn-${props.mode==="light"? "primary" : "dark" } px-5 `}>About me</button></Link>
                      </div>
                      <div className="col-lg-2 p-2">
                        <Link to="/projects"><button className={`btn btn-${props.mode==="light"?"primary":"dark"} px-5 `}>Projects</button></Link>
                      </div>
                      <div className="col-lg-2 p-2">
                        <Link to="/contact"><button className={`btn btn-${props.mode==="light"?"primary":"dark"} px-5`}>Contact</button></Link>
                      </div>
                      
                    </div>
                  
              </div>
              
           </div>
        </div>
       </>
        
       
     );
 }