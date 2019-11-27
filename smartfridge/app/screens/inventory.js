import React, { Component,} from 'react';
import { Text, View,  StyleSheet, FlatList, ScrollView } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import FoodItem from '../objects/FoodItem';

import SearchBar from '../components/search';


export default class Inventory extends Component {

  

  render() {
    return(
    <View style={styles.container}>
      <SearchBar />
      <ScrollView>
        <FlatList
        data={[
            {key: 'apples'},
            {key: 'pizza'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
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
   },

  
});

