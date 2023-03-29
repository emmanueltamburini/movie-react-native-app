import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useMovies} from '../hooks/useMovies';
import {colors} from '../theme/appTheme';
import {MovieComponent} from '../components/MovieComponent';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

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
      <MovieComponent movie={nowPlayingMovies[0]} />
    </View>
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
