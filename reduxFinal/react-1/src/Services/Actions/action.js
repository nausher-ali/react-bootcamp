import {MESSAGE_CHANGE} from '../constants'
export  const addToCart=(data)=>{
    return{
        type:MESSAGE_CHANGE,
        data:data
    }
}