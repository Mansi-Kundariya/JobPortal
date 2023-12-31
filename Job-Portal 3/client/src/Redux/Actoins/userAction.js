import axios from 'axios';
import { toast } from "react-toastify";
import {
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS
} from '../Constants/userConstants';

// Sign in action
export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post('http://localhost:8000/api/signin', user);
        
        //after refresh page(userInfo) still remain same
        localStorage.setItem('userInfo', JSON.stringify(data)); 
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        toast.success("Login Successfully!");

    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

// User profile action
export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get('http://localhost:8000/api/me');
        dispatch({
            type: USER_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

// Log out action
export const userLogoutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        const { data } = await axios.get('http://localhost:8000/api/logout');
        localStorage.removeItem('userInfo');
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
    }
}