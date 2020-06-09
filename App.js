/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import codePush from 'react-native-code-push'
import {  
  StyleSheet,  
  View,
  Text,
  Button,  
} from 'react-native';

// console.log('codePush values', codePush);

class App extends Component{
  componentDidMount(){
    // console.log("codePush value", codePush);
    codePush.sync({
      // updateDialog:false,
      installMode:codePush.InstallMode.IMMEDIATE
    })
  }
  // codePushSync(){
    
  // }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Well come to Applied SNI. 
        </Text>
        <Text style={styles.text}>
          its a code push demo. 
        </Text>
        {/* <View>
          <Button title="codepush sync" onPress={()=>this.codePushSync()}/>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    padding:20,
    backgroundColor:'green'
  },
  text:{
    fontSize:18,
    textAlign:'center'
  }
});

export default App;
