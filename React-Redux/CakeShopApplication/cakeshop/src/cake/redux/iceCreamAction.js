import { BUY_ICECREAMS, ADD_ICECREAMS } from "./iceCreamType";

function buyIceCreams (){
    return{
        type: BUY_ICECREAMS
    }
}

function addIceCreams (){
    return{
        type:ADD_ICECREAMS
    }
}

export {buyIceCreams, addIceCreams}