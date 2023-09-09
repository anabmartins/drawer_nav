import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// Drawer
import { DrawerRoutes } from '../drawer/drawer.routes';
//Telas
import { Caveira } from './../../screens/Caveira'

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes(){
  return (
    <Navigator initialRouteName="Caveira">
    <Screen
    name="Caveira"
    options={{
      title: "Caveira",
      headerShown: false,
    }}
    component={Caveira}
    />
     <Screen
    name="DrawerRoutes"
    options={{
      title: "Drawer",
      headerShown: false,
    }}
    component={DrawerRoutes}
    />
    </Navigator>
  )
}