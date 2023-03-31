import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export const DetailsScreen = ({navigation, route}: Props) => {
  console.log(route.params);
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};
