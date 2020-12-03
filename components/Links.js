import React from 'react';
import { TouchableHighlight, Image, Text, View, StyleSheet } from 'react-native';

const Links = ({ label }) => {
    return (
        <View style={styles.view} >
            <Text style={styles.text}>{label}</Text>
            <View style={styles.linksview}>
                <Image
                    source={require('../assets/img/csharp.png')}
                    style={styles.img}
                />
                <Image
                    source={require('../assets/img/html.png')}
                    style={styles.img}
                />
                <Image
                    source={require('../assets/img/java.jpg')}
                    style={styles.img}
                />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    view: {
        height: 100,
        bottom: 225
    },
    linksview: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        left: 18,
        bottom: 5
    },
    img: {
        height: 80,
        width: 80,
        margin: 25,
        resizeMode: "stretch",
        borderWidth: 1,
        borderColor: '#f2f4f9',
        right: 3 
    },
})

export default Links;