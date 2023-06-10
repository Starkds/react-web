import EventCard from "../components/EventCard";
function Event(){
    return (
        <><div className="breadcrumbs" data-aos="fade-in">
        <div className="container">
          <h2>Events</h2>
          <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
        </div>
      </div>
      
      <section id="events" className="events">
      <div className="container" data-aos="fade-up">

        <div className="row">
         <EventCard img="assets/img/events-1.jpg" title="Introduction to webdesign" time="Sunday, September 26th at 7:00 pm" detail="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
         <EventCard img="assets/img/events-2.jpg" title="Introduction to designing " time="tuesday, june 17th at 12:00 pm" detail="ffw ddkjw kefef owke  oefk v  mfwpwrm mdfem pcmcsk xksss xkfeflfze kvsm dfkeev vdfk pmmdclweqwe kvdvk lkdvef llcwep kdv vllwv pls kcdfww kd dsdkwwefvv sdke kdfwk kdfek kfev kdvk dwp k,vvl lvwkfpk wdw accc dDKKdslc "/>
        </div>

      </div>
    </section></>
    );

}

export default Event;