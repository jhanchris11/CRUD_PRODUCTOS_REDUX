import { makeStyles } from '@material-ui/core/styles'
const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default makeStyles({
    container: {
        height: '120vh',
        flexDirection: 'column',
        ...centeredStyleObj
    },
    cardContainer: {
        ...centeredStyleObj,
        flexDirection: 'column',
        width: 500,
        height: 300,
        padding: '2rem'
    },

    title: {
        paddingBottom: 20,
        fontSize: '1.5rem'
    },
    titleContainer: {
        ...centeredStyleObj,
        marginBottom: 8
    },
    itemTextField: {
        marginBottom:14
    },
    item1:{
        marginBottom:10
    },
    item2:{
        marginTop:8
    },
    buttonsContainer: {
        marginTop: '.5rem'
    },
    buttonsError: {
        // ...centeredStyleObj,
        marginTop: '1rem'
    },
    listado: {
        width: 700
    },
    containerListado: {
        ...centeredStyleObj,
        marginTop: 30,
        marginBottom: 30

    },
    titleListado: {
        fontSize: '2rem',
        color: '#4caf50'
    },
    buttonListado:{
        ...centeredStyleObj,
        marginBottom: 30
    }

})