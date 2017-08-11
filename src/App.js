import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount(){
    // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyDMX29kq3jwUsDgk_xqLRH2oHFnJjm_16A',
    authDomain: 'manager-3208c.firebaseapp.com',
    databaseURL: 'https://manager-3208c.firebaseio.com',
    projectId: 'manager-3208c',
    storageBucket: "",
    messagingSenderId: '823339322486'
  };

  firebase.initializeApp(config);
  }

  render(){
    return(
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router />
        </Provider>
    );
  }
}

export default App;
