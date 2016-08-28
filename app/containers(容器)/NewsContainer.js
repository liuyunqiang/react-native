
import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsListView from '../pages/NewsPage/NewsListView';
class NewsContainer extends Component {
      constructor(props){
        super(props);
      }
    render(){
      return(
        <NewsListView {...this.props} />
      );
    }
}

function mapStateToProps(state){
  const { news } = state;
  return{
    news
  };
}
//利用connect将组件与redux绑定起来
export default connect(mapStateToProps)(NewsContainer);
