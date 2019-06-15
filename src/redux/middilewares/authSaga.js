
import { call, put, takeLatest } from 'redux-saga/effects'
import { ToastAndroid } from 'react-native'
import * as c from '../constant'
import { auth, database } from '../../constants'

import * as a from '../actions/authActions'






//signup firebase with email and pass
const registerWithEmailPasswordAsync = async (email, password) =>
    await auth.createUserWithEmailAndPassword(email, password)


function* signupWithEmailAndPassword({ payload }) {
    const { email, password, details } = payload
    try {
        const user = yield call(registerWithEmailPasswordAsync, email, password)
        console.log(user)
        //save user data 
        ToastAndroid.show('Signup successful', ToastAndroid.SHORT)
        const uid = auth.currentUser.uid
        database.ref('users/' + uid).set(details)
        yield put(a.signupSuccess(user))
    }
    catch (err) {
        console.log(err)
        ToastAndroid.show(err.message, ToastAndroid.SHORT)
        yield put(a.signupFail(err))
    }
}

// login withEmail&password

const loginWithEmailPasswordAsync = async (email, password) =>
    await auth.signInWithEmailAndPassword(email, password)



function* loginWithEmailAndPassword({ payload }) {
    console.log(payload)
    const { email, password } = payload

    try {
        const user = yield call(loginWithEmailPasswordAsync, email, password)
        ToastAndroid.show('Login successful', ToastAndroid.SHORT)
        yield put(a.loginSuccess(user))
    }
    catch (err) {

        ToastAndroid.show(err.message, ToastAndroid.SHORT)
        yield put(a.loginFail(err.message))
    }

}

export default function* defaulSaga() {
    yield takeLatest(c.SIGNUP, signupWithEmailAndPassword)
    yield takeLatest(c.LOGIN, loginWithEmailAndPassword)
}