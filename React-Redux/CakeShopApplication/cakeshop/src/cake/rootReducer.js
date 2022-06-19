import cakeReducer from "./redux/cakeReducer";
import iceCreamReducer from "./redux/iceCreamReducer";
import { combineReducers } from "redux";
import userReducer from "../users/redux/userReducer";

const rootReducer = combineReducers(
    {
        cake:cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    }
)

export default rootReducer