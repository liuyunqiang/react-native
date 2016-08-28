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
  ScrollView,
  ListView,
  Alert,
  Image,
  Dimensions,
  TouchableHighlight,
  InteractionManager
} from 'react-native';
import {
  getNewsList,
  changeNewsListRefreshing,
  changeNewsListLoadingMore
} from '../../actions(动作)/newsData';
import news from '../../reducers/index';
import LoadMoreFooter from '../../components(组件)/LoadMoreFooter';

import PassView from './PassView';
 var width =  Dimensions.get('window').width;
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import NewsListCell from './NewsListCell';
import ShuffImage from './ShuffImage';
import PullRefreshScrollView from 'react-native-pullrefresh-scrollview';
Dimensions.get('window').height;
Dimensions.get('window').width;
let _pageNo = 1;
let _pages = 0;
const _pageSize = 30;
 class NewListView extends Component {
      constructor(props) {
    super(props);
    this.renderTeam = this.renderTeam.bind(this);
    this.renderSwiper = this.renderSwiper.bind(this);
    // this.onTouchStart = this.onTouchStart.bind(this);
    this.pushPassView = this.pushPassView.bind(this);
     this.onRefresh=this.onRefresh.bind(this);
     this._toEnd = this._toEnd.bind(this);
     this._renderFooter = this._renderFooter.bind(this);


    }
    componentDidMount(){

      this.props.dispatch(getNewsList(_pages,_pageNo));

    }

    onRefresh(PullRefresh){
      const { news, dispatch } = this.props;
    console.log('refresh');
    // _pageNo = Number.parseInt(news.newsList.length / _pageSize) + 1;
    this.props.dispatch(getNewsList(0,1));
    setTimeout(function(){
        PullRefresh.onRefreshEnd();
    },1000);

}

    //加载页面
    renderLoadingView(){
         return(
             <View style = {{backgroundColor:'blue', justifyContent: 'center',
             alignItems: 'center',height:200}} >
             <Text> Loading teams... </Text>
             </View>
         );
     }

     //轮播图
     renderSwiper(ads){

         return <ShuffImage ads = {ads} />
       }

       pushPassView(team){
         const { navigator } = this.props;

         if (navigator) {
           navigator.push({

             component:PassView,
             params:{
               team

             }
           })
         }
       }
    //ListView
       renderTeam(team){

         return <NewsListCell team = {team} pushPassView= {this.pushPassView}/>

     }

     _loadMoreData() {
   const { news, dispatch } = this.props;
   dispatch(changeNewsListLoadingMore(true));
    _pages++;
     console.log('_pages=============',_pages,_pageNo);
   dispatch(getNewsList(_pages,_pageNo));
 }

 _toEnd() {
   const { news } = this.props;
   //console.log("加载更多？ ",news.isLoadingMore, news.newsList.length, news.totalProductCount,news.isRefreshing);
   //ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
   if (news.isLoadingMore || news.newsList.length >= news.totalProductCount || news.isRefreshing) {
     return;
   };
   InteractionManager.runAfterInteractions(() => {
    //  console.log("触发加载更多 toEnd() --> ");
     this._loadMoreData();
   });
 }


  render() {
    const { news } = this.props;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    var URL_ARRAR = ['头条','精选','娱乐','体育','网易号','本地','视频','财经','科技','汽车','时尚','图片','直播','热点','跟帖','房产','轻松一刻','段子',
   '军事','历史','家居','独家','游戏','健康','财政','漫画','哒哒趣闻','彩票','美女'];
      if (news.loading) {
        return this.renderLoadingView();
      } else {
        return (

          <ScrollableTabView
          tabBarPosition = 'top'
            renderTabBar ={()=> <ScrollableTabBar/> }
             tabBarActiveTextColor='red'
            tabBarUnderlineColor ='red'
            tabBarTextStyle = {{fontSize: 14}}>
              <View tabLabel= {URL_ARRAR[0]} style = {{height:200}} >

                <View style ={{height:Dimensions.get('window').height - 146,flex:1 }} >

                  <ListView
                    renderScrollComponent={(props) => <PullRefreshScrollView onRefresh={(PullRefresh)=>this.onRefresh(PullRefresh)} {...props} />}
                     dataSource={ds.cloneWithRows(news.newsList)}
                     //添加点击事件一定要加上.bind(this)否者会报错
                     renderRow={this.renderTeam}
                     style={styles.listView}
                     onEndReached = {this._toEnd}
                     onEndReachedThreshold={10}
                     renderFooter={ this._renderFooter }
                     enableEmptySections={true}
                     renderHeader = {()=>{
                       var ads = news.ads;
                        //  return this.renderSwiper(ads);
                     }}
                 />
                </View>

              </View>
              <View tabLabel= {URL_ARRAR[1]}></View>
              <View tabLabel= {URL_ARRAR[2]}></View>
              <View tabLabel= {URL_ARRAR[3]}></View>
              <View tabLabel= {URL_ARRAR[4]}></View>
              <View tabLabel= {URL_ARRAR[5]}></View>
              <View tabLabel= {URL_ARRAR[6]}></View>
              <View tabLabel= {URL_ARRAR[7]}></View>
              <View tabLabel= {URL_ARRAR[8]}></View>
              <View tabLabel= {URL_ARRAR[9]}></View>


            </ScrollableTabView>
        );
      }

        }
        _renderFooter() {
           const { news } = this.props;
           //通过当前newsList数量和刷新状态（是否正在下拉刷新）来判断footer的显示
           if (news.newsList.length < 1 || news.isRefreshing) {
             return null;
           };
           if (news.newsList.length < news.totalProductCount) {
             //还有更多，默认显示‘正在加载更多...’
             return <LoadMoreFooter />
           }else{
             // 加载全部
             return <LoadMoreFooter isLoadAll={true}/>
           }
         }

}

const styles = StyleSheet.create({
  container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#F5FCFF',
},
});

export default NewListView;
