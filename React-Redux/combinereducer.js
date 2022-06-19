const redux = require('redux')
const createStore = redux.legacy_createStore
const combineReducers = redux.combineReducers


//create action
const BUY_CAKES= 'BUY_CAKES'
const BUY_CANDY = 'BUY_CANDY'

//create action reducer
function buyCakes(){
    return{
        type:BUY_CAKES
    } 
}

function buyCandy(){
    return{
        type:BUY_CANDY
    }
}

//initial States
const initialCakes ={
    numOfCakes:10
}

const initialCandy ={
    numOfCandy:20
}


//create Reducers
const cakeReducer = (state=initialCakes,action) =>{
         switch(action.type)
         {
            case BUY_CAKES:
                return {...state, numOfCakes: state.numOfCakes-1}
            default:
                return state
         }
}

const candyReducer = (state=initialCandy,action) =>{
               switch(action.type)
               {
                case BUY_CANDY:
                    return {...state, numOfCandy:state.numOfCandy-1}
                default:
                    return state
               }
}

//create root reducer
const rootreducer = combineReducers({
    cake: cakeReducer,
    candy: candyReducer
})

//create store
const store = createStore(rootreducer)
console.log('Initial State :', store.getState());

//subscribe to store
const unsubscribe = store.subscribe(()=> console.log('Updated State :', store.getState()));
store.dispatch(buyCakes())
store.dispatch(buyCakes())
store.dispatch(buyCakes())
store.dispatch(buyCandy())
store.dispatch(buyCandy())
store.dispatch(buyCandy())
store.dispatch(buyCandy())
store.dispatch(buyCakes())

unsubscribe()