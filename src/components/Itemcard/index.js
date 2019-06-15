import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements'
import { brandColors } from '../../constants';

class ItemCard extends Component {
   render() {
       const { name, type, category } = this.props
        return (   
            <Card
                containerStyle={{ paddingLeft: 2, paddingRight: 5 }}
            >
                <View style={styles.cardcontainer}>
                    <View style={styles.itemFirst}>
                        <Text style={styles.text}> { name }</Text>
                    </View>
                    <View style={styles.itemSecond}>
                        <Text style={styles.text}>{ type }</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.text}>{ category }</Text>
                    </View>
                    <Button
                        buttonStyle={{
                            marginLeft: 8,
                            backgroundColor: brandColors.lightGreen,
                            fontWeight: 'bold'
                        }}
                        title='Execute'
                        containerStyle={{ padding: 5, marginRight: 5, }}
                    />
                </View>
            </Card>
        )
   }
}
export default ItemCard;
const { width } = Dimensions.get('window');
const styles = {
    cardcontainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 50,
        paddingLeft: 0,
    },
    itemFirst: {
        height: 50,
        justifyContent: 'center',
        marginLeft: 0,
        alignItems: 'center',
        width: width/5
    },
    itemSecond: {
        height: 50,
        flexGrow: 1,
        justifyContent: 'center',
        marginLeft: 10,
        alignItems: 'center',
        padding: 10,
        width: width/10
    },
    item: {
        height: 50,
        marginLeft: 10,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        width: width/6
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14
    }
}