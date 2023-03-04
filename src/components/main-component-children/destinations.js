import { useEffect, useRef, useState } from 'react';
import {places} from './data'

const Destinations = () => {

    const [data,setData]=useState('');
    const selectRef = useRef(null)
     
    // set first place
    useEffect(()=>{
       const currentDestination = places.find((data)=>{
         if(data.id==='hotel-15') return data
         return null
       })

       setData(currentDestination)
    },[])

    
    // toggle the destinations
    const changeDestinations=()=>{
      
      const destinationId =selectRef.current.value;
      const newDestination = places.find((data)=>{   
         if(data.id===destinationId){
            return data
         }
         return null
        });

      setData(newDestination)

    }
 
    return ( 

        <div className='section-1' data-aos="fade-up" data-aos-duration="2000">
        <h1>Our Destinations</h1>
        <select className="selectpicker" id="select-hotel" tabIndex="-98" onChange={changeDestinations} ref={selectRef}>
           <option value="hotel-15">Cinnamon Velifushi Maldives</option>
           <option value="hotel-16">Cinnamon Life</option>
           <option value="hotel-17">Cinnamon Grand</option>
        </select>
        <div className="destination" id={data.id}>
           <img src={data.image} alt={data.name}  />
           <img src={data.imageMap} alt={data.name} className="map"/>
           <div className="information">
              <h3>{data.name}</h3>
              <p>{data.info}</p>
              <a href="/" title='Click to visit' className="discover-btn">Discover More</a>
           </div>
        </div>

     </div>
     );
}
 
export default Destinations;