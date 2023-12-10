import {
    FETCH_ROLES_FAILURE,
    FETCH_ROLES_REQUEST,
    FETCH_ROLES_SUCCESS,
  } from "../actionTypes";
  
  const initialState = {
    roles: [],
    loading: [],
    error: "",
  };
  const rolesReducer = (
    state = initialState,
    action: { type?: string; payload?: any }
  ) => {
    switch (action.type) {
      case FETCH_ROLES_REQUEST:
        return { ...state, loading: true };
      case FETCH_ROLES_SUCCESS:
        return { loading: false, roles: action.payload, error: "" };
      case FETCH_ROLES_FAILURE:
        return { loading: false, roles: [], error: action.payload };
      default:
        return state;
    }
  };
  
  export default rolesReducer;
  