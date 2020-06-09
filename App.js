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
    console.log("codePush", codePush)
  }
  codePushSync(){
    console.log('clicked codePush sync.');
    codePush.sync({
      updateDialog:true,
      installMode:codePush.InstallMode.IMMEDIATE
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Well come to React Native code push </Text>
        
        <Button title="codepush sync" onPress={()=>this.codePushSync()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:'dodgerblue'
  },
  text:{
    fontSize:18
  }
});

export default App;
