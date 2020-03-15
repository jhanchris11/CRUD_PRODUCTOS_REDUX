/*Son funciones que modifican el state */
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
/*1*/

/*--------AXIOS-------- */
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

export function crearNuevoProductoAction(producto) {
    //Aqui se hace las consultas a la bd y tambien se manda a ejecutar el reducer para modificar el state
    return async (dispatch) => {

        //dispatch va ejecutar otras funciones que se va a tener aqui 
        // console.log(producto)
        dispatch(addProducto())

        try {
            //Insertar en la API
            await clienteAxios.post('/productos', producto)

            //Si todo sale bien ,actualiza el state , ya que esto se pasa al state
            dispatch(addProductoExito(producto))

            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )

        } catch (error) {
            console.log(error)

            //Si hay error cambiar el state
            dispatch(addProductoError(true))

            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error , intenta de nuevo '

            })
        }

    }
}

/*payload seria supongamos que la parte que modificaria los datos , lo del state */
const addProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
    // payload:
})
//Si el producto se guarda en la bd
/*Se tiene que hacer el exito porque en estas alturas ya se guardo en bd por 
lo tanto se va a modificar el state y como se va a modificar el state , se pasa un payload(es el modifica el state) .
Lo que esta en parentesis es el action -> ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
*/
const addProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
//Si hubo error
const addProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})


/*-------- FUNCION QUE DESCARGA LOS PRODUCTOS DE LA BD --------*/

export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(downloadProductos())
        try {
            // setTimeout(async () => {
            const respuesta = await clienteAxios.get('/productos')
            dispatch(downloadProductosExito(respuesta.data))
            // }, 3000);


        } catch (error) {
            console.log(error)
            dispatch(downloadProductosError())
        }
    }
}
const downloadProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})
const downloadProductosExito = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})
const downloadProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})



/*-------- FUNCION QUE SELECCIONAR Y ELIMINA EL PRODUCTO --------*/

export function eliminarProductoAction(id) {

    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id))
        try {

            await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())

            //Si se eliminar
            Swal.fire(
                'Eliminado!',
                'El producto se elimino correctamente.',
                'success'
            )

        } catch (error) {
            dispatch(eliminarProductoError())
        }
    }
}

const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

/*-------- FUNCION QUE SELECCIONA EL PRODUCTO --------*/
export function obtenerProductoAction(producto) {

    return (dispatch) => {
        dispatch(obtenerProductoEditar(producto))
    }
}
const obtenerProductoEditar = (producto) => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

/*-------- FUNCION QUE EDITA EN LA API Y STATE --------*/
export function EditarProductoAction(producto) {
    return async (dispatch) => {
        dispatch(editarProducto(producto))
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto)
            dispatch(editarProductoExito(producto))
        } catch (error) {
            dispatch(editarProductoError())
        }
    }
}
const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO
})
const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})
const editarProductoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})