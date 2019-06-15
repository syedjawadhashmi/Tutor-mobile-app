import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    ActivityIndicator
} from 'react-native';


const Button = (props) => {

    getButtonStylings = () => {
        const { rounded, backgroundColor, } = props
        return {

            borderRadius: rounded ? 30 : 0,
            width: '80%',
            height: 45,
            elevation: 5,
            backgroundColor: backgroundColor || '#8dc23c',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderColor: 'transparent',
        }
    }
    const {
        Title,
        icon,
        onPress,
        loading,
        rounded = false
    } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={onPress}
                style={getButtonStylings()}
            >
                {loading ?
                    // <Text>loading...</Text>
                    <ActivityIndicator
                        color="white"
                        size="small"
                    />
                    :
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'normal' }}>
                        {Title}
                    </Text>
                }

                {icon}
            </TouchableOpacity>

        </View>
    );
}

export default Button;
const styles = new StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,

    },
    button: {
        borderRadius: 30,
        width: '80%',
        height: 50,
        backgroundColor: '#8dc23c',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    }
})

