import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Logo = () => {
    return (
            <View style={styles.view} >
                <Image
                    source={require('../assets/img/logo.png')}
                    style={styles.logo}
                />
            </View >
    );
}

const styles = StyleSheet.create({
    view: {
        height: 'auto',
        justifyContent: "center",
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    logo: {
        height: 100,
        width: 100,
        bottom: 190
    },
    hmm: {
    }
})

export default Logo;