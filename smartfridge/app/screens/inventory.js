import React, { Component,} from 'react';
import { Text, View,  StyleSheet, Button, DrawerLayoutAndroid, ListView, FlatList, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import FoodItem from '../objects/FoodItem';


export default class Inventory extends Component {

  /*state = {
    search: '',
  }

  updateSearch = search => {
    this.setState({search});
  }


  render() {

    //const {search} = this.state;

    return (
      <View>
        <Text>Hello, world!</Text>
      
        
        
      </View>
    );
  }*/

  render() {
    return(
    <View>
      <ScrollView>
        <FlatList
        data={[
            {key: 'apples'},
            {key: 'pizza'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </ScrollView>
        <Ionicons style={styles.icon} name="md-add-circle-outline" size={50} color="black" />
      
      </View>
    );
   
  }
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-end',
    marginTop: 500,
    marginLeft: 320
  },
  container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },

});

