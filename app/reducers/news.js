import * as types from '../constants(常量)/ActionTypes';//引入action类型常量名
//初始化state数据
const initialState = {
    isRefreshing:false,
    loading:false,
     isLoadingMore: false,
     totalProductCount: 200,
    noMore:false,
    newsList:[],
    ads:[],
};
//通过dispatch action进入
export default function news(state = initialState, action){
  let newState = state;
  switch (action.type) {
    case types.GET_NEWS_LIST_SUCC:
    console.log('刷新 重置newsList',action.pageNo,action.pages);
      if (action.pageNo === 1 && action.pages === 0 ) {
        console.log('刷新 重置newsList');
        newState = Object.assign({},state,{
          newsList:action.value.T1348647853363,
          ads:action.value.T1348647853363[0].ads
        });
      } else {
        newState = Object.assign({}, state, {
                   newsList: state.newsList.concat(action.value.T1348647853363),
                   
               });
      }
      return newState;
  case types.CHANGE_NEWS_LIST_REFRESHING:
      newState = Object.assign({},state,{
        isRefreshing:action.value
      });
      return newState;
      case types.CHANGE_NEWS_LIST_LOADINGMORE:
        console.log('正在加载更多吗?',action.value);
        newState = Object.assign({},state,{
          isLoadingMore:action.value
        });
        return newState;
    default:
      return state;
  }
}
