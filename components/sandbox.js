import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function SandBox () {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex:1,
        flexDirection: 'row', //row becomes the main axis
        paddingTop: 40,
        backgroundColor: '#ddd',
        justifyContent: 'space-around', //how to display content along main axis
        alignItems: 'flex-start'
    },
    boxOne: {
        flex:5,
        backgroundColor: 'violet',
        padding: 10
    },
    boxTwo: {
        flex:1,
        backgroundColor: 'gold',
        padding: 20
    },
    boxThree: {
        flex:1,
        backgroundColor: 'coral',
        padding: 30
    },
    boxFour: {
        flex:1, 
        backgroundColor: 'skyblue',
        padding: 40
    },
})