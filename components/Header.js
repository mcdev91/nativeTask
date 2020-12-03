import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({profile}) => {
    return (
        <View style={styles.view} >
            <TouchableHighlight style={styles.touch} onPress={() => { alert('profile') }}>
                <Text style={styles.text}>Welcome {profile}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { alert('comments') }}>
                <Icon name='comment' style={styles.icon} size={30} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { alert('notifications') }}>
                <Icon name='bell' style={styles.icon} size={30} />
            </TouchableHighlight>
        </View >
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: '#ffffff',
        height: 50,
        top: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: 'center',
    },
    icon: {
        color: '#acafb8',
        right: 10,
        marginLeft: 50,
    },
    text: {
        color: '#27a3b2',
        fontSize: 20,
        fontWeight: 'bold',
        right: 40
    },
    touch: {
        width: 'auto',
    }
})

export default Header;