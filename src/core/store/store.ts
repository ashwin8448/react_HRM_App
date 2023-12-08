import { applyMiddleware, compose, createStore } from "redux";
import appReducer from "./appReducer";
import { thunk } from "redux-thunk";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(appReducer);
export default store;
