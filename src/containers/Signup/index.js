/**
 *  start of Login container
 */
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SignupForm, ImageHeader } from '../../components'
import { Icon } from 'react-native-elements';

class Signup extends Component {
    static navigationOptions = {
        header: null,
        // drawerLockMode: 'locked-closed'
    }
    render() {
        return (
            <View style={styles.InputContainer}>
                <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Icon name="chevron-left" type="feather" containerStyle={{ justifyContent: 'flex-start', alignItems: 'flex-start', margin: 5 }} />
                </TouchableOpacity>
                <KeyboardAwareScrollView contentContainerStyle={{ justifyContent: 'center', display: 'flex' }}>
                    <ImageHeader
                        verticalHeight={5}
                    />
                    <SignupForm />
                </KeyboardAwareScrollView >
            </View >
        )
    }
}
export default Signup

// end of Login container
const styles = {
    InputContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    }
}