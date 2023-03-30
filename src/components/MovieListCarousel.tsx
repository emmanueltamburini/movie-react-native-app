import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../interfaces/movieInterface';
import {MovieCard} from './MovieCard';

const {width: windowWith} = Dimensions.get('window');

interface Props {
  movies: Movie[];
}

export const MovieListCarousel = ({movies}: Props) => {
  return (
    <View style={currentStyles.carouselContainer}>
      <Carousel
        data={movies}
        renderItem={({item}: {item: Movie; index: number}): JSX.Element => (
          <MovieCard movie={item} />
        )}
        sliderWidth={windowWith}
        itemWidth={300}
        keyExtractor={(_, index) => `_key${index.toString()}`}
      />
    </View>
  );
};

const currentStyles = StyleSheet.create({
  carouselContainer: {
    height: 440,
  },
});
