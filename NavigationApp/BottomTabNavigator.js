import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import AmbulanceEmergency from '../screens/AmbulanceEmergency';
import ChatScreen from '../screens/ChatScreen';
import FindDoc from '../screens/FindDoc';



const ambulance=createStackNavigator({
  ambulanceEmergency:{screen:AmbulanceEmergency}
})

const chatscreen=createStackNavigator({
    chatScreen:{screen:ChatScreen}
})
const finddoc=createStackNavigator({
    findDoc:{screen:FindDoc}
})
const BottomTabNavigator = createBottomTabNavigator(
  {
    "Emergency": { screen: ambulance },
    "BayMax":{screen:chatscreen},
    "Find Doc":{screen:finddoc}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      
      headerBackAllowFontScaling: true,
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let iconName=null
    //     if (routeName.includes("Emergency")) {
    //       iconName = focused ? require('../assets/homeSelect.png') : require('../assets/homeUnselect.png');
    //     } 
    //     else if (routeName.includes("BayMax")) {
    //       iconName = focused ? require('../assets/classromSelect.png') : require('../assets/classromUnselect.png')

    //     } 
    //     else if (routeName.includes("Find Doc")) {
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
