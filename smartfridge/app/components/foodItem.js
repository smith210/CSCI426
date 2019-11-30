import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


 export default class FoodItem extends Component {
   constructor(props){
     super(props);
     /*this.state= {
       name = '',
       quantity = '',
       image = ''
     }*/
    };


  render() { 
    return (
      <View > 
        <Ionicons name={this.image} size={20}/>
        <Text>{ this.name } </Text>
        <Text> { this.quantity}</Text>
      </View>
    );
  }
}
