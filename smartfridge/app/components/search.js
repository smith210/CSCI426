import React, { Component } from "react";
import { View , StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

  
  
class Search extends Component{
   state = {
       search: '',
   }
  
    updateSearch = search => {
      this.setState({search});
      
    }

    render(){
        const {search} = this.state;
        return (
          <View style={styles.search}>
          <Ionicons name="md-search" size={20}/>
          <TextInput placeholder='Type Search here' onChangeText={this.updateSearch} value={search} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        padding: 5
      }
});

export default Search;
  
  
