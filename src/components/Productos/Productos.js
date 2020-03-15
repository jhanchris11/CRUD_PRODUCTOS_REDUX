import React, { useEffect } from 'react'
import { Paper, TableRow, TableHead, TableCell, Table, Card, TableBody, Typography, Container } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styles from './Style';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux'

/* ------Actions de Redux ------ */
import { obtenerProductosAction } from '../../actions/productoAction'
import Producto from './Producto';


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
    // const classes = styles();

    const dispatch = useDispatch();

    useEffect(() => {
        //Consultar la api
        const cargarProductos = () => dispatch(obtenerProductosAction())
        cargarProductos()
        // eslint-disable-next-line
    }, [])

    const productos = useSelector(state => state.productos.productos)
    const error = useSelector(state => state.productos.error)
    const loading = useSelector(state=>state.productos.loading)

    return (
        // <Container className={classes.container}>
        //     <Card className={classes.cardContainer}>
        <Container>
            {/* <Card> */}
            <Paper>
                {/* <Typography>Listadoo de Productos</Typography> */}

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
