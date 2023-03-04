const reducer = (state, action) => {

    if (action.type === 'ADD-ROOM') {
        const newRoom = {
            id: crypto.randomUUID(),
            adultAmount: 0,
            childrenAmount: 0
        }
        const increasedAmounts = getChangedAmount(state.rooms)

        const updatedRooms =[...state.rooms,newRoom]
        return {
            ...state,rooms:updatedRooms,totalAdults:increasedAmounts.totalAdultRooms,
            totalChildren:increasedAmounts.totalChildrenRooms
        }
    }

    if(action.type === 'INCREASE-ADULT') {
        
       const id = action.payload;
       const updatedRooms = state.rooms.map((room)=>{
          if(room.id===id){

            return {
                ...room,adultAmount:room.adultAmount+1
            }
          }
          return room
       })

       const increasedAmounts = getChangedAmount(updatedRooms)

       return {
        ...state,rooms:updatedRooms,totalAdults:increasedAmounts.totalAdultRooms
        ,totalChildren:increasedAmounts.totalChildrenRooms
       }
    }

    if(action.type === 'DECREASE-ADULT') {
        
        const id = action.payload;
        const updatedRooms = state.rooms.map((room)=>{
           if(room.id===id){
 
             return {
                 ...room,adultAmount:room.adultAmount-1
             }
           }
           return room
        })
 
        const increasedAmounts = getChangedAmount(updatedRooms)
 
        return {
         ...state,rooms:updatedRooms,totalAdults:increasedAmounts.totalAdultRooms,
         totalChildren:increasedAmounts.totalChildrenRooms
        }
     }

     if(action.type === 'INCREASE-CHILD') {
        
        const id = action.payload;
        const updatedRooms = state.rooms.map((room)=>{
           if(room.id===id){
 
             return {
                 ...room,childrenAmount:room.childrenAmount+1
             }
           }
           return room
        })
 
        const increasedAmounts = getChangedAmount(updatedRooms)
 
        return {
         ...state,rooms:updatedRooms,totalAdults:increasedAmounts.totalAdultRooms,
         totalChildren:increasedAmounts.totalChildrenRooms
        }
     }
 
     if(action.type === 'DECREASE-CHILD') {
         
         const id = action.payload;
         const updatedRooms = state.rooms.map((room)=>{
            if(room.id===id){
  
              return {
                  ...room,childrenAmount:room.childrenAmount-1
              }
            }
            return room
         })
  
         const increasedAmounts = getChangedAmount(updatedRooms)
  
         return {
          ...state,rooms:updatedRooms,totalAdults:increasedAmounts.totalAdultRooms,
          totalChildren:increasedAmounts.totalChildrenRooms
         }
      }

      if(action.type ==='REMOVE-ROOM'){
        const id = action.payload;
        const updatedRooms = state.rooms.filter((room)=>{
           if(room.id!==id){
 
             return {
                room
             }
           }
           return null
        })
 
        const increasedAmounts = getChangedAmount(updatedRooms)
 
        return {
         ...state,rooms:updatedRooms,totalAdults:increasedAmounts.totalAdultRooms,
         totalChildren:increasedAmounts.totalChildrenRooms
        }
      }
    return {
        ...state
    }
}

const getChangedAmount = (rooms)=>{
    const increasedAmount= rooms.reduce((intialAmount,room)=>{
      
        intialAmount.totalAdultRooms=room.adultAmount +intialAmount.totalAdultRooms 
        intialAmount.totalChildrenRooms=room.childrenAmount +intialAmount.totalChildrenRooms
       
        return intialAmount

    },{
        totalAdultRooms:0,
        totalChildrenRooms:0,
    })

    return increasedAmount;
}

export default reducer
