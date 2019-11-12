import React from 'react';
import { StyleSheet, } from 'react-native';
import { createAppContainer , } from 'react-navigation';



import Drawer from './components/navigation';

const AppNavigator = createAppContainer(Drawer);

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


