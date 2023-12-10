import { combineReducers } from "redux";
import employeeReducer from "./reducers/employeeReducer";
import skillsReducer from "./reducers/skillsReducer";
import filterReducer from "./reducers/filterReducer";
import departmentReducer from "./reducers/departmentReducer";
import rolesReducer from "./reducers/roleReducer";

const appReducer = combineReducers({
  employees: employeeReducer,
  skills: skillsReducer,
  departments: departmentReducer,
  roles: rolesReducer,
  filters: filterReducer,
});

export default appReducer;
