import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './components/Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RedusThunk from 'redux-thunk';
import reducers from './reducers';

export default class App extends React.Component {
  render() {
    const state= createStore(reducers, {}, applyMiddleware(RedusThunk))
    return (

      <Provider store = {state}>

        <Routes />
      </Provider>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
