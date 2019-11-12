import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';



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
          <Button title="Inventory" onPress={() => this.props.navigation.navigate('InventoryScreen')}/>
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


