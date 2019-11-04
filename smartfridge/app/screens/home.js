import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';

import home from '../screens/home';
import inventory from '../screens/inventory';

/*const App = StackNavigator({
  Home: {screen: home},
  Inventory: {screen: inventory},
})*/



 class Home extends Component {
 
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Welcome to SmartFridge! Start by opening up the inventory or add an item. </Text>
        <Button title="Inventory" onPress={() => navigate('Inventory')}/>
        <Button title="Add Food"/>
      </View>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: home,
  },
  Inventory : {
    screen: inventory,
  }
});

export default createAppContainer(AppNavigator);