/**
 *  start of Login container
 */
import React, { Component } from 'react';
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LoginForm, ImageHeader } from '../../components'

class Login extends Component {
    static navigationOptions = {
        header: null,
        // drawerLockMode: 'locked-closed'
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.InputContainer}>
                <KeyboardAwareScrollView contentContainerStyle={{ justifyContent: 'center', display: 'flex' }}>
                    <ImageHeader
                    // verticalHeight={20}
                    />
                    <LoginForm
                        navigate={navigate}
                    />
                </KeyboardAwareScrollView >
            </View>
        )
    }
}
export default Login

// end of Login container
const styles = {
    InputContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        // alignItems:'center',
        // width:'100%',
        backgroundColor: 'white',
    }
}