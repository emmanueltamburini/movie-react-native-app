import React from 'react';
import {View, StyleSheet, Image, ViewStyle, ImageStyle} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {getPathImage} from '../constant/utils';

interface Props {
  movie: Movie;
  imageContainer?: ViewStyle;
  imageStyle?: ImageStyle;
}

export const MoviePicture = ({movie, imageContainer, imageStyle}: Props) => {
  const currentStyles = currentStylesFunction(imageContainer, imageStyle);

  return (
    <View style={currentStyles.imageContainer}>
      <Image
        source={{uri: getPathImage(movie.poster_path)}}
        style={currentStyles.imageStyle}
      />
    </View>
  );
};

const currentStylesFunction = (
  imageContainer?: ViewStyle,
  imageStyle?: ImageStyle,
) =>
  StyleSheet.create({
    imageContainer: imageContainer
      ? imageContainer
      : {
          flex: 1,
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
    imageStyle: imageStyle
      ? imageStyle
      : {
          flex: 1,
          borderRadius: 18,
        },
  });
