import { makeStyles } from '@material-ui/core/styles'

const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...centeredStyleObj
    },
    cardContainer: {
        ...centeredStyleObj,
        flexDirection: 'column',
        width: 500,
        height: 200,
        padding: '2rem'
    },
    title: {
        fontSize: '2rem'
    },
    titleContainer: {
        ...centeredStyleObj,
        marginBottom: 8
    },
    addButton: {
        marginLeft: '.7rem'
    },
    buttonsContainer: {
        marginTop: '.5rem'
    },
    productIcon: {
        marginLeft: '.7rem',
        fontSize: '4rem',
        color: 'blue'
    },
    buttonDelete: {
        marginLeft: '.7rem'
    }

})
