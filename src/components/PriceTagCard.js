function PriceTagCard(props){
    return (
        <>
            <div className="col-lg-3 col-md-6">
            <div className="box">
              <h3>{props.tag}</h3>
              <h4><sup>$</sup>{props.price}<span>{props.time}</span></h4>
              <ul>
                <li>{props.tag1}</li>
                <li>{props.tag2}</li>
                <li>{props.tag3}</li>
                <li className="na">{props.name1}</li>
                <li className="na">{props.name2}</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">{props.buy}</a>
              </div>
            </div>
          </div>

        </>
    )
}

export default PriceTagCard ;