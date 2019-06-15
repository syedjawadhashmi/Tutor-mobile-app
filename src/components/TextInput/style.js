
import { StyleSheet } from 'react-native';
import { brandColors } from '../../constants'
export const styles = StyleSheet.create({
    outerContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: (rounded) => {
        return {

            flexDirection: 'row',
            justifyContent: 'center',
            height: 40,
            alignItems: 'center',
            borderRadius: 33,
            borderWidth: rounded ? 1 : 0,
            borderColor: rounded ? brandColors.darkBrown : null,
            width: '90%',
            // borderBottomWidth: 1,
            // borderBottomColor: 'lightgray',
            marginVertical: 12,
        }


    },
    input: () => {
        return {
            display: 'flex',
            flex: 0.8,
            paddingTop: 20,
            // paddingRight: 20,
            paddingBottom: 10,
            // paddingLeft: 20,
            color: 'black',
            // borderBottomWidth: 0,
            // borderBottomColor: 'transparent',
        }
    }
})