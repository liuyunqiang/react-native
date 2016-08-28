/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  WebView,
} from 'react-native';
import NavigationBar from '../../components(组件)/NavigationBar';
import backIcon from '../../img/ic_center_back.png';
class PassView extends Component {
  constructor(props){
    super(props);
    this.buttonBackAction = this.buttonBackAction.bind(this);
    this.state = {id:null};
  }

  buttonBackAction(){
  const { navigator }  = this.props;
  if (navigator) {
    navigator.pop();

  }

  }
  render() {
    return (

       <View style={{backgroundColor:'white',flex:1}}>
          <NavigationBar title={'图片详情'} leftImage={ backIcon } leftAction={ this.buttonBackAction}  />
                 <WebView
                   ref = 'webview'
                   automaticallyAdjustContentInsets={false}
                     style={{backgroundColor:'rgba(255,255,255,0.8)', height:250}}
                     source={{uri:`http://c.m.163.com/nc/article/${this.props.team.docid}/full.html`}}
                     domStorageEnabled={true}
                     decelerationRate="normal"
                     startInLoadingState={true}
                   >

                 </WebView>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default PassView;
