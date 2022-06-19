const redux = require('redux');
const createStore = redux.legacy_createStore

//declare actions
const BUY_CAKES = 'BUY_CAKES'

//action creator which retuns an action
function buyCakes(){
    return {
        type: BUY_CAKES,
        info:'Redux first action'
    }
}


//Actions are the only way to interact with the store and carry some information from your app to redux store.
//Actions are plain java script objects
//  Actions have a 'type' property that indicates the type of action being performed
// The 'type' property is typically defined as string constants.  

//Note:
// An action is an object with 'type' property
//An action creator is a function that retuns an action.


//Reducres specify the app's changes in the response to actions sent to the store
// Reducers is the function that accepts state & action as arguments and returns the next state of the application

const initialState ={
    numOfCakes:10
}

//reducer function
const reducer = (state = initialState, action) =>{
           switch (action.type) {
            case BUY_CAKES:
              return {
                  ...state,
                  numOfCakes: state.numOfCakes-1
              }
            default:
               return state
           }
}


const store = createStore(reducer)
console.log('Initial State :', store.getState());
const unsubscribe = store.subscribe(()=> console.log('Updated State :', store.getState()))
store.dispatch(buyCakes())
store.dispatch(buyCakes())
store.dispatch(buyCakes())
store.dispatch(buyCakes())
unsubscribe()