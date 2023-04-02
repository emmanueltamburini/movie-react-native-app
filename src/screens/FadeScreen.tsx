import React from 'react';
import {View, StyleSheet, Animated, Button, ViewStyle} from 'react-native';
import {colors} from '../theme/appTheme';
import {useFade} from '../hooks/useFade';

export const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();
  const styles = stylesFunction(opacity);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.innerContainer} />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const stylesFunction = (opacity: Animated.Value) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const innerContainer: Animated.WithAnimatedObject<ViewStyle> = {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderColor: colors.white,
    borderWidth: 5,
    opacity: opacity,
  };

  return {...styles, innerContainer};
};
