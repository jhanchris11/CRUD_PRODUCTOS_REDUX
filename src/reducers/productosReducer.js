
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,

    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,

    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,

    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR


} from '../types'

//Cada reducer tiene su propio state
//En que propiedades tiene que tener el state de productos
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoEliminar: null,
    productoEditar: null
}
//El store le pasa el state y la accion que va a ejecutar
//Todo el reducer es un switch
export default function (state = initialState, action) {
    switch (action.type) {
        /*En esta parte se coloca los keys que van a describir
        lo que va a pasar en la aplicacion y van a ir 
        cambiando el state de acuerdo el payload
        */
        /*2*/
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            /*loading se vuelve false porque ya se guardo en la bd,
             productos porque si tenemos 2 productos y agregamos uno mas, queremos que se
             mantenga esos dos y que agrege el nuevo  */
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case PRODUCTO_EDITADO_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
        case DESCARGA_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productoEliminar: action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoEliminar),
                productoEliminar: null
            }
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                productoEditar: action.payload
            }
        case COMENZAR_EDICION_PRODUCTO:
            return {
                ...state,
            }
        case PRODUCTO_EDITADO_EXITO:
            return {
                ...state,
                productoEditar: null,
                productos: state.productos.map(producto =>
                    producto.id === action.payload.id ? producto = action.payload : producto
                )

            }
        default:
            return state;
    }

}