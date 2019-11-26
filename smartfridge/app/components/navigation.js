import { createDrawerNavigator, } from 'react-navigation-drawer';
import { Header,  Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {StyleSheet} from 'react-native';

import { createStackNavigator, } from 'react-navigation-stack';

import Home from '../screens/home';
import Inventory from '../screens/inventory';
import Add from '../screens/add';

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'SmartFridge',  // Title to appear in status bar
      headerLeft: <Ionicons style={styles.icon} name="md-menu" size={35} onPress={ () => navigation.toggleDrawer() } />
    }),
  },


});

const InventStack = createStackNavigator({
  InventoryScreen: {
    screen: Inventory,
    navigationOptions: ({ navigation }) => ({
      title: 'Inventory',  // Title to appear in status bar
      headerLeft: <Ionicons style={styles.icon} name="md-menu" size={35} onPress={ () => navigation.toggleDrawer() } />
    }),
  },
});

const AddStack = createStackNavigator({
  AddFoodScreen: {
    screen: Add,
    navigationOptions: ({ navigation }) => ({
      title: 'Add Food',  // Title to appear in status bar
      headerLeft: <Ionicons style={styles.icon} name="md-menu" size={35} onPress={ () => navigation.toggleDrawer() } />
    }),
  },
});



const DrawerNav = createDrawerNavigator(
{
  HomeScreen: {
    screen:HomeStack,
    navigationOptions:{
      title: 'Home'
    }
  },
  InventoryScreen: {
    screen: InventStack,
    navigationOptions: {
      title: 'Inventory'
    }
  },


AddFoodScreen: {
  screen: AddStack,
  navigationOptions: {
    title: 'Add Food'
  }
}
},


{
  initalRouteName: 'Home'
}
);

const styles = StyleSheet.create({
  icon: {
    padding: 10
  }
});

export default DrawerNav;



