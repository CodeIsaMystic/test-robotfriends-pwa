import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import MainPage from '../components/MainPage';

import './App.css';

/**
 * Considering we want to test the rendered component,
 * We just moved the rendering on a simple MainPage component
 * to keep here the connect redux complex App.js
 * 
 * Here we re just connecting, grab these states and dispatch events from the redux store
 * 
 * ==> We just want to test the redux functionalities,
 * what the redux lib does 
 */


const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

class App extends Component {
  render() {
    return <MainPage {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)