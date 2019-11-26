import React ,{Component,}from 'react';
import { StyleSheet,View } from 'react-native';
import { createAppContainer , } from 'react-navigation';
import 'react-native-gesture-handler';




import Nav from './components/navigation';


const AppNavigator = createAppContainer(Nav);

class App extends Component{
 
  render(){
    return(
      <AppNavigator/>
  )}
    
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default App;


