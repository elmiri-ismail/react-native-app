import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  
  
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Signup=({navigation})=>{

    const [email,setemail]=useState("");
    const [name,setname]=useState("");
    const [pass,setpass]=useState("");
  

   const InsertRecord=async()=>
   {
     if(name.length==0 || email.length==0 ||  pass.length==0){
      alert("field is missing");
     }else{
      //  alert("fetch api");
      await fetch("http://172.16.1.107/API/register.php",{
        method:"POST",
        body:JSON.stringify({
          name:name,
          email:email,
          password:pass
        })
      }).then(res=>{
        return res.json();
      }).then(data=>{
        alert(data.message)
      })
      .catch(e=>{
        console.log(e);
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
           <Text style={styles.txt} >Username</Text>
            <TextInput 
            style={styles.input}
            placeholder='Username'
            onChangeText={n=>setname(n)}
             
            />
            <Text style={styles.txt} >Email</Text>
            <TextInput 
            style={styles.input}
            placeholder='Email'
            onChangeText={e=>setemail(e)}
             
            />
            <Text style={styles.txt} >Password</Text>
            <TextInput 
            style={styles.input}
            placeholder='Password'
             secureTextEntry
             onChangeText={p=>setpass(p)}
            />
            
            <View style={styles.btn}>
                <Button onPress={()=>InsertRecord()}  title='sign up' color='coral' />
            </View>
            <View style={styles.btn}>
            <Text style={styles.spa}  >Si tu as déja un compte, <Text style={styles.span} onPress={()=>navigation.navigate('SignIn')} >Connectes-toi </Text> </Text>
            </View>
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
        height:18,
        fontSize:15,
        fontWeight: 'bold',
        color:'black',
    },span :{
        color:'coral',
        fontWeight: 'bold',
        fontSize:15,
    },
    spa:{
        color:'black',
        fontSize:15,
        marginLeft:40,
    }
})

export default Signup;