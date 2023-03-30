import React from 'react';
import {View, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {colors} from '../theme/appTheme';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {MovieListSlider} from '../components/MovieListSlider';
import {MovieListCarousel} from '../components/MovieListCarousel';

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
    <ScrollView>
      <View style={currentStyles.container}>
        <MovieListCarousel movies={nowPlayingMovies} />

        <MovieListSlider movies={nowPlayingMovies} title="En cines" />
      </View>
    </ScrollView>
  );
};

const currentStylesFunction = ({top}: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      top: top + 20,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
  });
