import Hero from './Components/Hero'
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const toogleMode = () =>{
    if(mode==="light"){
      setMode("dark")
    }else{
      setMode("light")
    }
  };



  return (
    <>
   
    <Router>
    <Navbar toogleMode={toogleMode} mode={mode}/>
      <Routes>
        <Route exact path="/" element={<Hero mode={mode}/>}/>
        <Route exact path='/About' element={<About mode={mode}/>}/>
        <Route exact path='/Projects' element={<Projects mode={mode}/>}/>
        <Route exact path='/Contact' element={<Contact mode={mode}/>}/>
        
      </Routes>
      <Footer mode={mode}/>
    </Router>
    
    </>
  );
}

export default App;
