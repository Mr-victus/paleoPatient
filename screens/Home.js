import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BottomTabNavigator from '../NavigationApp/BottomTabNavigator';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <BottomTabNavigator/>
    );
  }
}

export default Home;
