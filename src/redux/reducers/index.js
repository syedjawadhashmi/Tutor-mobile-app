/**
 *  all reducers will be import here
 */
import { combineReducers } from 'redux';
import { fromJS } from 'immutable'
import AuthReducer from './authReducer';



export const allReducers = combineReducers({
    Auth: AuthReducer
})