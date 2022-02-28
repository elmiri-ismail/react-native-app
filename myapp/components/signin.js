import React, {useState} from 'react';
import Header2 from './header2';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  MaterialIcons,
  TouchableWithoutFeedback,
  Keyboard,
  FontAwesome,
  Alert,

  
} from 'react-native';
import axios from 'axios';

const Login=({navigation})=>{

  const [email,setemail]=useState("");
  const [pass,setpass]=useState("");

  const login=async()=>{
    if(email && pass){
      await fetch("http://172.16.1.107/api/login.php",{
        method:"POST",
        body:JSON.stringify({
          email:email,
          password:pass
        })
      }).then(res=>{
        return res.json()
      }).then(d=>{
        if(d.success==1){
          navigation.navigate("home" ,{
            name:d.token
          });
        }else{
          alert(d.message)
        }
      })
    }
  }

    return(
        <TouchableWithoutFeedback onPress={
            ()=>{
                Keyboard.dismiss()
            }
        }>
        <View style={styles.nav}>
            
            
            <Text style={styles.txt} >Email</Text>
            <TextInput 
            onChangeText={e=>setemail(e)}
            style={styles.input}
            placeholder='Email'
            
            
            />
            <Text style={styles.txt} >Password</Text>
            <TextInput 
            onChangeText={e=>setpass(e)}
            style={styles.input}
            placeholder='Password'
             secureTextEntry
             
            />
            
            <View style={styles.btn}>
                <Button  title='sign in' color='coral' onPress={()=>login()}/>
            </View>
            <View style={styles.btn}>
            </View>
            <Text style={styles.spa} >Si tu n'as pas encore un compte , <Text style={styles.span} onPress={()=>navigation.navigate("SignUp")} >Inscris-toi</Text> </Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd',
        marginLeft:30,
        marginRight:30,
        marginTop:10,
    },
    btn:{
        marginTop:20,
        marginLeft:30,
        marginRight:30,
    },
    nav:{
        marginTop:40,
    },
    txt:{
        marginLeft:38,
        height:17,
        marginTop:7,
        fontSize:15,
        fontWeight: 'bold',
        color: 'black',
        
        

    },
    span :{
        color:'coral',
        fontWeight: 'bold',
        fontSize:15,
    },
    spa:{
        color:'black',
        fontSize:15,
        marginLeft:55,
    },
    headerImage:{
       width:26,
       height: 26,
    },
    
})
export default Login;