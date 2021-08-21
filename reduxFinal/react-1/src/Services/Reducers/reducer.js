import {MESSAGE_CHANGE} from '../constants'
const initialState = {
    cardData:{price:1000,name:"i phone 11"}
}

export default function changereducers(state=initialState,action)
{
    
    switch(action.type){
        case MESSAGE_CHANGE:
            return {cardData:action.data}
                // ...state.cardData, //initially it was only state instead of state.carddata which was giving error that state is not iterable
                
            


        default:
            return state
    }
}
// const changereducers = (state=initialState,action) => {
//     const newState = {...state}
//     if(action.type==='message change'){
//         newState.message="thanks"
//     }
//     return newState;
// }

