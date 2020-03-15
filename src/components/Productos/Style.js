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
        fontSize: '1.5rem'
    },
    titleContainer: {
        ...centeredStyleObj,
        marginBottom: 8
    },
    itemTextField: {
        marginBottom: 10
    },
    buttonsContainer: {
        marginTop: '.5rem'
    },
    buttonsError: {
        // ...centeredStyleObj,

        marginTop: '1rem'
    }

})