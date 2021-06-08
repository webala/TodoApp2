import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, FlatList, Alert, Keyboard} from 'react-native';
import Todos from './components/todos';
import AddTodos from './components/addTodos';
import Header from './components/header';
import SandBox from './components/sandbox';


export default function App() {

  const [todos, setTodos] = useState([
    {"item": "Work out", key: '1'},
    {"item": "Shower", key: '2'},
    {"item": "Make coffee", key: '3'},
    {"item": "Code", key: '4'}
  ])

  const handleTodoRemove = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.key != key);
    })
  }

  const handleAddTodos = (text) => {

    if (text.length > 3) {
      setTodos(prevTodos => {

        return [{"item": text, key: Math.random().toString()},
         ...prevTodos
       ]
       })
    } else {
      Alert.alert('Oops!', 'Todos must be at least three characters long',[
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      {/* <SandBox /> */}
       <View style={styles.container}>
        <Header />
        <View style={styles.content}>  
        <AddTodos handleAddTodos={handleAddTodos}/>
            <View style={styles.list}>
              <FlatList 
              data={todos}
              renderItem={({item}) => {
                return (
                  <Todos 
                  item={item} 
                  handleTodoRemove={handleTodoRemove}
                  />
                )
              }}
              />
            </View>
            </View>
        
        <StatusBar style="auto" />
      </View> 
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1
  }
});
