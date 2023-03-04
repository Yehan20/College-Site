import shangrilla from '../images/shangrila.png'
import {AiOutlineUser,AiOutlineGlobal} from 'react-icons/ai'
import {BiMobile} from 'react-icons/bi'
const Header = () => {
    return (
            <header className="overflow-hidden" id='header'>
            <div className="upper-section-header">
               <a href='https://www.shangri-la.com/en/colombo/shangrila/' rel="noreferrer" title='Click to visit' target={'_blank'}>
                <img src={shangrilla} alt="Shangrila"/>
               </a> 
            </div>
            <nav aria-label="first-nav">
               <ul data-aos="fade-left" data-aos-duration="2000">
               <li><a href="./"><AiOutlineUser/> Sign In</a></li>
                   <li><a href="./"> Join Now </a></li>
                   <li><a href="./"> Find Reservations </a></li>
                   <li><a href="./"><AiOutlineGlobal/>English </a></li>
                   <li><a href="./"> LKR </a></li>
                  <li><a href="./"><BiMobile/></a></li>
               </ul>
            </nav>
         </header>
     );
}
 
export default Header;