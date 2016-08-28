/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { createStore, applyMiddleware } from 'redux';//引入redux createStore ,applyMiddleware 中间件
import thunk from 'redux-thunk';//redux-thunk 支持 dispatch function,并且可以异步调用它
import rootReducer from '../reducers/index';
//创建一个中间件集合
const middlewares = [thunk];
//调用并引入日志打印方法
const createLogger = require('redux-logger');

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}
//利用applyMiddleware增强store,
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
