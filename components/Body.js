import React from 'react';
import { TouchableHighlight, Image, Text, View, StyleSheet } from 'react-native';

const Body = ({label}) => {
    return (
            <View style={styles.view} >
                <Text style={styles.text}>{label}</Text>
                <Image
                    style={styles.hiring}
                    source={require('../assets/img/hiring.jpg')}
                />
            </View >
    );
}

const styles = StyleSheet.create({
    view: {
        height: 500,
        top: 30
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        left: 18,
        bottom: 5
    },
    hiring: {
        width: 350,
        height: 200,
        left: 18,
        resizeMode: "stretch",
        borderWidth: 1,
        borderColor: '#f2f4f9',
    }
})

export default Body;