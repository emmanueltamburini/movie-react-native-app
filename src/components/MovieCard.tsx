import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {getPathImage} from '../constant/utils';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  marginHorizontal?: number;
}

export const MovieCard = ({movie, height, width, marginHorizontal}: Props) => {
  const currentStyles = currentStylesFunction(height, width, marginHorizontal);

  return (
    <View style={currentStyles.container}>
      <View style={currentStyles.imageContainer}>
        <Image
          source={{uri: getPathImage(movie.poster_path)}}
          style={currentStyles.image}
        />
      </View>
    </View>
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
