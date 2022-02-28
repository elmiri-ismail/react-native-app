import React, { useState } from 'react';
import {
    
    ScrollView,
    StyleSheet,
    Text,
    Button, 
    TextInput,
    Image,
    Pressable,
    View,
    TouchableWithoutFeedback,
    Alert,
  } from 'react-native';

const Home=({route,navigation , logout})=>{
    const {name}=route.params;
    return(<TouchableWithoutFeedback>
        <View  >
        <Image
        style={styles.img}
        source={require('../assets/user.png')}
      />

          <Text style={styles.wlc} >welcome {name} to your home page</Text>
          <View style={styles.btn}><Button  onPress={()=> Alert.alert(
      "Thanks for using our app",
      "Are you sure to logout?",
      [
        {
          text: "logout",
          onPress: () => navigation.navigate("SignUp"),
          style: "cancel"
        },{
          text: "cancel",
          onPress: () => console.log("cancel"),
          style: "cancel"
        },
      ]
    )} color='coral' title="log out"/></View>

        </View></TouchableWithoutFeedback>
    )
}
const styles=StyleSheet.create({
  wlc : {
      marginTop : 20 ,
      marginLeft : 40 ,
      fontSize: 20,
      fontWeight: "bold",
      color :' black '
    
     },
     btn:{
      marginTop:30,
      marginLeft:150,
      marginRight:150,
  },
     img:{
      marginTop:30,
       width: 100,
       height:100,
       marginLeft:150,
      marginRight:150,
     }

})
  
  export default Home;