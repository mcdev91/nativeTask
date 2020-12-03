import React from 'react';
import { TouchableHighlight, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
    return (
        <View style={styles.view} >
            <TouchableHighlight onPress={() => { alert('a') }}>
                <Icon name='code' style={styles.icon} size={30} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { alert('b') }}>
                <Icon name='suitcase' style={styles.icon} size={30} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { alert('c') }}>
                <Icon name='users' style={styles.icon} size={30} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { alert('d') }}>
                <Icon name='user' style={styles.icon} size={30} />
            </TouchableHighlight>
        </View >
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: 'center',
        bottom: 180
    },
    icon: {
        color: '#acafb8',
        right: 10,
        marginLeft: 50,
    },
})

export default Footer;