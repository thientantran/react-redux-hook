import { combineReducers } from "redux";
import ProjectReducer from "./ProjectReducer"

export const rootReducer = combineReducers({
    ProjectReducer: ProjectReducer
})
