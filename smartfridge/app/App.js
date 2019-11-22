import React from 'react';
import { StyleSheet, } from 'react-native';
import { createAppContainer , } from 'react-navigation';
import 'react-native-gesture-handler';



import Nav from './components/navigation';


const AppNavigator = createAppContainer(Nav);

export default function App() {
    return <AppNavigator/>
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});


