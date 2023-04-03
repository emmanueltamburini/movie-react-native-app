import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  ScaledSize,
  useWindowDimensions,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import {MoviePicture} from '../components/MoviePicture';
import {colors} from '../theme/appTheme';
import {useMoviesDetails} from '../hooks/useMoviesDetails';
import {MovieDetails} from '../components/MovieDetails';
import {TouchableIcon} from '../components/TouchableIcon';
import {ErrorScreen} from './ErrorScreen';

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> {}

export const DetailsScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const screenDimensions = useWindowDimensions();

  const {isLoading, cast, movieDetails, failed} = useMoviesDetails({
    movieID: movie.id,
  });

  const styles = stylesFunction(screenDimensions);

  if (failed) {
    return <ErrorScreen />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageCenter}>
        <MoviePicture
          movie={movie}
          imageContainer={styles.imageContainer}
          imageStyle={styles.imageStyle}
        />
      </View>
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
      <TouchableIcon
        onPress={() => navigation.pop()}
        style={styles.backButton}
        color={colors.white}
        name="arrow-back-outline"
        size={40}
      />
    </ScrollView>
  );
};

const stylesFunction = (screenDimensions: ScaledSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      width: '100%',
      height:
        screenDimensions.width > 600
          ? screenDimensions.height
          : screenDimensions.height * 0.7,
      borderRadius: 18,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,
      elevation: 9,
      maxWidth: screenDimensions.width > 600 ? 300 : 5000,
    },
    loadingContainer: {
      marginTop: 20,
    },
    imageStyle: {
      flex: 1,
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,
      maxWidth: screenDimensions.width > 600 ? 300 : 5000,
    },
    imageCenter: {
      alignItems: 'center',
    },
    titleContainer: {
      marginHorizontal: 20,
      marginTop: 20,
    },
    subTitle: {
      color: colors.black,
      fontSize: 16,
      opacity: 0.8,
    },
    title: {
      color: colors.black,
      fontSize: 20,
      fontWeight: 'bold',
    },
    backButton: {
      position: 'absolute',
      zIndex: 10,
      elevation: 10,
      top: 10,
      left: 8,
      opacity: 0.5,
    },
  });
