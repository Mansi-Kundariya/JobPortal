import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducerLogout, userReducerSignIn } from '../Redux/Reducers/userReducer';

// Combine reducers
const reducer =  combineReducers({
    signIn : userReducerSignIn,
    logOut: userReducerLogout
})

// Initial state
let InitialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
}; 
const middleware = [thunk];
const store =createStore(reducer, InitialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;