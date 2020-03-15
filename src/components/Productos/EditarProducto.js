import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core'
import styles from './Style';
import { useSelector, useDispatch } from 'react-redux';
import { EditarProductoAction } from '../../actions/productoAction'
const EditarProducto = ({history}) => {

    const classes = styles();

    const dispatch = useDispatch()

    //Nuevo state de producto
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    })

    //Producto a editar
    const productoEditar = useSelector(state => state.productos.productoEditar)
    // if (!producto) return null

    //Llenar el state automaticamente
    useEffect(() => {
        guardarProducto(productoEditar)
    }, [productoEditar])

    //Leer los datos del formulario

    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })

    }

    const { nombre, precio } = producto

    const handleEditarProducto = e => {
        e.preventDefault()

        dispatch(EditarProductoAction(producto))

        history.push('/listado')
    }

    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Typography className={classes.title}>
                    <Link style={{ textDecoration: 'none', color: "darkcyan" }} to={'/'}> Editar Producto
               </Link>
                </Typography>
                <Grid container className={classes.titleContainer}>

                    <Grid className={classes.itemTextField}>
                        <Grid item>
                            <TextField
                                type="text"
                                label="Nombre del Producto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeFormulario}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                type="number"
                                label="Precio del Producto"
                                name="precio"
                                value={precio}
                                onChange={onChangeFormulario}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.buttonsContainer} >
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.addButton}
                        color="primary"
                        onClick={handleEditarProducto}
                    >
                        Guardar Cambios
                </Button>
                </Grid>

            </Card>
        </Container>
    )
}

export default EditarProducto
