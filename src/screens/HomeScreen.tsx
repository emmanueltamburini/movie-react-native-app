import React from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {colors} from '../theme/appTheme';
import {MovieCard} from '../components/MovieCard';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../interfaces/movieInterface';

const {width: windowWith} = Dimensions.get('window');

export const HomeScreen = () => {
  const {isLoading, nowPlayingMovies} = useMovies();
  const insets = useSafeAreaInsets();
  const currentStyles = currentStylesFunction(insets);

  if (isLoading) {
    return (
      <View style={currentStyles.loadingContainer}>
        <ActivityIndicator color={colors.red} size={100} />
      </View>
    );
  }

  return (
    <View style={currentStyles.container}>
      <View style={currentStyles.carouselContainer}>
        <Carousel
          data={nowPlayingMovies}
          renderItem={({item}: {item: Movie; index: number}): JSX.Element => (
            <MovieCard movie={item} />
          )}
          sliderWidth={windowWith}
          itemWidth={300}
          keyExtractor={(_, index) => `_key${index.toString()}`}
        />
      </View>
    </View>
  );
};

const currentStylesFunction = ({top}: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      top: top + 20,
    },
    carouselContainer: {
      height: 440,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
  });
