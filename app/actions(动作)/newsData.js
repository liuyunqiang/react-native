import * as types from '../constants(常量)/ActionTypes';
import request from '../utils(公共)/Http';

const HOST = 'http://c.m.163.com/nc/article/headline/T1348647853363/';
const keyWords = 'from=toutiao';
export function getNewsList ( pages = 0, pageNo = 1 ){
  return dispatch => {
    if (pageNo === 1 && pages === 0) {
        dispatch(changeNewsListRefreshing(true));
    };

  return request(`${HOST}${pages}-20.html?${keyWords}&fn=${pageNo}&prog=LMA1&passport=wDCwGITrsPB%2BT81pMWafLJ%2F1fey5Sa%2FQ00N2W1cP2zkkjghnvXgObCGLOzPAdXnhrqJv2nCCD2QqQsfBWgSZWQ%3D%3D&devId=GrXAv38vvmwPN7twgRZnIOP4j7B9KGp4xt6S0K0kfQP2aFXfgQE90Se7ttFblvIT&offset=0&size=20&version=14.0&spever=false&net=wifi&lat=&lon=&ts=1470300319&sign=pwsRJD2n5LYsntPtH%2Bl59pVGiGvMpQ1bv%2F1tfvl86G548ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore`)
            .then((responseData)=>{
              dispatch(gotNewsList(responseData,pages,pageNo));
            console.log(`---------> ,成功加载${responseData.T1348647853363.length}条数据`);
                if ( pages === 0 && pageNo === 1 ) {
                  dispatch(changeNewsListRefreshing(false));
                } 
                if(pages !== 0) {
                  dispatch(changeNewsListLoadingMore(false));
                }
            })
            .catch((error)=>{
              dispatch(changeNewsListRefreshing(false));
              dispatch(changeNewsListLoadingMore(false));
              console.log('error',error);
            });
  }
}
function gotNewsList (argument,pages,pageNo) {
	return {
		type: types.GET_NEWS_LIST_SUCC,
		value: argument,
    pages,
		pageNo,

	}
}
// 刷新（状态）
export function changeNewsListRefreshing(argument) {
	return {
		type: types.CHANGE_NEWS_LIST_REFRESHING ,
		value: argument
	 }
}

// 加载更多（状态）
export function changeNewsListLoadingMore(argument) {
	return {
		type: types.CHANGE_NEWS_LIST_LOADINGMORE,
		value: argument
	}
}
