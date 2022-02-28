import React,{ useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput, 
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Image,
  Touchable,
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Header2 from './components/header2';
import Signin from './components/signin';
import Home from './components/home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function App(){
  
  // try {
  //   await fetch('https://webhook.site/89cc45fb-7e88-4f41-bede-86102a6bc9db', {
  //     method: 'post',
  //     mode: 'no cors',
  //     headers:{
  //       'Accept': 'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify({
  //       username: 'John',
  //       password:'abdoooo',
  //     })
  //   });
  // } catch(e){
  //   console.log(e);
  // }
//   const [todos, setTodos] = useState([
//     { text: 'buy coffee', key: '1' },
//     { text: 'create an app', key: '2' },
//     { text: 'play on the switch', key: '3' }
//  ]);
//  const pressHandler = (key) => {
//    setTodos((prevTodos) => {
//      return prevTodos.filter(todo => todo.key != key);
//    });
//  }

//  const submitHandler = (text) => {
//     if(text.length > 3 ){
//       setTodos((prevTodos) => {
//         return [
//           {text: text, key: Math.random().toString()},
//           ...prevTodos
//         ];
//      });
//     } else {
//       Alert.alert('OOPS!' , 'TODOSMUST BE OVER 3 CHARS LONG',[
//         {text: 'Understood', onPress:() => console.log('alert closed')  }
//       ])
//     }
   
//  }

 
  return (
    // <Sandbox />
      //  <TouchableWithoutFeedback onPress={() =>{
      //    Keyboard.dismiss()
      //  }}>
      // <View style={styles.container}>
      // <Header />
      // <View style={styles.content}>
      //  <AddTodo />
      //    <View style={styles.list}>
          
      //    </View>
      //  </View>
      // </View>
      // </TouchableWithoutFeedback>
     
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={Signin} />
        <Stack.Screen name="SignUp" component={AddTodo} />
        <Stack.Screen name="home" component={Home} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
    
      
  );
}

const styles = StyleSheet.create({
  container: {
     flex:1,
     backgroundColor: '#fff',
     
     
  },
 content:{
   padding:40,
   flex:1,
 },  
 list:{

 }
 
});

export default App;