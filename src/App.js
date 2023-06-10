import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {Routes , Route} from "react-router-dom";
import Course from "./pages/Course";
import About from "./pages/About";
import Trainers from "./pages/Trainers";
import Event from "./pages/Event";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
  <Header /> 

  <Routes>
  <Route path="/"  element={<Home/>} />
  <Route path="about"  element={<About/>} />
     <Route path="course" element={<Course/>} />
     <Route path="Trainers" element={<Trainers/>}  />
     <Route path="events" element={<Event/>} />
     <Route path="pricing" element={<Pricing/>} />
     <Route path="contact" element={<Contact/>}/>
</Routes>
 
  <Footer />
  
</>
  );
}

export default App;
