import React, { Component } from 'react';
import { Text, View, Button, StyleSheet,SafeAreaView, ProgressBarAndroid, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';




export default class Home extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     expiringSoon: []
  //   }
  // }

  // renderItem = ({item}) => {
  //   return(
  //     //TODO get icon, names, and expiration date from database
  //     <View style = {{flex: 1, flexDirection: 'row', marginBottom: 3}}> 
  //       <Image style={{width: 80, height: 80, margin: 5}}
  //         source={{uri: item.icon}} /> 
  //       <View style={{flex: 1, justifyContent: 'center', marginLeft: 5}}>
  //         <Text style ={{fontSize: 18, marginBottom: 5}}>
  //           {item.name}
  //         </Text>
  //         <Text style={{fontSize: 15, color: 'red'}}>
  //           {item.expdate}
  //         </Text>
  //       </View>
  //     </View>
  //   )
  // }

  // //creates the black line between each items 
  // renderSeparator = () => {
  //   <View style={{height:1, width:'100%', background: 'black'}}>
  //   </View>
  // }

  // //TODO: look at database and replace url
  // getFromDatabase(){
  //   //url
  //   fetch(url)
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     this.setState({
  //       expiringSoon: responseJson.name //TODO replace with database schema
  //     })
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }


  // render() {
  //   return(
  //     <View style = {styles.container}>
  //       <FlatList
  //         data={this.state.expiringSoon}
  //         renderItem={this.renderItem}
  //         keyExtractor={(item, index) => index}
  //         ItemSeparatorComponent={this.renderSeparator}
  //       />
  //     </View>
  //   );
  // }


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

        <Text style = {{fontSize: 24, fontWeight: 'bold', marginBottom: 3, marginLeft: 10}}>
          Your Fridge
        </Text>
        <Text style = {{fontSize: 18, marginBottom: 5, marginLeft: 12}}> 
          Your Status: Healthy!
        </Text>


        <View style={{marginLeft: 25, marginRight: 45, marginBottom: 40}}>
					<ProgressBarAndroid 
						styleAttr='Horizontal'
						indeterminate={false}
						progress={0.85}
					/>
				</View>



        <Text style = {{fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginBottom: 5}}>
          Expiring Soon
        </Text>

        <View style={styles.containers}>
          <FlatList
            data={[
                {key: 'apples'},
                {key: 'pizza'}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />

        </View>

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


