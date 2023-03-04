import { useRef } from "react";

const MainNav = () => {
   const  ulref = useRef(null);
   const  toggleNav = ()=>{
      ulref.current.classList.toggle('show');
   }
    return (
        <nav className="main-nav" >
        <div className="d-flex justify-content-between d-md-none">
           <a href="google.com" className="text-white">Menu</a>
           <button className="navbar-toggler" onClick={toggleNav} type="button">
           <span className="navbar-toggler-icon"></span>
           <span className="navbar-toggler-icon"></span>
           <span className="navbar-toggler-icon"></span>
           </button>
        </div>
        <ul ref={ulref}>
           <li>
              <a className="nav-link" href="google.com">About</a>
              <div className="split">
                 <ul >
                    <li className="list-heading">About the Hotel</li>
                    <li>
                       <a href="google.com">
                       Overview
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Explore Colombo
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Services & Facilities</a>
                    </li>
                    <li>
                       <a href="google.com">
                       Map & Directions</a>
                    </li>
                 </ul>
              </div>
           </li>
           <li>
              <a href="google.com" className="nav-link">Room & Suites</a>
              <div className="split">
                 <ul>
                    <li className="list-heading">Rooms</li>
                    <li>
                       <a href="google.com">
                       Deluxe Lake View
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Deluxe Ocean View
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Premier Balcony
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Premier Ocean View
                       </a>
                    </li>
                 </ul>
                 <ul>
                    <li className="list-heading">Horizon Club</li>
                    <li>
                       <a href="google.com">
                       Horizon Club Lake View
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Horizon Club Ocean View
                       </a>
                    </li>
                 </ul>
                 <ul>
                    <li className="list-heading">Suites</li>
                    <li>
                       <a href="google.com">
                       Executive Suites</a>
                    </li>
                    <li>
                       <a href="google.com">
                       Specialty Suites</a>
                    </li>
                    <li>
                       <a href="google.com">
                       Shangri-La Suite</a>
                    </li>
                 </ul>
                 <ul>
                    <li className="list-heading">
                       Connecting Rooms
                    </li>
                    <li>
                       <a href="google.com">
                       Executive Suite & Premier Ocean Room Connecting</a>
                    </li>
                    <li>
                       <a href="google.com">
                       Two Deluxe Lake View Rooms Connecting</a>
                    </li>
                 </ul>
                 <p className="list-split d-block w-100">
                    <a href="google.com">ROOMS & SUITES OVERVIEW</a>
                 </p>
              </div>
           </li>
           <li>
              <a href="google.com" className="nav-link">Dinning</a>
              <div className="split">
                 <ul>
                    <li className="list-heading">Resturants</li>
                    <li>
                       <a href="google.com">
                       Cake Temptations by Shangri-La
                       <br/>
                       Colombo
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Shang Palace
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Capital Bar & Grill
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Central
                       </a>
                    </li>
                 </ul>
                 <ul>
                    <li className="list-heading">Bars & Lounghe</li>
                    <li>
                       <a href="google.com">
                       Sapphyr Lounge
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Capital Bar & Grill
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Pool Bar
                       </a>
                    </li>
             
                 </ul>
                     
                 <p className="list-split d-block w-100">
                    <a href="google.com">DINING OVERVIEW</a>
                 </p>
              </div>

           </li>
           <li>
              <a className="nav-link" href="google.com">Experience</a>
              <div className="split">
                 <ul>
                    <li className="list-heading">For kids</li>
                    <li>
                       <a href="google.com">
                       Overview
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                          Adventure Zone
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                          Celebrations
                       </a>
                    </li>
                 </ul>
                 <ul>
                    <li className="list-heading">Health & Lesiure</li>
                    <li>
                       <a href="google.com">
                       Overview
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Capital Bar & Grill
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                       Pool Bar
                       </a>
                    </li>
                 </ul>
              </div>
           </li>
           <li>
              <a href="google.com" className="nav-link">Events</a>
              <div className="split">
                 <ul>
                    <li className="list-heading">Meetings & Events</li>
                    <li>
                       <a href="google.com">
                          Overview
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                          Experience It
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                          Meet Work Create
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                          Outside Catering
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                          Request For Proposal
                       </a>
                    </li>
                 </ul>
                 <ul>
                    <li className="list-heading">Wedding and Celebrations</li>
                    <li>
                       <a href="google.com">
                          Overview
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                          Wedding Planning
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                          Weddings By Shangri-La
                       </a>
                    </li>
                    <li>
                       <a href="google.com">
                          Request for Proposal
                       </a>
                    </li>
                 </ul>
              </div>
           </li>
           <li>
              <a href="google.com">Gallery</a>
           </li>
           <li>
              <a href="google.com">Offers</a>
           </li>
           <li>
              <a className="nav-link" href="google.com">
              More</a>
              <div className="split">
                 <ul>
                    <li className="list-heading">Apartments</li>
                    <li>
                       <h3>
                          <a href="google.com">
                          Learn More
                          </a>
                       </h3>
                    </li>
                 </ul>
              </div>
           </li>
           <li>
              <a href="google.com" className="btn-find">
              <span>
              Find a Hotel</span>
              </a>
           </li>
        </ul>
     </nav>
    );
}

export default MainNav;
