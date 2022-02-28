import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  
} from 'react-native';

export default function Sandbox() {
    return(
        <View style={styles.container}>
         <Text style={styles.boxOne}>One</Text>
         <Text style={styles.boxTwo}>Two</Text>
         <Text style={styles.boxThree}>Three</Text>
         <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'flex-end',
        paddingTop: 40,
        backgroundColor:'#ddd',
    },
    boxTwo:{
        flex:   5 ,
        backgroundColor:'gold',
        padding: 20,
    },
    boxThree:{flex:   1 ,
        backgroundColor:'violet',
        padding: 30,
    },
    boxOne:{flex:   1 ,
        backgroundColor:'coral',
        padding: 10,
    },
    boxFour:{flex:   1 ,
        backgroundColor:'skyblue',
        padding: 40,
    },

});