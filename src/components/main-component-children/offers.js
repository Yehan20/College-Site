import offer1 from '../../images/shangrila-offer-1.png' 
import offer2 from '../../images/shangrila-offer-2.png' 
import offer3 from '../../images/shangrila-offer-3.png' 
const Offers = () => {
    return ( 
        <div className="section-3 overflow-hidden">
        <h2>Offers</h2>
        <div className="offer-row">
           <div className="offer-shangrila"  data-aos="fade-right" data-aos-duration="2000">
              <img src={offer1} alt="Shngrila Offer"/>
              <h5>Rooms & Suites</h5>
              <h4>Shangri–La Circle Exclusive Member Rate with Breakfast</h4>
              <p className="light">Exclusive Member Rate with Breakfast for Shangri-La Circle member.</p>
              <p className="dark">
                 From LKR
                 <span> 65,728.80 </span>
                 Average Per Night
              </p>
              <a href="/" className="shangrilla-btn">View Details</a>
           </div>
           <div className="offer-shangrila">
              <img src={offer2} alt="Shngrila Offer"/>
              <h5>Rooms & Suites</h5>
              <h4>Shangri–La Circle Exclusive Member Rate</h4>
              <p className="light">Exclusive Member Rate for Shangri-La Circle member.</p>
              <p className="dark">
                 From LKR
                 <span> 55,368.00 </span>
                 Average Per Night
              </p>
              <a href="/" className="shangrilla-btn">View  Details</a>
           </div>
           <div className="offer-shangrila"  data-aos="fade-left" data-aos-duration="2000" >
              <img src={offer3} alt="Shngrila Offer"/>
              <h5>Rooms & Suites</h5>
              <h4>Book Early and Save with Flexibility</h4>
              <p className="light">Book in advance and save up to 15% with complimentary date changes.</p>
              <p className="dark">
                 From LKR
                 <span> 64,019.25 </span>
                 Average Per Night
              </p>
              <a href="/" className="shangrilla-btn">View Details</a>
           </div>
        </div>
     </div>
     );
}
 
export default Offers;