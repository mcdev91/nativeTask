import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LevelCounter = () => {
    return (
        <View style={styles.view} >
            <Text style={styles.text}>Level Counter</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </View >
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#ffffff',
        height: 100,
        resizeMode: "stretch",
        borderWidth: 1,
        borderColor: '#f2f4f9',
        bottom: 220,
        width: 340,
        left: 23
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        left: 18,
        top: 15
    },
    description: {
        fontSize: 12,
        fontWeight: 'bold',
        left: 18,
        top: 15,
        color: 'grey'
    }
})

export default LevelCounter;