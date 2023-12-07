import { combineReducers } from "redux";
import employeeReducer from "./employeesStore/employeeReducer";
import skillsReducer from "./skillsStore/skillsReducer";

const appReducer = combineReducers({
  employees: employeeReducer,
  skills: skillsReducer,
});

export default appReducer;
