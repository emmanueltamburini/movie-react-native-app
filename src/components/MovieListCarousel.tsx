import React, {useContext} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../interfaces/movieInterface';
import {MovieCard} from './MovieCard';
import {getPathImage, getImageColors} from '../helpers/utils';
import {GradientContext} from '../context/GradientContext';

const {width: windowWith} = Dimensions.get('window');

interface Props {
  movies: Movie[];
}

export const MovieListCarousel = ({movies}: Props) => {
  const {dispatchColor} = useContext(GradientContext);
  const getPosterColors = async (index: number): Promise<void> => {
    const uri = getPathImage(movies[index].poster_path);

    const [primaryColor = 'white', secondaryColor = 'white'] =
      await getImageColors(uri);

    dispatchColor({
      primary: primaryColor,
      secondary: secondaryColor,
    });

    console.log(uri, primaryColor, secondaryColor);
  };

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
        inactiveSlideOpacity={0.95}
        onSnapToItem={index => getPosterColors(index)}
      />
    </View>
  );
};

const currentStyles = StyleSheet.create({
  carouselContainer: {
    height: 440,
  },
});
