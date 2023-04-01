import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import {MoviePicture} from '../components/MoviePicture';
import {colors} from '../theme/appTheme';
import {useMoviesDetails} from '../hooks/useMoviesDetails';
import {MovieDetails} from '../components/MovieDetails';

const screenDimensions = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export const DetailsScreen = ({route}: Props) => {
  const movie = route.params;

  const {isLoading, cast, movieDetails} = useMoviesDetails({movieID: movie.id});

  console.log(isLoading, cast, movieDetails);

  return (
    <ScrollView style={styles.container}>
      <MoviePicture
        movie={movie}
        imageContainer={styles.imageContainer}
        imageStyle={styles.imageStyle}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading || !movieDetails ? (
        <ActivityIndicator
          size={30}
          color={colors.gray}
          style={styles.loadingContainer}
        />
      ) : (
        <MovieDetails movieDetails={movieDetails} cast={cast} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: screenDimensions.height * 0.7,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  loadingContainer: {
    marginTop: 20,
  },
  imageStyle: {
    flex: 1,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  titleContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
