import PriceTagCard from "../components/PriceTagCard";
function Pricing(){
    return (
        <>
        <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>Pricing</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
      </div>
    </div>

<section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">

        <div className="row">

          <PriceTagCard tag="Free" price="0" time=" / month" tag1=" eewf df" tag2="fs saef" tag3="xvvvvc gfh" name1="fcsv vsdv " name2="vsadvvdsw  dd" buy="Buy now"  />
          <PriceTagCard tag="Basic" price="$100" time=" / month" tag1=" sgdfdbcvc " tag2="fs saef" tag3="cs vdggd  cs" name1="xvdv " name2="cssfvdxv  dd" buy="Buy now" />
          <PriceTagCard tag="intermediate" price="$130" time=" / month" tag1=" afsdgc fgs" tag2="vss bfhg" tag3="cs kjdvee" name1="lulhgn " name2="cvdgs  dd" buy="Buy now" />
          <PriceTagCard tag="advanced" price="$150" time=" / month" tag1=" fsdzxdv" tag2="sgtf grwx" tag3="cs kjdvee" name1="sfgd fge " name2="dgefgd  dd" buy="Buy now" />

        </div>

      </div>
    </section>
        </>
    );
}

export default Pricing;

