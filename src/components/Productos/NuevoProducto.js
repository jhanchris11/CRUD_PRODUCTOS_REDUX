import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import styles from './Style';


import { useDispatch, useSelector } from 'react-redux'

/* ------Actions de Redux ------ */
import { crearNuevoProductoAction } from '../../actions/productoAction.js'

const NuevoProducto = ({ history }) => {

    const classes = styles();

    //State del Componente
    const [nombre, guardarNombre] = useState('')
    const [precio, guardarPrecio] = useState(0)

    //utilizar useDispatch y te crea una funcion (o retorna una funcion)
    const dispatch = useDispatch()

    //Acceder el state del store 
    const cargando = useSelector(state => state.productos.loading)
    const error = useSelector(state => state.productos.error)

    /*Mandar llamar al action de productoAction */
    /*dispatch va a mandar a ejcutar otra funcion que en este caso seria crear... , 
    se usa para llamar las funciones que tienes en los actions*/
    /*0*/
    //para que tome un producto
    const addProducto = producto => dispatch(crearNuevoProductoAction(producto))



    const handleNewProduct = e => {
        e.preventDefault()

        //Validar formulario
        if (nombre.trim() === '' || precio <= 0) {
            console.log(precio)
            return

        }
        //si no hay errores
        //crear el nuevo producto
        addProducto({
            nombre,
            precio
        })

        //Redireccionar
        history.push('/listado')
    }

    return (
        <Container className={classes.container} >
            <Card className={classes.cardContainer}>
                <Typography className={classes.title}>
                    <Link style={{ textDecoration: 'none', color: "darkcyan" }} to={'/'}> Agregar Nuevo Producto
                   </Link>
                </Typography>
                <Grid container className={classes.titleContainer}>

                    <Grid className={classes.itemTextField}>
                        <Grid item>
                            <TextField type="text"
                                label="Nombre del Producto"
                                name="nombre"
                                value={nombre}
                                onChange={e => guardarNombre(e.target.value)}

                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                type="number"
                                label="Precio del Producto"
                                name="precio"
                                value={precio}
                                onChange={e => guardarPrecio(Number(e.target.value))}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.buttonsContainer} >
                    <Button type="submit" variant="contained" onClick={handleNewProduct} className={classes.addButton} color="primary">
                        Agregar Producto
                    </Button>

                </Grid>
                <Grid className={classes.buttonsError} >
                    {error ? <Alert severity="error" >Hubo un error </Alert> : null}
                </Grid>
                {/* {cargando ? <p>Cargando ...</p> : null} */}

            </Card>

        </Container>
    )
}

export default NuevoProducto
