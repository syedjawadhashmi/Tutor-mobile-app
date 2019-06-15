


import React, { Fragment, Component } from 'react';

import { TextInput, Button } from '../../components';
import { Text, View, StyleSheet } from 'react-native'
import LoginHoc from '../../containers/LoginHoc';
import { CheckBox, Icon, SocialIcon } from 'react-native-elements';
import { brandColors } from '../../constants';
import { styles } from './styles';



class SignupForm extends Component {

    render() {
        const { email, password,
            onChange,
            handleCustomSignup,
            states,
            loading
        } = this.props;
        console.log(onChange)
        return (
            <Fragment>
                <TextInput
                    rounded={false}
                    placeholder="Firs Name"
                    keyboardType="default"
                    handleChange={onChange}
                    underlineColor="black"
                    secureTextEntry={false}
                    name="firstName"
                    value={states.firstName}
                    icon={<Icon
                        size={20}
                        name="user"
                        type="feather"
                        color={brandColors.darkBrown} />}
                />
                <TextInput
                    rounded={false}
                    name="lastName"
                    placeholder="Last Name"
                    keyboardType="default"
                    handleChange={onChange}
                    underlineColor="black"
                    secureTextEntry={false}
                    value={states.lastName}
                    icon={<Icon
                        size={20}
                        name="user"
                        type="feather"
                        color={brandColors.darkBrown} />}
                />
                <TextInput
                    rounded={false}
                    placeholder="Email"
                    name="email"
                    keyboardType="default"
                    handleChange={onChange}
                    underlineColor="black"
                    secureTextEntry={false}
                    value={states.email}
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
                            containerStyle={{ marginHorizontal: -5 }}
                            type="evilicon"
                            color={brandColors.darkbrown}
                        />}
                />


                <TextInput
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    keyboardType="default"
                    handleChange={onChange}
                    underlineColor="black"
                    secureTextEntry={true}
                    value={states.confirmPassword}
                    icon={
                        <Icon
                            size={26}
                            name="lock"
                            containerStyle={{ marginHorizontal: -5 }}
                            type="evilicon"
                            color={brandColors.darkbrown}
                        />}
                />
                <TextInput
                    name="birthDay"
                    rounded={false}
                    placeholder="Birthday"
                    keyboardType="default"
                    handleChange={onChange}
                    underlineColor="black"
                    secureTextEntry={false}
                    value={states.birthDay}
                    icon={<Icon
                        size={20}
                        name="event"
                        color={brandColors.darkBrown} />}
                />
                <Button
                    loading={loading}
                    backgroundColor="#EA4335"
                    Title="Register"
                    onPress={() => handleCustomSignup()}
                    rounded={true}
                />

            </Fragment >
        )
    }

}
export default LoginHoc(SignupForm)


