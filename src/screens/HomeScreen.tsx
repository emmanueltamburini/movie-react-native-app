import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import movieDB from '../api/movieDB';
import {NOW_PLAYING_PATH} from '../constant/path';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';

export const HomeScreen = () => {
  useEffect(() => {
    movieDB
      .get<MovieDBNowPlaying>(NOW_PLAYING_PATH)
      .then(resp => console.log(resp.data.results[0].original_title));
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
