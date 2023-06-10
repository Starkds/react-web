function TrainerCard(props) {
    return (
        <>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div className="member">
          <img src={props.img1} className="img-fluid" alt="" />
          <div className="member-content">
            <h4>{props.name}</h4>
            <span>{props.title}</span>
            <p>
              {props.description}
            </p>
            <div className="social">
              <a href=""><i className="bi bi-twitter"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      
      </>
    );
}

export default TrainerCard;