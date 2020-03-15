import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

/*------- Material-UI ----*/
import { TableRow, TableCell, Button } from '@material-ui/core'
import styles from '../Home/Style'

/*-------- ACTION -------*/
import { eliminarProductoAction,obtenerProductoAction } from '../../actions/productoAction'


import Swal from 'sweetalert2'
const Producto = ({ producto }) => {
    const { nombre, precio, id } = producto
    const classes = styles()

    const dispatch = useDispatch()
    const history = useHistory() //habilitar history para redireccion

    //Confirmar si desea eliminarlo
    const confirmarEliminarProducto = (id) => {

        //preguntar al usuario
        Swal.fire({
            title: 'Estas seguro?',
            text: "El producto sera eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si , eliminar !',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                //Pasar al action
                dispatch(eliminarProductoAction(id))
            }
        })
    }
    //Funcion que redirige de forma programada  , y poner activo el producto
    const redireccionarEdicion = producto => {

        dispatch(obtenerProductoAction(producto))
        
        history.push(`/productos/editar/${producto.id}`)

    }

    return (
        <TableRow>
            <TableCell>{nombre}</TableCell>
            <TableCell>${precio}</TableCell>
            <TableCell>
                <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={() => redireccionarEdicion(producto)}
                >
                    Editar
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.buttonDelete}
                    onClick={() => confirmarEliminarProducto(id)}
                >
                    Eliminar
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default Producto
