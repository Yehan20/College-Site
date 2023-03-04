import {useEffect, useReducer, useRef} from "react";
import {room} from './data'
import {RxCrossCircled} from 'react-icons/rx'
import reducer from "../reducer/reducer";


const BookingForm = () => {
    const roomRef = useRef(null);

    const defaultState = {
        totalAdults: 0,
        totalChildren:0,
        rooms: room.filter((room) => room.id === 1)
    }

    const [state, dispatch] = useReducer(reducer, defaultState)


    const addRoom = () => {
        dispatch({type: 'ADD-ROOM'})
    }

    const increaseAdult = (id)=>{
        dispatch({type:'INCREASE-ADULT',payload:id})
    }

    const decreaseAdult = (id) =>{
        dispatch({type:'DECREASE-ADULT',payload:id})
    }

    const increaseChild = (id)=>{
        dispatch({type:'INCREASE-CHILD',payload:id})
    }

    const decreaseChild = (id) =>{
        dispatch({type:'DECREASE-CHILD',payload:id})
    }

    const removeRoom =(id)=>{
        dispatch({type:'REMOVE-ROOM',payload:id})
    }

    
    // add event listener when clicked out side hide the booking menu
    useEffect(() => {
        window.addEventListener('click', (e) => {
          
            // console.log(e.target.tagName);
            const parent = (e.target.closest("#relative"));
            if(e.target.tagName==='svg' || e.target.tagName==='path'){
              
                roomRef.current.classList.remove('hidden')
                return;
            }
            if (parent === null ) {
       
                roomRef.current.classList.add('hidden')
            }
           

        })
    }, [])

    const toggleRoomMenu = () => {
      roomRef.current.classList.toggle('hidden')
    }
    return (
        <div className="book-form">
            <div className="d-flex">
                <input type="date" name="date" id="date"/>
                <input type="date" name="date" id="date2"/>
            </div>
            <div id="relative">
                <input type="text" readOnly id="rooms"
                    onClick={toggleRoomMenu   }
                    value={`${state.rooms.length} Rooms, ${state.totalAdults} Adults, ${state.totalChildren} Children`}/>
                <div className="room-menu hidden" ref={roomRef}>
                    <h3>Max.3 Guests per room</h3>
                    <div className="age-group">
                        <h4>Adults(s)</h4>
                        <h4>Children(under 12)</h4>
                    </div>
                    <div className="room-option" >
                        { state.rooms.map((room,index) => {
                            return <div className="new-room" key={index} >
                                <h4>Room {index + 1}</h4>
                                <div className="room flex-grow-0 d-flex"
                                    key={index}>
                                    <div className="adult-room">
                                        <button id="adult-minus" disabled={room.adultAmount<=1}  onClick={()=>decreaseAdult(room.id)}>-</button>
                                        <span id="adult-amt">
                                            {
                                            room.adultAmount
                                        }</span>
                                        <button disabled={room.adultAmount>=3} id="adult-plus" onClick={()=>increaseAdult(room.id)}>+</button>
                                    </div>
                                    <div className="child-room">
                                        <button id="child-minus" disabled={room.childrenAmount<=0} onClick={()=>decreaseChild(room.id)}>-</button>
                                        <span id="child-amt">
                                            {
                                            room.childrenAmount
                                        }</span>
                                        <button id="child-plus" disabled={room.childrenAmount>=2} onClick={()=>increaseChild(room.id)}>+</button>
                                    </div>
                                </div>
                                <button className={`${state.rooms.length===1 ?'d-none':''} p-0`} onClick={()=>removeRoom(room.id)}> <RxCrossCircled size={"25px"} color={"#a68a3a"} /> </button>

                            </div>
                            })
                         } 
                    </div>
                    <button className={`${state.rooms.length>=5 ?'d-none':''} add-room`} onClick={addRoom}>+ Add room</button>
                   {state.totalChildren>0 && <div className="rules-regulations">
                        <p>
                            Children must be under 12 years of age.
                            Children must be under 12 years of age.
                            Shangri-La Circle member privilege:
                            Up to 2 children (under the age of 7) can enjoy complimentary buffet meals at all-day dining venues, when accompanied by a paying adult. Children aged 7 to 11 will enjoy a 50% discount.
                        </p>
                        <p>
                        Note: If you have more than 2 adults and 1 child in your group, please indicate the actual number of children and their ages. Our hotels will do their best to accommodate your family and will notify you if they are not able to.
                        </p>
                    </div>
                    }   
                </div>
            </div>
            <div>
                <input type="text" readOnly id="rate" value="Special Code"/>
            </div>
            <div>
                <button className="btn-search">Search</button>
            </div>
        </div>

    );
}

export default BookingForm;
