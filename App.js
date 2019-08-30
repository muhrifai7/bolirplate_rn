import  React, { Component } from "react";
import { View, ScrollView, StyleSheet,Text} from "react-native";
import {Provider} from 'react-redux'
import { createBottomTabNavigator, createAppContainer,createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import store from './src/_redux/store';
import Welcome from './src/screen/Welcome'
import Users from './src/screen/Users';

const RootNavigation = createAppContainer(
  createBottomTabNavigator({
    Welcome: {
      screen: Welcome
    },
    Users : {
      screen: Users
    }
  })
)
class App extends Component {
  
  render() { 
    return ( <Provider store={store}>  
                <RootNavigation />
        </Provider> );
  }
}

export default App

