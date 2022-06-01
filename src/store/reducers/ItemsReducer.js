import { DEL_ITEMS, FETCH_PRODUCTS } from "../actions/ItemsAction"


const initialState = {
    products : [
        
    ]
}


export default function name(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:

        console.log("Reducer getting the data = ", action.payload);
            
            return{
                ...state,
                products : action.payload
            }
        
        case DEL_ITEMS:

            return {
                ...state,
                products : action.payload
            }
    
        default:
            return{
                state
            }
    }
}