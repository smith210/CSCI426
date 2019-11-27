import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class Home extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'montserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
    });
    this.setState({fontLoaded: true});
  }
  render() { 
    return (
      <View > 
        {
          this.state.fontLoaded ? (
          <Text style={styles.text}>Welcome to SmartFridge! Start by opening up the inventory or add an item. </Text>
          ): null
        }
        
        <View style={styles.container}> 
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('InventoryScreen')}>
          <Ionicons style={styles.icon} name="md-nutrition" size={30} color='white'/>
          <Text style={styles.buttonText}>Inventory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddFoodScreen')}>
          <Ionicons style={styles.icon} name="md-ice-cream" size={30} color='white'/>
          <Text style={styles.buttonText}>Add Food</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.horizontal}></View>

      </View>
    );
  }
}




const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  button: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#024ba6',
    padding: 5,
    borderRadius: 10,

  },

  buttonText:{
    color: 'white'
  },

  icon: {
    marginRight: 5
  },

  text: {
    fontFamily: 'montserrat',
    padding: 10,
    fontSize: 16
  },

  horizontal: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 5,
    marginTop: 45
  }

});


