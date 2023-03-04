import image1 from "../../images/offer-img-3.jpg"
import image2 from "../../images/offer-img-2.jpg"
import image3 from "../../images/offer-img-1.jpg"
import image4 from "../../images/cheers.jpg"
import image5 from "../../images/car.jpg"
import image6 from "../../images/pizza.jpg"
import {useState} from "react"
import {Modal} from "react-bootstrap"

const Experiences = () => {


    const [offerAttributes, setAttributes] = useState({name: '', src: ''})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const showModal = (e) => {
        let children;
        console.log()
        if (e.target.className.length === 0) {
            children = Array.from(e.target.parentElement.children);
        } else {
            children =Array.from(e.target.children)
        }

        const src = children[0].src;
        const text = children[1].textContent
        setAttributes({
            ...offerAttributes,
            name: text,
            src: src
        });
        setShow(true);

    }

    return (
        <div className="section-2">
            <h2>Experience something new</h2>
            <p>Close to home or across the world hilton is there for you with memorable offers and Experience check out whats new.</p>
            <div className="exp-row" data-aos="fade-up" data-aos-duration="1500">
                <div className="offer multiply"
                    onClick={showModal}>
                    <img className="d-none"
                        src={image1}
                        alt="offer"/>
                    <h3>Multiply Your Points</h3>
                </div>
                <div className="offer book" data-aos="fade-up" data-aos-duration="2500"
                    onClick={showModal}>
                    <img className="d-none"
                        src={image2}
                        alt="offer"/>
                    <h3>Book Ahead & Save Up to 17%</h3>
                </div>
                <div className="offer hornors"  onClick={showModal} data-aos="fade-up" data-aos-duration="2000">
                    <img className="d-none"
                        src={image3}
                        alt="offer"/>
                    <h3>Join Hilton Honors & Get Up to 4,500 Points</h3>
                </div>
                <div className="offer cheers"  onClick={showModal} data-aos="fade-up" data-aos-duration="2500">
                    <img className="d-none"
                        src={image4}
                        alt="offer"/>
                    <h3>Free Bonus Points at New Hotels</h3>
                </div>
                <div className="offer car"  onClick={showModal} data-aos="fade-up" data-aos-duration="2000">
                    <img className="d-none"
                        src={image5}
                        alt="offer"/>
                    <h3>Park & Stay with Hilton</h3>
                </div>
                <div className="offer pizza"  onClick={showModal} data-aos="fade-up" data-aos-duration="1500">
                    <img className="d-none"
                        src={image6}
                        alt="offer"/>
                    <h3>Make Your Stay Even Sweeter</h3>
                </div>
            </div>
            <ModalPreview attributes={offerAttributes}
                show={show}
                close={handleClose}/>
        </div>
    );
}

const ModalPreview= ({attributes, show, close}) => {
    return (
        <Modal className='offer-modal'
            show={show}
            onHide={close}
            animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h5>{
                        attributes.name
                    }</h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={attributes.src }
                    className="modal-image"
                    alt="Modal"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, quis! Nihil non maiores quo repudiandae esse, hic sit quisquam amet illo minus debitis unde recusandae ab, rem sapiente excepturi labore!</p>
                <a href="/" className="btn-modal">Book now</a>
            </Modal.Body>
        </Modal>
    )

}

export default Experiences;


