import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export function Caveira() {

  const navigation = useNavigation();
  
  function openScreen(){
      navigation.navigate('DrawerRoutes')
  }

  return (
    <View style={styles.container}>
      <View style={styles.btn}>
      <ImageBackground source={require("../../../assets/img/blueskull.jpeg")} 
      style={styles.img}>
<Text style={styles.press}>
★·.·´¯`·.·★
<br />
SELL YOUR SOUL TO THE BLUE SKULL!! 
<br />
★·.·´¯`·.·★
</Text>
<TouchableOpacity onPress={openScreen} style={styles.btnSell}>
  <Text style={styles.textBtn}>I AGREE</Text>
</TouchableOpacity>
      </ImageBackground>
      </View>
    </View>
  );
}