import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import FindDoc from '../screens/FindDoc';
import ChatScreen from '../screens/ChatScreen';
import AmbulanceEmergency from '../screens/AmbulanceEmergency';




const ambulance=createStackNavigator({
  AmbulanceEmergency:AmbulanceEmergency
})

const chatscreen=createStackNavigator({
  ChatScreen:ChatScreen
})

const finddoc=createStackNavigator({
    FindDoc:FindDoc
})
const BottomTabNavigator = createBottomTabNavigator(
  {
    Ambulanceemergency:ambulance,
    Chatscreen:chatscreen,
    Finddoc:finddoc
    
    
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({

      headerBackAllowFontScaling: true,
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;

    //     if (routeName.includes("Ambulanceemergency")) {
    //       iconName = focused ? require('../assets/homeSelect.png') : require('../assets/homeUnselect.png');
    //     } else if (routeName.includes("Chatscreen")) {
    //       iconName = focused ? require('../assets/classromSelect.png') : require('../assets/classromUnselect.png')

    //     } else if (routeName.includes("Finddoc")) {
    //       iconName = focused ? require('../assets/accountSelect.png') : require('../assets/accountUnselect.png')
    //     } 
    //     return (
    //       <Image
    //         source={iconName}
    //         style={{ height: 25, width: 25 }}
    //         color={tintColor}
    //       />
          
    //     );
    //   }
    }),
    tabBarOptions: {
      activeTintColor: "#6EF31A",
      style: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'white',
        height:55,
        //shadowColor:'black',
        
       // paddingVertical: 5,
        //backgroundColor: "#eaeaea"
      },
      labelStyle: {
        fontSize: 12,
        //fontFamily: Fonts.type.bold,
        fontWeight: "200"
      },
      headerBackTitleStyle: {
        color: "#ffffff",
        //fontFamily: Fonts.type.base,
        fontSize: 17
      }
    }
  }
);

export default createAppContainer( BottomTabNavigator);
