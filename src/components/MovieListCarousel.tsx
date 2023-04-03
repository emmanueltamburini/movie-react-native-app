import React, {useContext, useEffect, useRef} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../interfaces/movieInterface';
import {MovieCard} from './MovieCard';
import {getPathImage, getImageColors} from '../helpers/utils';
import {GradientContext} from '../context/GradientContext';

interface Props {
  movies: Movie[];
}

export const MovieListCarousel = ({movies}: Props) => {
  const {dispatchColor} = useContext(GradientContext);
  const {width: windowWith} = useWindowDimensions();

  const getPosterColors = async (index: number): Promise<void> => {
    const uri = getPathImage(movies[index].poster_path);

    const [primaryColor = 'white', secondaryColor = 'white'] =
      await getImageColors(uri);

    dispatchColor({
      primary: primaryColor,
      secondary: secondaryColor,
    });
  };

  const getPosterColorsStatic = useRef(getPosterColors);

  useEffect(() => {
    if (movies.length > 0) {
      getPosterColorsStatic.current(0);
    }
  }, [movies.length]);

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
