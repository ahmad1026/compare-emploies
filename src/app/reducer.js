import { combineReducers } from "redux"
import { compareReducer } from "../features/compare/compareReducer"
import { usersReducer } from "../features/users/usersReducer"




const rootReducer = combineReducers({
    users:usersReducer,
    compare:compareReducer

})



export default rootReducer









