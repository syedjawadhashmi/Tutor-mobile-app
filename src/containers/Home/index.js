

import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';

import { brandColors } from '../../constants';

var _this = null
export default class Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Hudson Pharma',
        headerStyle: {
            backgroundColor: brandColors.lightGreen,
        },
        headerTintColor: brandColors.darkBrown,
        titleStyle: {
            textAlign: 'center',
            alignSelf: 'center'
        },

        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 15,
            textAlign: 'center',
            flex: 1,
        },
        headerLeft: <Icon
            name="more-vertical"
            type="feather"
            size={25}
            color={brandColors.darkBrown}
            iconStyle={{ paddingLeft: 10 }}
            onPress={() => { navigation.openDrawer(); }}
        />,
        headerRight: (
            <TouchableOpacity onPress={() => _this.logout()}>
                <Icon
                    name="home"

                    size={25}
                    color={brandColors.darkBrown}
                    iconStyle={{ paddingRight: 10 }}
                    onPress={() => { navigation.openDrawer(); }}
                />
            </TouchableOpacity>
        ),
    });
    constructor(props) {
        super(props)
        _this = this
    }
    render() {
        return (
            <View>
                <Text>Welcom to home screen</Text>
            </View>
        )
    }
}