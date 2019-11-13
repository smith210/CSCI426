import { createDrawerNavigator, } from 'react-navigation-drawer';
import { Header,  Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, } from 'react-navigation-stack';

import Home from '../screens/home';
import Inventory from '../screens/inventory';

const NavStack = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      title: 'HomeScreen',
      headerLeft: ()=> (
        <Button buttonStyle={styles.container} icon={<Ionicons name="md-menu" size={32} color={'#000'}/>} />
      ),
    },
  },

  InventoryScreen: {
    screen: Inventory,
    navigationOptions: {
      title:'InventoryScreen',
      
    },
  },


});

const DrawerNav = createDrawerNavigator(
{
  Home: NavStack,
},

{
  initalRouteName: 'Home'
}
)

export default DrawerNav;


