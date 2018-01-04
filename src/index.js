import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
//
// import thunk from 'redux-thunk';
import promise from 'redux-promise';


import rootReducer from './reducers';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <Route path='/posts/new' component={PostsNew} />
        <Route exact path='/' component={PostsIndex} />

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
