import { createStore } from "redux";
const store=createStore(function(state,action){
    if(action.type==="edit-login") {
        return {
            ...state,
            currentUser: {
                name: action.payload.name
            }
        }
    }
         return state;
},
{
    currentUser: {
        name: "Hripsime@gmail.com"
    }
});
export default store;