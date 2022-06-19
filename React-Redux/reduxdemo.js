const redux = require('redux');
const createStore = redux.legacy_createStore;

//create action
const BUY_CANDY = 'BUY_CANDY'
const BUY_CAKES = 'BUY_CAKES'

//create action creator
function buyCandy(){
    return { 
             type: BUY_CANDY
    }
}

function buyCakes(){
    return{
        type:BUY_CAKES
    }
}

const initialState ={
    numOfCandy:10,
    numOfCakes:20
}

//create reducer
const reducer = (state= initialState, action) =>{
         switch(action.type)
         {
            case BUY_CANDY:
                return {
                    ...state,
                    numOfCandy:state.numOfCandy-1 
                       }
            case BUY_CAKES:
                return{
                    ...state,
                    numOfCakes:state.numOfCakes-1
                }
            default:
                return state
         }
}

//create store
const store = createStore(reducer)
console.log('Initial State', store.getState());
store.subscribe(()=> console.log('Updated state', store.getState()));
store.dispatch(buyCandy());
store.dispatch(buyCandy());
store.dispatch(buyCandy());
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyCakes());
store.dispatch(buyCandy());