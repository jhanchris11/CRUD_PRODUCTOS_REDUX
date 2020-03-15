import { combineReducers } from 'redux'
import productosReducer from './productosReducer'

export default combineReducers({
    //Cada reducers va a tener su state
    productos: productosReducer
})
