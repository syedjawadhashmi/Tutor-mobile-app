

import React, { Fragment, Component } from 'react';

import { TextInput, Button } from '../../components';
import { Text, View, Image, TouchableOpacity } from 'react-native'
import LoginHoc from '../../containers/LoginHoc';
import { Icon, SocialIcon } from 'react-native-elements';
import { brandColors } from '../../constants';
import { styles } from './styles';


class LoginForm extends Component {
    render() {
        const { navigate, onChange,
            handleCustomLogin, handleGoogleLogin, handleFbLogin, states, loading } = this.props;
        return (
            <Fragment>
                <View style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                    <TextInput
                        rounded={false}
                        placeholder="Email"
                        keyboardType="default"
                        handleChange={onChange}
                        underlineColor="black"
                        secureTextEntry={false}
                        value={states.email}
                        name="email"
                        icon={<Icon
                            size={20}
                            name="mail"
                            type="octicon"
                            color={brandColors.darkBrown} />}
                    />
                    <TextInput
                        name="password"
                        placeholder="Password"
                        keyboardType="default"
                        handleChange={onChange}
                        underlineColor="black"
                        secureTextEntry={true}
                        value={states.password}
                        icon={
                            <Icon
                                size={26}
                                name="lock"
                                type="evilicon"
                                containerStyle={{ marginHorizontal: -5 }}
                                color={brandColors.darkbrown}
                            />}
                    />
                    <View style={{ width: '85%' }}>
                        <Text style={{ alignSelf: 'flex-end' }} >Forget Password ?</Text>
                    </View>
                    <Button
                        loading={loading}
                        backgroundColor="#EA4335"
                        Title="Login"
                        onPress={() => handleCustomLogin()}
                        rounded={true}
                    />
                    <View style={styles.loginWith}>
                        <Text>Or</Text>
                        <Text>Login with</Text>
                    </View>
                    <View style={styles.socialFooter}>
                        <TouchableOpacity onPress={() => handleGoogleLogin()} style={{
                            width: 120,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            height: 40,
                            borderRadius: 100,
                            backgroundColor: '#fff',
                            elevation: 5
                        }}>
                            <Image style={{ width: 50, height: 50, marginLeft: -15 }} source={require('../../assets/logo/google-logo.png')} />
                            <Text style={{ color: '#000' }}>Google</Text>
                        </TouchableOpacity>
                        <SocialIcon
                            onPress={() => handleFbLogin()}
                            style={{ width: 120, height: 40, elevation: 5, color: 'black', padding: 15, marginTop: 0 }}
                            iconStyle={{ width: 20 }}
                            title='Facebook'
                            button
                            type='facebook'
                        />
                    </View>
                    <View style={styles.signupLink}>
                        <Text >Don't Have An Account?</Text>
                        <TouchableOpacity
                            onPress={() => navigate('Signup')}
                        >
                            <Text style={{ fontWeight: 'normal', color: '#000' }}>  Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Fragment >
        )
    }

}
export default LoginHoc(LoginForm)


