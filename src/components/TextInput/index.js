import React from 'react';
import { View, Text, } from 'react-native';
import { Input } from 'react-native-elements'

import { styles } from './style'

const InputText = (
    {
        placeholder = "Login ID",
        keyboardType = "default",
        handleChange,
        underlineColor = "",
        secureTextEntry = false,
        text,
        icon,
        rounded = false,
        name = '',
        value = ''

    }


) => {
    return (
        <View style={styles.outerContainer}>
            <View
                style={styles.inputContainer(rounded)}
            >

                <Input
                    inputStyle={{ paddingLeft: 10, fontSize: 14 }}
                    leftIconContainerStyle={{ paddingLeft: 0 }}
                    leftIcon={icon}
                    // label="Email"
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor='lightgray'
                    keyboardType={keyboardType}
                    onChangeText={(value) => handleChange(name, value)}
                    value={value}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    )
}
export default InputText