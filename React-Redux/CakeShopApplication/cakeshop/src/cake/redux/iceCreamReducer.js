import { BUY_ICECREAMS, ADD_ICECREAMS } from "./iceCreamType";

const initialState ={
    numOfIceCreams:30
}

const iceCreamReducer = (state=initialState, action) =>{
    switch(action.type){
        case BUY_ICECREAMS:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams -1
            }
        case ADD_ICECREAMS:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams+1
            }
        default:
            return state
    }

}

export default iceCreamReducer