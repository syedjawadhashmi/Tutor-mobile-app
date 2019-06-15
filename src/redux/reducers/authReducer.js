
import { fromJS } from 'immutable';

import * as c from '../constant'

const initialState = {
    isloggedin: false,
    loading: false,
    error: ''
}


export default authReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.LOGIN:
            return { ...state, loading: true }
        case c.LOGIN_SUCCESS:
            return { ...state, loading: false }
        case c.LOGIN_FAIL:
            return { ...state, loading: false, error: action.payload }

        case c.SIGNUP:
            return { ...state, loading: true }
        case c.SIGNUP_SUCCESS:
            return { ...state, loading: false }
        case c.SIGNUP_FAIL:
            return { ...state, loading: false, error: action.payload }

        default: {
            return state
        }


    }

}