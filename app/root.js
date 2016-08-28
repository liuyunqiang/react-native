/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
	Navigator
} from 'react-native';
import { Provider } from 'react-redux';//利用Provider可以使我们的store能为下面的组件所用
import configureStore from './store/configure-store';//引入增强后的store

import Splash from './pages/Splash';

//调用增强后的store
const store = configureStore();

const Root = () => (
  //利用Provider包裹页面
  <Provider store={store}>
  <Navigator
          initialRoute={{ component: Splash }}
          configureScene={(route) => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
              //  上面的route.params 是为了方便后续界面间传递参数用的
          }} />
  </Provider>
);



export default Root;
