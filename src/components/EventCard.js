function EventCard(props){
    return (
        <>
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card">
              <div className="card-img">
                <img src={props.img} alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title"><a href="">{props.title}</a></h5>
                <p className="fst-italic text-center">{props.time}</p>
                <p className="card-text">{props.detail}</p>
              </div>
            </div>
          </div>
         
        </>
    );
    }
export default EventCard;