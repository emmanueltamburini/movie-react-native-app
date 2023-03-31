import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MovieCard} from './MovieCard';
import {colors} from '../theme/appTheme';

interface Props {
  title?: string;
  movies: Movie[];
}

export const MovieListSlider = ({movies, title}: Props) => {
  const currentStyles = currentStylesFunction(title);

  return (
    <View style={currentStyles.flatListContainer}>
      {title && <Text style={currentStyles.title}> {title} </Text>}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({item}: {item: Movie; index: number}): JSX.Element => (
          <MovieCard
            movie={item}
            height={200}
            width={140}
            marginHorizontal={2}
            paddingBottom={20}
            paddingHorizontal={7}
          />
        )}
        keyExtractor={(_, index) => `_key${index.toString()}`}
      />
    </View>
  );
};

const currentStylesFunction = (title?: string) =>
  StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.black,
    },
    flatListContainer: {
      height: title ? 260 : 240,
    },
  });
