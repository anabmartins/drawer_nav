import * as React from 'react';
import { MaterialIcons } from "@expo/vector-icons";
// Drawer
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';
// Tela Home 
import { Home }  from './../../screens/Home'

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>

      <Screen
      name="Home"
      component={Home}
      options={{
        drawerLabel: 'Home',
        drawerIcon: () => <MaterialIcons name="home" size={30} color="blue" />,
        headerTitleStyle: {
          color: 'blue',
        },
      }}
      />
      
    </Navigator>


    );
}