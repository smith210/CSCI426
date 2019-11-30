import React, { Component,} from 'react';
import { Text, View,  StyleSheet, FlatList, ScrollView, Button } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


import FoodItem from '../components/foodItem';

import SearchBar from '../components/search';
import Database from '../database/Database';
//const db = new Database();


export default class Inventory extends Component {
  /*constructor() {
    super();
    this.state = {
      isLoading: true,
      inventory: [],
      notFound: 'Products not found.\nPlease click (+) button to add it.'
    };
    this.getItems = this.getItems.bind(this);
  }
  componentDidMount(){
    this.getItems();
  }*/


  /*getItems() {
    console.log("inside get products");
    let inventory = [];
    data  = db.getInventory();
      
      inventory = data;
      this.setState({
        inventory,
        isLoading: false,
      });
      console.log(data);
  }*/
 
  render() {
    return(
    <View style={styles.container}>
      <SearchBar />
      <ScrollView>
        <FoodItem name='Apples' quantity='8' image='md-apple' date='November 31, 2019'/>
        <FoodItem name='Milk' quantity='1' image='md-apple' date='December 02, 2019'/>
        <FoodItem name='Bread' quantity='2' image='md-apple' date='December 10, 2019'/>
        <FoodItem name='Cheese' quantity='3' image='md-apple' date='December 15, 2019'/>
      </ScrollView>
        <TouchableNativeFeedback style={styles.icon} onPress={() => this.props.navigation.navigate('AddFoodScreen')}>
          <Ionicons  name="md-add-circle-outline" size={60} color="black" />
        </TouchableNativeFeedback>
      </View>
    );
   
  }
}


const styles = StyleSheet.create({


  icon: {
    marginLeft: 340,
    marginBottom: 10,
  },
  container: {
    
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
     borderBottomColor: 'black',
     borderBottomWidth: 1
   },
   section: {
     
   }

  
});

