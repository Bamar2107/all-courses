import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userType";
import axios from "axios";

export const fetchUserRequest =() =>{
    return{
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = users =>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchUserFailure = error =>{
    return{
        type:FETCH_USER_FAILURE,
        payload:error
    }
}



//async action creator :
//This fetchUser function is special because by using of thunk middleware this function returns another function. so instead of returing
// an action i.e, an object we returns a function.

//This function dosen't have to be pure, this means this funcyion allow us to perform side effects such as async api call.
//And this function also recieve dispatch method as its argument
export const fetchUser = () =>{
    return (dispatch) =>{

        dispatch(fetchUserRequest)

        axios.get('https:/jsonplaceholder.typicode.com/users')
        .then( response =>{
            const user = response.data
            dispatch(fetchUserSuccess(user))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}