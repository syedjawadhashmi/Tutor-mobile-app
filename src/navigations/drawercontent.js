import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { ImageHeader } from '../components';
import { navigationOptions, brandColors } from '../constants'

class NavigationMenu extends Component {
    state = {
        name: '',
        activeTab: 1,
        affiliationCode: ''
    };

    logout = () => {
        AsyncStorage.removeItem('userData')
        this.props.navigation.navigate('Auth')
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ScrollView style={{ marginTop: 0, width: '100%' }}>
                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <ImageHeader
                            verticalHeight={0}
                        />
                    </View>
                    {
                        navigationOptions.map((option, index) => {
                            return (<TouchableOpacity
                                onPress={() => option.navigateTo ? navigate(option.navigateTo) : ''}
                                style={styles.section}
                            >
                                <Icon name='schedule' color={brandColors.darkBrown} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}>
                                    <Text style={styles.sectionHeadingStyle}>{option.label}</Text>
                                </View>
                            </TouchableOpacity>)
                        })
                    }
                </ScrollView>
                <TouchableOpacity
                    style={{ width: '90%', marginTop: 10 }}>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = new StyleSheet.create({

    container: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },

    sectionHeadingStyle: {
        paddingHorizontal: 5,
        color: brandColors.darkBrown,
        fontSize: 16,
        textAlignVertical: 'center',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    section: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 20,
        marginLeft: 20,
        borderBottomColor: '#a9b1bc',
        borderBottomWidth: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
});

NavigationMenu.propTypes = {
    navigation: PropTypes.object
};

// const mapStateToProps = ({ auth }) => {
//     const { loading, user } = auth;
//     return { loading, user };
// };


// export default connect(mapStateToProps, {
//     getUser
// })(NavigationMenu);

export default NavigationMenu