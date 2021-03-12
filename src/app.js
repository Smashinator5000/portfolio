import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './app.css';
// import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/navbar";
import Header from "./components/header";
import AboutMe from "./components/aboutme";
import Experience from "./components/experience";
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (


    <div>
      <p>hallo worlds</p>
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>


  );
}

export default App;