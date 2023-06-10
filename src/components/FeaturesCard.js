function FeaturesCard(props) {
    return (
        <>
   <div className="col-lg-3 col-md-4">
        <div className="icon-box">
          <i className={props.icon} style={props.style}></i>
          <h3><a href="">{props.title}</a></h3>
        </div>
      </div>
     
        </>
    );
}

export default FeaturesCard;