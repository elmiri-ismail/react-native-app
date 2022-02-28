import React, { useState } from 'react';
import {
    
    ScrollView,
    StyleSheet,
    Text,
    Button, 
    TextInput,
    View,
    TouchableWithoutFeedback,
  } from 'react-native';

const Home=({route,navigation})=>{
    const {name}=route.params;
    return(<TouchableWithoutFeedback>
        <View  ><Text style={styles.wlc} >welcome {name} to your home page</Text>
                <View style={styles.btn}><Button  onPress={()=>navigation.navigate("SignIn")} color='coral' title="log out"/></View>

        </View></TouchableWithoutFeedback>
    )
}
const styles=StyleSheet.create({
  wlc : {
      marginTop : 100 ,
      marginLeft : 40 ,
      fontSize: 20,
      fontWeight: "bold",
      color :' black '
    
     },
     btn:{
      marginTop:30,
      marginLeft:130,
      marginRight:130,
  },


})
  
  export default Home;