import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header () {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>My Todo's</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    view: {
        backgroundColor: '#afc7de',
        width: '100%',
        height: 50,
        paddingTop: 15
    }

})