import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


 export default class FoodItem extends Component {
   constructor(props){
     super(props);
    };

  render() { 
    return (
      <View style={styles.container}> 
        <Text style={styles.text}>{ this.props.name } </Text>
        <Text> {' Quantity: '+ this.props.quantity }</Text>
        <Text> {' Expiration: ' + this.props.date}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    flexDirection: 'row',
    height: 40,
    margin: 5,
    padding: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }
}

)