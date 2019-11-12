import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';

import Home from './screens/home';
import Inventory from './screens/inventory';



/*export default function App() {
    const {navigation} = this.props;
    return (
      
      <View style={styles.container}>
        
        <Header 
          leftComponent ={ <Ionicons name="md-menu" size={32} color={'#fff'}/> }
          centerComponent={{text: 'SmartFridge',   style:{ color: '#fff', fontSize: 24}} }
        />
        <Home></Home>
      </View>
      
    );
  }*/


  const App = createStackNavigator({
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        title: 'HomeScreen',
      },
    },

    InventoryScreen: {
      screen: Inventory,
      navigationOptions: {
        title:'InventoryScreen',
        
      },
    },


});



const styles = StyleSheet.create({
  container: {
    /*flex: 1,
    backgroundColor: '#fff',
    alignItems: '',
    justifyContent: 'center',*/
  },

});

export default createAppContainer(App);
