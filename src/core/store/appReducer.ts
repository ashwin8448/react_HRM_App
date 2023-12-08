import { combineReducers } from "redux";
import employeeReducer from "./reducers/employeeReducer";
import skillsReducer from "./reducers/skillsReducer";
import filterReducer from "./reducers/filterReducer";

const appReducer = combineReducers({
  employees: employeeReducer,
  skills: skillsReducer,
  filters: filterReducer,
});

export default appReducer;
