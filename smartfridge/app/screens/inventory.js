import React, { Component,} from 'react';
import { Text, View,  StyleSheet, FlatList, ScrollView } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';

import FoodItem from '../objects/FoodItem';

import SearchBar from '../components/search';


export default class Inventory extends Component {
	constructor(){
		super();
		/*
		loading => whether the data is being reimplemented
		data    => all data
		error	=> if search throws an error
		userInput => what is being searched for
		searchData => what has been returned from the query
		*/
		this.state = {
			loading: false,
			data: [],
			error: null,
			userInput: "",
			seatchData: [],
		}
	}
	/*
	contains({name, category}, search)
		filters results based on search, returns true if found, otherwise returns false
	*/
	contains = ({name, quantity, category, expire}, search) => {
		if (name.includes(search) || categories.includes(search)){
			return true;
		}
		return false;
	}

	/*
	handleSearch(text):
		based on user input, update userInput
	*/
	handleSearch = (text) => {
		const formatQuery = text.toLowerCase();
		const data = _.filter(this.state.data, food => {
			return this.contains(food, formatQuery)
		});
		this.setState({
			userInput: formatQuery,
			data: data
		})
	}

  render() {
    return(
    <View style={styles.container}>
      <SearchBar onChangeText={this.handleSearch} />
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

