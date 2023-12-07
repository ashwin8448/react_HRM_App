import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { appReducer } from "./appReducer";

const store = createStore(appReducer, applyMiddleware(thunk));
