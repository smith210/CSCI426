import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/home';

//const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <View style={styles.container}>
      <Header 
        leftComponent ={ <Ionicons name="md-menu" size={32} color={'#fff'}/> }
        centerComponent={{text: 'SmartFridge',   style:{ color: '#fff', fontSize: 24}} }
      />
      <Home></Home>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    /*flex: 1,
    backgroundColor: '#fff',
    alignItems: '',
    justifyContent: 'center',*/
  },

});
