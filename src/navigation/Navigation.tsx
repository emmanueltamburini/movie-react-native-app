import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailsScreen} from '../screens/DetailsScreen';
import {colors} from '../theme/appTheme';
import {Movie} from '../interfaces/movieInterface';
import {StyleSheet} from 'react-native';

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
      }}>
      <Stack.Screen
        name="HomeScreen"
        options={{cardStyle: styles.homeScreen}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="DetailsScreen"
        options={{cardStyle: styles.detailsScreen}}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: colors.white,
  },
  detailsScreen: {
    backgroundColor: colors.white,
  },
});
