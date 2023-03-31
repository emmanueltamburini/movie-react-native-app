import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {getPathImage} from '../constant/utils';
import {useNavigation} from '@react-navigation/core';
import {RootStackParams} from '../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  marginHorizontal?: number;
}

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'HomeScreen'
>;

export const MovieCard = ({movie, height, width, marginHorizontal}: Props) => {
  const currentStyles = currentStylesFunction(height, width, marginHorizontal);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen', movie)}
      activeOpacity={0.8}
      style={currentStyles.container}>
      <View style={currentStyles.imageContainer}>
        <Image
          source={{uri: getPathImage(movie.poster_path)}}
          style={currentStyles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const currentStylesFunction = (
  height?: number,
  width?: number,
  marginHorizontal?: number,
) =>
  StyleSheet.create({
    container: {
      width: width ? width : 300,
      height: height ? height : 420,
      marginHorizontal: marginHorizontal ? marginHorizontal : 0,
    },
    imageContainer: {
      flex: 1,
      borderRadius: 18,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 9,
    },
    image: {
      flex: 1,
      borderRadius: 18,
    },
  });
