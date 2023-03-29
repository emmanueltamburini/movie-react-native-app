import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {getPathImage} from '../constant/utils';

interface Props {
  movie: Movie;
}

export const MovieComponent = ({movie}: Props) => {
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

const currentStyles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
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
    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
