import Courses from "../components/CoursesCard";

import {Link} from "react-router-dom";
function Course(){
return(
    <>
        <div className="breadcrumbs">
      <div className="container">
        <h2>Courses</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
      </div>
    </div>

    <section id="courses" className="courses">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="zoom-in" data-aos-delay="100">

          <Courses img1="assets/img/course-1.jpg"  title="Web Development" price="$200" subtitle="Website Design" description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore." img2="assets/img/trainers/trainer-1.jpg" name="Antonio" followers="122" likes="45" />
          <Courses img1="assets/img/course-2.jpg"  title="Marketing" price="$456" subtitle="Search Engine Optimization" description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore." img2="assets/img/trainers/trainer-2.jpg" name="Lana" followers="342" likes="67" />
          <Courses img1="assets/img/course-3.jpg"  title="Content" price="$200" subtitle="Copywriting" description="Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore." img2="assets/img/trainers/trainer-3.jpg" name="adam" followers="233" likes="222" />
          

          

        </div>

      </div>
    </section>
    </>
);
}

export default Course;