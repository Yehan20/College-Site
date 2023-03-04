import {Carousel} from 'react-bootstrap'
import sliderImg1 from '../../images/slider-1.jpg'
import sliderImg2 from '../../images/slider-2.jpg'
import sliderImg3 from '../../images/slider-3.jpg'
const Slider = () => {
    return (
        <Carousel fade className='slider-full'  data-aos="fade-up" data-aos-duration="1500">
            <Carousel.Item>
                <img className="d-block w-100"
                    src={sliderImg1}
                    alt="First slide"/>
                <Carousel.Caption className="carousel-caption caption-move d-none d-md-block">

                    <h2>Shangri-La Colombo</h2>
                    <p>Your well-being in our care - learn more about our safety standards</p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                    src={sliderImg2}
                    alt="Second slide"/>
                <Carousel.Caption className="carousel-caption caption-move d-none d-md-block">

                    <h2>We Are Vaccinated</h2>
                    <p>Our highly vaccinated workforce provides the safest possible environment for your next holiday.</p>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                    src={sliderImg3}
                    alt="Third slide"/>

                <Carousel.Caption className="carousel-caption caption-move d-none d-md-block">

                    <h2>Shangri-La Cares</h2>
                    <p>Your well-being in our care - learn more about our safety standards</p>

                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
