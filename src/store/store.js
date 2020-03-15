
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
const store = createStore(
    reducer,
    //Se necesita thunk 
    compose(applyMiddleware(thunk),
        /* Se coloca el codigo para utilizar
         redux developer tools , no nos va a servir la 
         herramienta de react developer tools para trabajar con 
         redux  , hay una herramienta especialmente diseñada para
         redux */
        /*Va a detectar si tenemos react developer tools */

        /*En el caso que el navegador no tiene redux developer tools */

        //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__() !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)
export default store