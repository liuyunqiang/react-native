
import React, { Component } from 'react';
import { connect } from 'react-redux';

import PassView from '../pages/NewsPage/PassView';
class PassViewContainer extends Component {
      constructor(props){
        super(props);
      }
    render(){
      return(
        <PassView {...this.props} />
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
export default connect(mapStateToProps)(PassViewContainer);
