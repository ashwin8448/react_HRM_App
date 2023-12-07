import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer } from "./reducer.ts";
import { thunk } from "redux-thunk";
import { employeeReducer } from "./employeesStore/employeeReducer.ts";

const store = createStore(
  combineReducers(reducer, employeeReducer, skillReducer),
  applyMiddleware(thunk)
);
