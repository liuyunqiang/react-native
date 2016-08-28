/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
 class Header extends Component {
  render() {
    return (

        <View style = {styles.navContainer}>
      <View style ={styles.naviView} >
     <Text style = {styles.titleText} >
       网易新闻
     </Text>
   </View>
 </View>

    );
  }
}

const styles = StyleSheet.create({
  navContainer:{
     height:64,
     backgroundColor:'red',
     justifyContent: 'center',
     alignItems: 'center',
 },
 naviView:{
     marginTop:10,
 },
 titleText:{
     fontSize:24,
     fontWeight:'bold',
     color:'#FFFFFF',
 },
});

 export default Header;
