import React,{Component} from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from "react-native-paper";

import ProfileNavigator from "./src/navigator/ProfileNavigator"
import HomeNavigator from "./src/navigator/HomeNavigator";
import ChatNavigator from "./src/navigator/ChatNavigator";
import Iklan from "./src/screens/Iklan/Iklan";
import KosList from "./src/screens/Kos/KosList"
// import Whitlist from "./src/screens/Whitlist/Whitlist";
// import { btnColor } from "./src/constant";


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="home-outline" color={tintColor} size={25} />
        )
      }
    },
    Whitlist: {
      screen: Iklan,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-chatboxes" color={tintColor} size={25} />
        )
      }
    },
    Chat: {
      screen: ChatNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" color={tintColor} size={25} />
        )
      }
    },
    Profile: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="account-circle-outline" color={tintColor} size={25} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'gray'
      },
      headerTintColor: "#fff"
    },
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
