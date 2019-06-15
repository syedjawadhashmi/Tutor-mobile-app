
import * as c from '../constant';


// login actions
export const login = (payload) => (
    {
        type: c.LOGIN,
        payload
    }
)
export const loginSuccess = (payload) => (
    {
        type: c.LOGIN_SUCCESS,
        payload
    }
)
export const loginFail = (payload) => (
    {
        type: c.LOGIN_FAIL,
        payload
    }
)

//signup actions
export const signup = (payload) => (
    {
        type: c.SIGNUP,
        payload
    }
)
export const signupSuccess = (payload) => (
    {
        type: c.SIGNUP_SUCCESS,
        payload
    }
)
export const signupFail = (payload) => (
    {
        type: c.SIGNUP_FAIL,
        payload
    }
)
