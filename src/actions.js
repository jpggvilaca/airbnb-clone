import { LOGIN, LOGOUT } from './constants';

export const loginUser = () => ({ type: LOGIN, payload: { isAuthenticated: true } });
export const logoutUser = () => ({ type: LOGOUT, payload: { isAuthenticated: false } });