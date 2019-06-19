import React, { Component } from 'react';

import { LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { connect } from 'react-redux';

import * as a from '../../redux/actions/authActions'

const LoginHOC = (WrappedComponent) => {

    const Wrapper = () => {
        return (
            class extends Component {
                state = {
                    email: '',
                    password: '',
                    rememberMe: false,
                    loading: false,
                    firstName: '',
                    lastName: '',
                    confirmPassword: '',
                    birthDay: '',
                };
                static navigationOptions = {
                    // header: null,
                    drawerLockMode: 'locked-closed'
                }
                componentDidMount() {
                    GoogleSignin.configure({
                        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
                        webClientId: '238002584387-ep6jp147h9je00bv2cdrof9b6kv8in1f.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
                        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
                        hostedDomain: '', // specifies a hosted domain restriction
                        loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
                        forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
                        accountName: '', // [Android] specifies an account name on the device that should be used
                        iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
                    });
                }

                onChange = (name, value) => {
                    console.log(name, value)
                    this.setState({ [name]: value });
                }

                //custom signup

                handleCustomSignup = () => {

                    const { email, password, lastName, firstName, birthDay } = this.state
                    const details = {
                        firstName,
                        lastName,
                        email,
                        birthDay
                    }
                    this.props.customSignup({ email, password, details })
                }
                // custom login
                handleCustomLogin = () => {
                    const { email, password } = this.state

                    this.props.customLogin({ email, password })
                }

                //  google signin
                handleGoogleLogin = async () => {
                    try {
                        await GoogleSignin.hasPlayServices();
                        const userInfo = await GoogleSignin.signIn();
                        this.setState({ userInfo });
                        alert('loginsucccess')
                        console.log("==>user", userInfo)
                    } catch (error) {
                        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                            // user cancelled the login flow
                        } else if (error.code === statusCodes.IN_PROGRESS) {
                            // operation (f.e. sign in) is in progress already
                        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                            // play services not available or outdated
                        } else {
                            // some other error happened
                            alert("loginsucccess")
                        }
                    }
                };

                // facebooklogin
                handleFbLogin() {
                    LoginManager.logInWithReadPermissions(['public_profile']).then(
                        function (result) {
                            console.log(result)
                            if (result.isCancelled) {
                                alert('Login was cancelled');
                            } else {
                                alert('Login was successful with permissions: '
                                    + result.grantedPermissions.toString());
                            }
                        },
                        function (error) {
                            alert('Login failed with error: ' + error);
                        }
                    );
                }

                render() {
                    const { email, password, loading, rememberMe } = this.state;
                    return (
                        <WrappedComponent
                            handleGoogleLogin={this.handleGoogleLogin}
                            handleFbLogin={this.handleFbLogin}
                            states={this.state}
                            loading={this.props.loading}
                            onChange={(name, value) => this.onChange(name, value)}
                            handleCustomSignup={this.handleCustomSignup}
                            handleCustomLogin={this.handleCustomLogin}
                            onSubmit={this.onSubmit}
                            {...this.props}
                        />
                    )
                }

            }
        )
    }
    const mapStateToProps = (state) => {
        return {
            loading: state.Auth.loading,
            isloggedin: state.Auth.isloggedin,
            error: state.Auth.error
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return {
            customSignup: (payload) => dispatch(a.signup(payload)),
            customLogin: (payload) => dispatch(a.login(payload))
        }

    }
    return connect(mapStateToProps, mapDispatchToProps)(Wrapper())

}


export default LoginHOC
