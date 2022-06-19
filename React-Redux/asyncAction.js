//require redux
const redux = require('redux')

//require redux-thunk
const thunkMiddleware = require('redux-thunk').default

//require axios
const axios = require('axios')

//create store
const createStore = redux.legacy_createStore

//create middleware
const apllyMiddleWare = redux.applyMiddleware

//create initial state
const initialState ={
    loading:false,
    users:[],
    error:''
}

//create actions type
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'


//create action creator
const fetchUsersRequest =() =>{
    return{
        type:FETCH_USER_REQUEST
    }
}

const fetchUsersSuccess = (users) =>{
    return{
       type:FETCH_USER_SUCCESS,
       payload:users
    }
}

const fetchUsersFailure = (error) =>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}


//create reducer
const reducer = (state= initialState, action) =>{
    switch(action.type)
    {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USER_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
    }

}

//create async action creator

const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //response.data is the array os users
            const users = response.data.map(user => user.name)
            dispatch(fetchUsersSuccess(users))
        })
        .catch( error =>  {
            //error.message is the description of error

            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store = createStore(reducer, apllyMiddleWare(thunkMiddleware))
store.subscribe(() => { console.log(store.getState())})
store.dispatch(fetchUsers())