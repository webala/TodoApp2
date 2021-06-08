import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Todos ({item, handleTodoRemove}) {
    return (
        <TouchableOpacity 
         onPress={()=> handleTodoRemove(item.key)}
        >
            <View style={styles.todoView}>
                <MaterialIcons name='delete' size={12} color="black" />
                <Text style={styles.todoText}>{item.item}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    todoView: {
        borderRadius: 50,
        padding: 10 ,
        margin:2,
        backgroundColor: '#afc7de',
        width: 200, 
        flexDirection: 'row'
    },
    todoText: {
        marginLeft: 10
    }
})
