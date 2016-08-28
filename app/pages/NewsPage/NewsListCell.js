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
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
 var width =  Dimensions.get('window').width;
 Dimensions.get('window').height;
 Dimensions.get('window').width;
class NewsListCell extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { team , pushPassView } = this.props;
    if (team.imgsrc == null) {
          var imgSource = require('../../img/movie_normal.png')
      }else{
              var imgSource  = {uri:team.imgsrc}

      }

   if (team.imgType == 1 ) {

     return(
       <TouchableHighlight onPress = {() => pushPassView(team) } >
       <View style={styles.longImage}>
         <View style = {styles.bigView} >
           <View style = {styles.longTitleView} >
               <Text style = {styles.longTitle} >{team.title}</Text>
           </View>
           <Image style = {styles.longImageView} source = {{uri:team.imgsrc}} ></Image>

           <View style = {styles.longInterest} >
             <Text style = {{color:'#CCCCCC'}} >{team.recSource}</Text>
           </View>

         </View>
       </View>
       </TouchableHighlight>
     );

   }
   if (team.imgnewextra == null  ) {

     return(
       <TouchableHighlight onPress = {()=> pushPassView(team) } >
     <View style={styles.container}>
<Image
    source={imgSource}
    style={styles.image}
/>
<View style = {styles.TextView} >
<View style={styles.rightContainer}>
    <Text style={styles.titles}>{team.title}</Text>
</View>
<View style ={styles.rightContainer1} >
  <View style ={styles.recSourceView} >
    <Text style={styles.recSourceType}>{team.recSource}</Text>
    </View>
      <View style = {styles.replyCountView} >
      <Text style={styles.replyCountType}>{team.replyCount}跟帖</Text>
    </View>
</View>
</View>
</View>
</TouchableHighlight>
   );
 }else {
   return(
     <TouchableHighlight onPress = {() =>pushPassView(team) } >
     <View style={styles.longImage}>
         <View style = {styles.bigView} >
           <View style = {styles.longTitleView} >
             <Text style = {styles.longTitle} >{team.title}</Text>
         </View>
         <View style = {styles.threeImageView} >
           <Image style = {{width:128,height:110}} source = {{uri:team.imgsrc}} />
           <Image style = {{width:128,height:110 ,marginLeft:5,}} source = {{uri:team.imgnewextra[0].imgsrc}} />
           <Image style = {{width:128,height:110,marginLeft:5,marginRight:5,}} source = {{uri:team.imgnewextra[1].imgsrc}} />
         </View>

         <View style = {styles.longInterest} >
           <Text style = {{color:'#CCCCCC'}} >{team.recSource}</Text>
         </View>
         </View>

     </View>
         </TouchableHighlight>
);

 }
  }
}

const styles = StyleSheet.create({
  listView: {
    flex:1,
    paddingBottom:20,
    backgroundColor: '#CCCCCC',
},
  page:{
    flex:1,
    height:130,
  },
  container: {
    flex:1,
    backgroundColor:'white',
    height:120,
    borderBottomColor:'white',
    marginBottom:1,
    flexDirection:'row'
  },
  image:{
    flex:1,
    height:100,
    width:130,
    resizeMode:'cover',
    marginLeft:10,
    marginTop:10,
  },
  TextView:{
    flex:1,
    height:100,
    width:130,
    width:width - 160,
    marginLeft:10,
    marginTop:10,
  },
  rightContainer:{
    flex:1,
    height:50,
  },
  titles:{
    flex:1,
    fontSize:18,
  },
  rightContainer1:{
    flex:1,
      width:width - 160,
      height:20,
      flexDirection:'row',
      marginTop:30,
  },
  recSourceView:{
    flex:1,
    width:70,
    height:20,
  },
  recSourceType:{
    flex:1,
      fontSize:14,
      color:'#CCCCCC',
  },

  replyCountView:{
    flex:1,
    marginRight:0,
    marginLeft:105,
    width:80,

  },
  replyCountType:{
    flex:1,
    fontSize:14,
    textAlign:'right',
    color:'#CCCCCC',
  },

  longImage:{
    flex:1,
    backgroundColor:'white',
    height:190,
    marginBottom:1,
  },
  bigView:{
    flex:1,
    width:width - 20,
    height:170,
    marginTop:10,
    marginLeft:10,
    flexDirection:'column',
  },
    longTitleView:{
      flex:1,
    height:20,

  },
  longTitle:{
    fontSize:18,
  },
  longImageView:{
    flex:1,
    height:120,
    marginTop:5,


},
longInterest:{
  flex:1,
  height:10,
  width:50,
  marginTop:10,

},
threeImageView:{
  flex:1,
  height:110,
  marginTop:10,
  flexDirection:'row',

},
});

export default NewsListCell
