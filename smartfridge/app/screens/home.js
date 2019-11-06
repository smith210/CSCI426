import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';


/*const App = StackNavigator({
  Home: {screen: home},
  Inventory: {screen: inventory},
})*/



 export default class Home extends Component {
 
  //static navigationOptions = {
   // title: 'Welcome',
 // };
  render() {
    //const {navigate} = this.props.navigation;
    return (
      
      <View > 
        <Text>Welcome to SmartFridge! Start by opening up the inventory or add an item. </Text>
    
        <View style={styles.button}> 
          <Button title="Inventory" onPress={() => navigate('Inventory')}/>
          <Button title="Add Food"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 100,
    marginTop: 10,

  },

});


/*const AppNavigator = createStackNavigator({
  Home: {
    screen: homeScreen,
  },
  Inventory : {
    screen: inventoryScreen,
  }
});

export default createAppContainer(AppNavigator);*/