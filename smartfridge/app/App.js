import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Home from './screens/home';

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
    /*<View style={styles.container}>
      <Home></Home>
    </View>
    
  );*/
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
