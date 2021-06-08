import React, {useState} from 'react';
import {TextInput, View, Text, Button, StyleSheet} from 'react-native';


export default function AddTodos ({handleAddTodos}) {
    const [text, setText] = useState('')
    return (
        <View style={styles.addtodos}>
            <TextInput 
            placeholder="Add todo..."
            onChangeText={(val) => setText(val)}
            style={styles.textinput}
            />
            <Button 
            title="add todo"
            onPress={() => handleAddTodos(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    addtodos: {
        marginBottom: 20
    },
    textinput: {
        backgroundColor: '#8b9fb5',
        marginBottom: 2,
        width: 200,
        height: 40,
        borderRadius: 75
    }
})