//rafce
import React from 'react'
import { Link } from 'react-router-dom'


import { Container, Typography, Card, Grid, Button } from '@material-ui/core'
import { ProductIcon } from '../../icons'

import styles from './Style';

const Header = () => {
    const classes = styles();
    return (

        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleContainer}>
                    <Typography className={classes.title}>
                        <Link style={{ textDecoration: 'none', color: "brown" }} to={'/'}>
                            CRUD - Productos
                     </Link>
                    </Typography>
                    <Grid>
                        <ProductIcon  className={classes.productIcon}/>
                    </Grid>
                </Grid>

                <Grid className={classes.buttonsContainer}>

                    <Button variant="contained" color="primary" size="large">
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/listado'}>
                            Listado de  Producto &#43;
                     </Link>
                    </Button>

                    <Button variant="contained" className={classes.addButton}>

                        <Link style={{ textDecoration: 'none', color: 'white' }} to={'/productos/nuevo'}>
                            Agregar Producto &#43;
                         </Link>

                    </Button>
                </Grid>
            </Card>
        </Container>

    )
}

export default Header
