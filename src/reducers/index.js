import { combineReducers } from 'redux'
import productosReducer from './productosReducer'
import alertaReducer from './alertaReducer'

export default combineReducers({
    //Cada reducers va a tener su state
    productos: productosReducer,
    alerta: alertaReducer
})

