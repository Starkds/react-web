function CoursesCard(props){
    return ( 
        <>
    
      <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div className="course-item">
          <img src={props.img1} className="img-fluid" alt="..." />
          <div className="course-content">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>{props.title}</h4>
              <p className="price">{props.price}</p>
            </div>

            <h3><a href="course-details.html">{props.subtitle}</a></h3>
            <p>{props.description}</p>
            <div className="trainer d-flex justify-content-between align-items-center">
              <div className="trainer-profile d-flex align-items-center">
                <img src={props.img2} className="img-fluid " alt="" />
                <span>{props.name}</span>
              </div>
              <div className="trainer-rank d-flex align-items-center">
                <i className="bx bx-user"></i>&nbsp;{props.followers}
                &nbsp;&nbsp;
                <i className="bx bx-heart"></i>&nbsp;{props.likes}
              </div>
            </div>
          </div>
        </div>
      </div> 

   

 </>   );
    }


    export default CoursesCard;