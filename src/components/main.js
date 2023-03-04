import Destinations from "./main-component-children/destinations";
import Experiences from "./main-component-children/experiences";
import Offers from "./main-component-children/offers";
import Slider from "./main-component-children/slider";
import BookingForm from "./main-component-children/bookform";

const Main = () => {
    return ( 
        <main>
        <Slider/>
        <BookingForm/>
        <Destinations/>
        <Experiences/>
        <Offers/>
        </main> 
     );
}
 
export default Main;