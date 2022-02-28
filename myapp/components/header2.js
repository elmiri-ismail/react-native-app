import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
export default function Header2(){
    return(
        <View style={styles.header}>
            <Text style={styles.tit} >Sign In</Text>
        </View>
    )
}

const styles = StyleSheet.create({
header:{
     height:80,
     paddingTop:38,
     backgroundColor: 'coral'
},
tit : {
 paddingLeft:185,
 color:"#fff",
 fontWeight:"700"
 

 
}


});