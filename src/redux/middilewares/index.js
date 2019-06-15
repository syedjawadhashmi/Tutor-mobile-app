
import { all } from 'redux-saga/effects'

import Authsaga from './authSaga'


export default function* rootSagas() {
    yield all([
        Authsaga()
    ])
}

