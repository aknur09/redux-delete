

const coffeeState={
    coffeeData:[],
    status:'',  //pending, success, error
    error:''
    
}

const coffeeReducer=(state=coffeeState, action)=>{
    const { type, payload }=action

    switch (type) {
        case 'ADD_COFFEE_PENDING':
            return {...state, status:'pending'}

        case 'ADD_COFFEE_SUCCESS':
                return {
                    ...state, 
                    status:'success',
                coffeeData:payload
                }   

        case 'ADD_COFFEE_ERROR':
                    return {
                        ...state, 
                        status:'error',
                    error:payload
                    }    
    
        default:
            return state
           
    }
}

export default coffeeReducer