import axios from "axios"

export const getCoffee=()=>{
    return async (dispatch)=>{
        dispatch(addCoffeePending())
      try {
        const { data } = await axios ('https://api.sampleapis.com/coffee/hot');
        dispatch(addCoffeeSuccess(data))
      } catch (err) {
        console.log(err);
        dispatch(addCoffeeError(err))
      }  
    }
}

const addCoffeePending=()=>{
    return {
        type : 'ADD_COFFEE_PENDING'
    }
}

const addCoffeeSuccess = (data) =>({
    type: 'ADD_COFFEE_SUCCESS',
    payload:data})

const addCoffeeError = (err) =>({type: 'ADD_COFFEE_ERROR', payload:err})