import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator,createAppContainer } 
  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screens/Home';
import Login from '../screens/Login';

const Main=createStackNavigator({
    Login:{screen:Login}
})

const SwitchNavigator=createSwitchNavigator({
    Main:Main,
    Home:Home
})
export default createAppContainer(SwitchNavigator);
