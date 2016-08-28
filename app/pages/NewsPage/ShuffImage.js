/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
class ShuffImage extends Component {
  constructor(props){
    super(props);

  }

  render() {
    const { ads } = this.props;
    //console.log('shuffing==========',ads[0]);
    if (ads !== null ) {

      return(
        <Swiper height={240}
         autoplay = {true}
         dot={<View style={{ backgroundColor:'rgba(0,0,0,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
         activeDot={<View style={{backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
         paginationStyle={{
         bottom: 0, left: null,backgroundColor:'rgba(0,0,0,0.5)',height:30,width:Dimensions.get('window').width - 350,
       }}
       titleStyle = {{backgroundColor:'blue'}}
         loop={true}>

             <View  title={<Text style = {{color:'white'}} ></Text>}>
<TouchableHighlight onPress = {() => onTouchStart() } >
         <Image   style ={{height:240,width: Dimensions.get('window').width ,backgroundColor:'white'}} />
 </TouchableHighlight>
     </View>

       <View title={<Text style = {{color:'white'}} ></Text>}>
         <Image  style ={{height:240,width: Dimensions.get('window').width ,backgroundColor:'white'}}/>
       </View>
       <View  title={<Text style = {{color:'white'}} ></Text>}>
         <Image  style ={{height:240,width: Dimensions.get('window').width ,backgroundColor:'white'}}/>
       </View>
       <View  title={<Text style = {{color:'white'}} ></Text>}>
         <Image style ={{height:240,width: Dimensions.get('window').width ,backgroundColor:'white'}} />
       </View>
     </Swiper>
      );

    } else {

      return null ;
    }


}
}

const styles = StyleSheet.create({

});

export default ShuffImage
