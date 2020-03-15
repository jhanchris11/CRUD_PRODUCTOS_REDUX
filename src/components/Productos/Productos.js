import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Paper, TableRow, TableHead, TableCell, Table, TableBody, Container, Typography, Grid, Button } from '@material-ui/core'

// import styles from './Style';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux'

/* ------Actions de Redux ------ */
import { obtenerProductosAction } from '../../actions/productoAction'
import Producto from './Producto';

import styles from './Style';


const Productos = () => {
    // const StyledTableCell = withStyles(theme => ({
    //     head: {
    //         backgroundColor: theme.palette.common.black,
    //         color: theme.palette.common.white,
    //     },
    //     body: {
    //         fontSize: 14,
    //     },
    // }))(TableCell);
    const classes = styles();

    const dispatch = useDispatch();

    useEffect(() => {
        //Consultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction())
        cargarProductos()
        // eslint-disable-next-line
    }, [])

    const productos = useSelector(state => state.productos.productos)
    const error = useSelector(state => state.productos.error)
    const loading = useSelector(state => state.productos.loading)

    return (
        // <Container className={classes.container}>
        //     <Card className={classes.cardContainer}>
        <Container className={classes.listado}>
            {/* <Card> */}
            <Grid className={classes.containerListado}>
                <Typography className={classes.titleListado} >Listado de Productos</Typography>
            </Grid>
            <Grid className={classes.buttonListado}>
                <Button variant="contained" >
                    <Link style={{ textDecoration: 'none', color: 'orange' }} to={'/'}>
                        Menu Principal
                    </Link>
                </Button>
            </Grid>

            <Paper>


                {error ? <Alert severity="error" >Hubo un error </Alert> : null}
                {loading ? <Alert severity="success" >Cargando ... </Alert> : null}
                <Table>
                    {/* <TableContainer> */}
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    {/* </TableContainer> */}
                    <TableBody>
                        {productos.length === 0 ? 'No hay productos' : (
                            productos.map(producto => (
                                <Producto
                                    key={producto.id}
                                    producto={producto}
                                />
                            ))
                        )}
                    </TableBody>
                </Table>
            </Paper>
            {/* </Card> */}
        </Container>
    )
}

export default Productos
