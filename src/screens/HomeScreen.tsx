import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import movieDB from '../api/movieDB';
import {NOW_PLAYING_PATH} from '../constant/path';

export const HomeScreen = () => {
  useEffect(() => {
    movieDB.get(NOW_PLAYING_PATH).then(resp => console.log(resp.data));
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};
