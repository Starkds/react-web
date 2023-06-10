import CoursesCard from "../components/CoursesCard";
import Trainers from "./Trainers";
import Icon from "../components/IconCard";
import FeaturesCard from "../components/FeaturesCard";
import Counter from "../components/CounterCard";
import Container from "../components/ContainerCard";
import  About  from "./About";
import Event from "./Event";
import PriceTag from "./Pricing";


import {Link} from "react-router-dom";
function Home() {
    return (
        <>
        <main id="main">


        <section id="hero" className="d-flex justify-content-center align-items-center">
    <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
      <h1>Learning Today,<br />Leading Tomorrow</h1>
      <h2>Most effective and efficient platform for learning</h2>
      <Link to="/courses" className="btn-get-started">Get Started</Link>
    </div>
  </section>


<About />

<section id="counts" className="counts section-bg">
  <div className="container">

    <div className="row counters">

     <Counter />
     <Counter />
     <Counter />
     <Counter />


    </div>

  </div>
</section>

<section id="why-us" className="why-us">
  <div className="container" data-aos="fade-up">

    <div className="row">
     <Container />
       <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
        <div className="icon-boxes d-flex flex-column justify-content-center"> 
          <div className="row">
            <Icon />
            <Icon />
            <Icon />
          </div>
        </div>
      </div>
   </div>

  </div>
</section>



<section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          
         <FeaturesCard title="Light" icon="ri-store-line" style={{color: "#ffbb2c"}}/>
         <FeaturesCard title="MBA" icon="ri-bar-chart-box-line" style={{color: "#5578ff"}}/>
         <FeaturesCard title="Tech" icon="ri-calendar-todo-line" style={{color: "#ffbb2c"}}/>
         <FeaturesCard title="Point" icon="ri-paint-brush-line" style={{color: "#e361ff"}}/>
         <FeaturesCard title="Star" icon="ri-database-2-line" style={{color: "#47aeff"}}/>
         <FeaturesCard title="False" icon="ri-gradienter-line" style={{color: "#ffa76e"}}/>
         <FeaturesCard title="TCS" icon="ri-file-list-3-line" style={{color: "hsl(176, 86%, 46%)"}}/>
         <FeaturesCard title="Audio" icon="ri-price-tag-2-line" style={{color: "#4233ff"}}/>
         <FeaturesCard title="Power" icon="ri-anchor-line" style={{color: "#b2904f"}}/>
         <FeaturesCard title="team" icon="ri-disc-line" style={{color: "#b20969"}}/>
         <FeaturesCard title="dead" icon="ri-base-station-line" style={{color: "#ff5828"}}/>
         <FeaturesCard title="Sun" icon="ri-fingerprint-line" style={{color: "#29cc61"}}/>

         
          
          
        </div>

      </div>
    </section>
<section id="popular-courses" className="courses">
  <div className="container" data-aos="fade-up">

    <div className="section-title">
      <h2>Courses</h2>
      <p>Popular Courses</p>
    </div>

    <div className="row" data-aos="zoom-in" data-aos-delay="100">

    <CoursesCard img1="assets/img/course-1.jpg"  title="Web Development" price="$200" subtitle="Website Design" description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore." img2="assets/img/trainers/trainer-1.jpg" name="Antonio" followers="122" likes="45" />
          <CoursesCard img1="assets/img/course-2.jpg"  title="Marketing" price="$456" subtitle="Search Engine Optimization" description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore." img2="assets/img/trainers/trainer-2.jpg" name="Lana" followers="342" likes="67" />
          <CoursesCard img1="assets/img/course-3.jpg"  title="Content" price="$200" subtitle="Copywriting" description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore." img2="assets/img/trainers/trainer-3.jpg" name="adam" followers="233" likes="222" />
          

          </div>
 </div>
</section>

<section id="trainers" className="trainers">
  <div className="container" data-aos="fade-up">

    <div className="row" data-aos="zoom-in" data-aos-delay="100">
     
     <Trainers />


     
    </div>
</div>
</section>

<section id="events" className="events">
      <div className="container" data-aos="fade-up">

        <div className="row">
         <Event />
        </div>

      </div>
    </section>


    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">

        <div className="row">

         <PriceTag />

        </div>

      </div>
    </section>

</main>
</>
    );
}
export default Home;