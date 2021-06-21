import { combineReducers } from "redux";

const initialState=0;
export const changeTheNumber =(state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT": return state+5;
        case "DECREMENT": return state-1;
        default : return state
    }
}

export const rootReducers=combineReducers({
    changeTheNumber
});