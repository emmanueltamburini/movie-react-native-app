import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {colors} from '../theme/appTheme';
import {Movie} from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
