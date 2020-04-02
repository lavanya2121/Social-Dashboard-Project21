
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersDataReducers from '../reducers/userReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        usersData:usersDataReducers
    }),applyMiddleware(thunk))
    return store
}

export default configureStore