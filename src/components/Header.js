import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return (
       <>
       <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><Link to="/">Mentor</Link></h1>
     
       <Link to="/" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></Link>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><Link className="active" to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/course">Courses</Link></li>
          <li><Link to="/trainers">Trainers</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>

          <li className="dropdown"><Link to="/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
            <ul>
              <li><Link to="/">Drop Down 1</Link></li>
              <li className="dropdown"><Link to="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                <ul>
                  <li><Link to="/">Deep Drop Down 1</Link></li>
                  <li><Link to="/">Deep Drop Down 2</Link></li>
                  <li><Link to="/">Deep Drop Down 3</Link></li>
                  <li><Link to="/">Deep Drop Down 4</Link></li>
                  <li><Link to="/">Deep Drop Down 5</Link></li>
                </ul>
              </li>
              <li><Link to="/">Drop Down 2</Link></li>
              <li><Link to="/">Drop Down 3</Link></li>
              <li><Link to="/">Drop Down 4</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <Link to="/courses" className="get-started-btn">Get Started</Link>

    </div>
  </header>
 
       </>
    );

}

export default Header;