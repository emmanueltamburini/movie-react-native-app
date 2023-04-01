import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MovieDetailsInterface} from '../interfaces/movieDetailsInterface';
import {Cast} from '../interfaces/movieCreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/appTheme';
import currencyFormatter from 'currency-formatter'

interface Props {
  movieDetails: MovieDetailsInterface;
  cast: Cast[];
}

export const MovieDetails = ({movieDetails, cast}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.basicInfoContainer}>
        <View style={styles.rateContainer}>
          <Icon name="star-outline" color={colors.gray} size={16} />
          <Text> {movieDetails.vote_average}</Text>
          <Text>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  bodyText: {
    fontSize: 16,
  },
  budgetText: {
    fontSize: 18,
  },
});
