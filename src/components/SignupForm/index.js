


import React, { Fragment, Component } from 'react';

import { TextInput, Button } from '../../components';
import { Text, View, StyleSheet, DatePickerAndroid, TouchableOpacity } from 'react-native'
import LoginHoc from '../../containers/LoginHoc';
import { CheckBox, Icon, SocialIcon } from 'react-native-elements';
import { brandColors } from '../../constants';
import { styles } from './styles';



class SignupForm extends Component {
    state = {
        date: new Date(2019, 6, 12),
        selectedDate:''
    }
    showDatePicker = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date(2020, 4, 25)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                var date = new Date(year,month,day)
                var dateString = date.toLocaleDateString();
                this.setState({selectedDate:dateString})
                // Selected year, month (0-11), day
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }
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
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', marginLeft: 10 }}>
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
                </View>
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
                <TouchableOpacity style={{width:'85%',marginLeft:30,height:40,alignItems:'center',flexDirection:'row',borderBottomWidth:0.5,borderBottomColor:'#000'}} onPress={this.showDatePicker.bind(this)}>
                    <Icon
                        size={20}
                        name="event"
                        containerStyle={{marginLeft:12}}
                        color={brandColors.darkBrown} />
                        <Text style={{marginLeft:10,color:'#d5d5d5'}}>{this.state.selectedDate?this.state.selectedDate:'Birth Date'}</Text>
                </TouchableOpacity>
                {/* <TextInput
                    name="birthDay"
                    rounded={false}
                    placeholder="Birthday"
                    keyboardType="default"
                    handleChange={onChange}
                    underlineColor="black"
                    secureTextEntry={false}
                    value={states.birthDay}
                    icon={}
                /> */}
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


