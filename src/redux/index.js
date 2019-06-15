
/**
 * store configuration
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import { allReducers } from './reducers'

import rootSaga from './middilewares'

const sagaMiddleWare = createSagaMiddleWare()

const middileWareEnhancer = compose(applyMiddleware(sagaMiddleWare))
const store = createStore(allReducers, middileWareEnhancer)
sagaMiddleWare.run(rootSaga)

export default store