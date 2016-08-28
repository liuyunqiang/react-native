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
  Image
} from 'react-native';
import Header from '../pages/NewsPage/Header';
import NewsContainer from '../containers(容器)/NewsContainer';

import TabNavigator from 'react-native-tab-navigator';

const NEW = 'new';
const NEW_NORMAL = require('../img/new_normal.png');
const NEW_FOCUS = require('../img/new_focus.png');

const MOVIE = 'movie';
const MOVIE_NORMAL = require('../img/movie_normal.png');
const MOVIE_FOCUS = require('../img/movie_focus.png');

const MUSIC = 'music';
const MUSIC_NORMAL = require('../img/music_normal.png');
const MUSIC_FOCUS = require('../img/music_focus.png');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: NEW,

    }

  }
  _rendrTabItem(img, selectedImg,tag, childView ){
   return(
     <TabNavigator.Item
       selected = {this.state.selectedTab === tag }
       renderIcon = {
         ()=><Image style = {styles.tabIcon} source = {img}/>
       }
       renderSelectedIcon = {
         ()=> <Image style = {styles.tabIcon} source = {selectedImg}/>
       }
       onPress = {
         ()=> this.setState({selectedTab:tag})
       }
       >
       {childView}
     </TabNavigator.Item>
   );

 }
 static _createChildView(tag) {
       return (
           <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
               <Text style={{fontSize:22}}>{tag}</Text>
           </View>
       )
   }
  render() {
    return (
      <View style = {{flex:1}} >
       <Header />
       <TabNavigator
         hidesTabTouch = {true}
         tabBarStyle = {styles.tab}
         >
         {this._rendrTabItem(NEW_NORMAL,NEW_FOCUS,NEW, <NewsContainer {...this.props} />)}
         {this._rendrTabItem(MUSIC_NORMAL,MUSIC_FOCUS,MUSIC,App._createChildView(MUSIC))}
         {this._rendrTabItem(MOVIE_NORMAL,MOVIE_FOCUS,MOVIE,App._createChildView(MOVIE))}

       </TabNavigator>
   </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
         height: 52,
         backgroundColor: '#666666',
         alignItems: 'center',
     },
    tabIcon: {
            width: 30,
            height: 35,
            resizeMode: 'stretch',
            marginTop: 12.5
        }
});

function mapStateToProps(state){
  const { news } = state;

  return{
    news
  };
}
export default App;
