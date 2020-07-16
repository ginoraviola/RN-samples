import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Wallet } from "./src/Wallet";

const WalletStack = createStackNavigator();

const WalletNavigator = () => {
  return (
      <WalletStack.Navigator headerMode='none'>
        <WalletStack.Screen name="Wallet" component={Wallet}/>
      </WalletStack.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <WalletNavigator/>
      </NavigationContainer>
  );
}
