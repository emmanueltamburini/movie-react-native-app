import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MovieDetailsInterface} from '../interfaces/movieDetailsInterface';
import {Cast} from '../interfaces/movieCreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/appTheme';
import currencyFormatter from 'currency-formatter';
import {ActorItem} from './ActorItem';

interface Props {
  movieDetails: MovieDetailsInterface;
  cast: Cast[];
}

export const MovieDetails = ({movieDetails, cast}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.basicInfoContainer}>
        <View style={styles.rateContainer}>
          <Icon name="star-outline" color={colors.black} size={16} />
          <Text style={styles.text}> {movieDetails.vote_average}</Text>
          <Text style={styles.text}>
            {' '}
            - {movieDetails.genres.map(gender => gender.name).join(', ')}
          </Text>
        </View>
        <Text style={styles.titleText}>Overview</Text>
        <Text style={styles.bodyText}>{movieDetails.overview}</Text>
        <Text style={styles.titleText}>Budget</Text>
        <Text style={styles.budgetText}>
          {currencyFormatter.format(movieDetails.budget, {code: 'USD'})}
        </Text>
        <Text style={styles.titleText}>Cast</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={cast}
          renderItem={({item}: {item: Cast; index: number}): JSX.Element => (
            <ActorItem actor={item} />
          )}
          keyExtractor={(_, index) => `_key${index.toString()}`}
          style={styles.flatList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  basicInfoContainer: {
    marginHorizontal: 20,
  },
  rateContainer: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    color: colors.black,
  },
  bodyText: {
    fontSize: 16,
    color: colors.black,
  },
  budgetText: {
    fontSize: 18,
    color: colors.black,
  },
  flatList: {
    marginTop: 10,
    height: 90,
  },
  text: {
    color: colors.black,
  },
});
