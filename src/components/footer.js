const Footer = () => {
    return ( 
        <footer data-aos="fade-up" data-aos-duration="2000">
        <div className="about"  >
           <h3>About</h3>
           <ul>
              <li><a href="https://www.cinnamonhotels.com/about-us">About Cinnamon Hotels &amp; Resorts</a></li>
              <li><a href="https://www.cinnamonhotels.com/media-accolades">Media &amp; Accolades</a></li>
              <li><a href="https://www.cinnamonhotels.com/gallery">Gallery</a></li>
              <li><a href="https://www.cinnamonhotels.com/cinnamon-csr-sustainability">CSR &amp; Sustainability</a></li>
              <li><a href="https://www.keells.com/" target="_blank" rel="noopener noreferrer">John Keells Group</a></li>
              <li><a href="https://www.cinnamonair.com/" target="_blank" rel="noopener noreferrer">Cinnamon Air</a></li>
              <li><a href="https://www.cinnamonnaturetrails.com/" target="_blank" rel="noopener noreferrer">Nature Trails</a></li>
              <li><a href="https://cinnamonboxoffice.com/" target="_blank" rel="noopener noreferrer">Cinnamon Box Office</a></li>
              <li><a href="https://www.cinnamonhotels.com/terms-and-conditions">Terms &amp; Conditions</a></li>
              <li><a href="https://www.cinnamonhotels.com/privacy-statement">Privacy Statement</a></li>
           </ul>
        </div>
        <div className="get-in-touch sections" >
           <h3>Get in Touch</h3>
           <ul>
              <li>
                 <a href="https://www.cinnamonhotels.com/know-sri-lanka">Know Sri Lanka</a>
              </li>
              <li>
                 <a href="https://www.cinnamonhotels.com/know-maldives">Know Maldives</a>
              </li>
              <li>
                 <a href="https://cinnamonhotels.freshdesk.com/support/home" target="_blank" rel="noopener noreferrer">Contact Us</a>
              </li>
           </ul>
           <h3>Sections</h3>
           <ul>
              <li><a href="https://www.cinnamonhotels.com/careers">Careers</a></li>
              <li><a href="http://blog.cinnamonhotels.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="https://www.cinnamonhotels.com/affiliateprogramme">Cinnamon Affiliate Programme</a></li>
           </ul>
        </div>
        <div className="third-section" >
           <h3>Follow Us</h3>
           <ul className="social-media">
              <li>
                 <a target="_blank" title="Click to visit" rel="noopener noreferrer" href="https://www.facebook.com/cinnamonhotels">
                 <i className="fab fa-2x fa-facebook"></i>
                 </a>
              </li>
              <li>
                 <a target="_blank" title="Click to visit" rel="noopener noreferrer" href="https://twitter.com/CinnamonHotels">
                 <i className="fab  fa-2x fa-twitter"></i>
                 </a>
              </li>
              <li>
                 <a target="_blank" title="Click to visit" rel="noopener noreferrer" href="https://www.linkedin.com/company/cinnamon-hotels-&amp;-resorts">
                 <i className="fab fa-2x fa-linkedin"></i>
                 </a>
              </li>
              <li>
                 <a target="_blank" title="Click to visit" rel="noopener noreferrer" href="https://www.instagram.com/cinnamonhotels">
                 <i className="fab  fa-2x fa-instagram"></i>
                 </a>
              </li>
              <li>
                 <a target="_blank" title="Click to visit" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCw6HmIsvHGq2HcBQCzE7J5A?view_as=subscriber">
                 <i className="fab fa-2x fa-youtube"></i>
                 </a>
              </li>
           </ul>
           <h3>Get Cinnamon in your inbox</h3>
           <input type="email" placeholder="Email"/>
           <div className="d-flex mt-4 checkbox checkbox-circle checkbox-red">
              <input type="checkbox" id="checkbox2a" value="yes"/>
              <label htmlFor="checkbox2a">
              By Checking this box, I consent to the processing of my Personal Data by Cinnamon for the purpose and within the Conditions set out in this form and the
              </label>
           </div>
        </div>
     </footer>
     );
}
 
export default Footer;