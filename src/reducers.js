import { LOGIN, LOGOUT } from './constants';

const initialState = {
  isAuthenticated: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case LOGOUT:
      return { ...state, isAuthenticated: action.payload.isAuthenticated };

    default:
      return state;
  }
};

const reducers = {
  loginReducer
};

export default reducers;