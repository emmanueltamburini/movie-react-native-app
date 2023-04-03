import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({children}: Props) => (
  <GradientProvider>{children}</GradientProvider>
);

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};
