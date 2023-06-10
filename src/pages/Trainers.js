import TrainerCard from "../components/TrainerCard";
import {Link} from "react-router-dom";
function Trainers(){
    return (
    <>
  
  <div className="breadcrumbs">
      <div className="container">
        <h2>Trainers</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
      </div>
    </div>

    <section id="trainers" className="trainers">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
         
         <TrainerCard  img1="assets/img/trainers/trainer-1.jpg" name="Walter White" title="Web Development" description="Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"  />
         <TrainerCard img1="assets/img/trainers/trainer-2.jpg" name="Aas" title="graphic designing" description="rfsf dfdwdf grw foeefl kdfp mfe mpdfmm pssvmm dfef pdffm aafvl eww[ff  dfw  vfd dfe dfe   wfqfv"        />         <TrainerCard img1="assets/img/trainers/trainer-3.jpg" name="kapil" title="cryptography" description="kfds vvlf sdvv vrgs vd lefekfeo vediya ddewfc dsddqqfv gegwwd tterwa vvbfr rewtw ww33rq hytopp fgrep rpgre ffe feov aarfwew  wef  fppfdp akvvklv "/>


        </div>

      </div>
    </section>

    </>);

}

export default Trainers ;