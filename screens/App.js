import '../gesture-handler';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Main';
import Description from './Description';
import Pokemon from './Pokemon';

export default function App() {
  const Stack=createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown:false}}>

        </Stack.Screen>

        <Stack.Screen
        name="Description"
        component={Description}
        options={{headerShown:false}}> 
        </Stack.Screen>

        <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{headerShown:false}}> 
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
