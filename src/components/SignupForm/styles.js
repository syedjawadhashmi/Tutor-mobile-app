import { brandColors } from '../../constants'
export const styles = {
    heading: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: brandColors.darkBrown
    },
    checkbox: {
        height: 50,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        flex: 1,
        flexDirection: 'column'
    },
    checkboxText: {
        fontSize: 20,
        color: brandColors.darkBrown,
    },
    loginWith: {
        justifyContent: 'center',
        alignItems: 'center', display: 'flex',
    },
    socialFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        padding: 10,
        alignSelf: 'center'
    },
    signupLink: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        padding: 5,
        alignSelf: 'center'
    }
}