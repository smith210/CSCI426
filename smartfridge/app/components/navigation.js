import { createAppContainer } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';

import Home from '../screens/home';
import Inventory from '../screens/inventory';
import { Component } from 'react';

class MyHomeScreen extends Component{
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
}

