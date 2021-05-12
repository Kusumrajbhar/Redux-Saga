import rootReducer from './reducer/RootReducer'
import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware  from 'redux-saga'
import {watchAgeUp} from './sagas/Saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchAgeUp) //to run it
export default store

//watchAgeUp generator function from sagas it is applied tomidlware to run and execute the ageUp 
//after 4 sec of delay i.e asynchronously