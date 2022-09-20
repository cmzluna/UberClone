import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'screens/Home';
import MapScreen from 'screens/Map';

const MainStack = createNativeStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="HomeScreen"
      component={Home}
      options={{headerShown: false}}
    />
    <MainStack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{headerShown: false}}
    />
  </MainStack.Navigator>
);

export default MainStackScreen;
