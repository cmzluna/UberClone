import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import Map from 'src/components/Map';
import NavigationCard from 'src/components/NavigationCard';
import RideCard from 'src/components/RideCard';
import Styles from './styles';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <View style={{flex: 1}}>
        <Text>map screen</Text>
        <Map />
      </View>

      <Styles.Container>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigationCard"
            component={NavigationCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RideCard"
            component={RideCard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </Styles.Container>
    </>
  );
};

export default MapScreen;
