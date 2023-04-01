import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Cast} from '../interfaces/movieCreditsInterface';
import {getPathImage} from '../constant/utils';
import {colors} from '../theme/appTheme';
import {DEFAULT_IMAGE_PATH} from '../constant/constant';

interface Props {
  actor: Cast;
}

export const ActorItem = ({actor}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: actor.profile_path
            ? getPathImage(actor.profile_path)
            : DEFAULT_IMAGE_PATH,
        }}
        style={styles.imageContainer}
      />

      <View style={styles.actorContainer}>
        <Text style={styles.nameText}>{actor.name}</Text>
        <Text style={styles.characterText}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 70,
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginRight: 10,
    padding: 10,
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  actorContainer: {
    marginTop: 1,
    marginLeft: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  characterText: {
    fontSize: 16,
    opacity: 0.7,
  },
});
