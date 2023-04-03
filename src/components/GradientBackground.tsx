import React, {useContext, useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, dispatchPreviousColor} =
    useContext(GradientContext);

  const {fadeIn, fadeOut, opacity} = useFade();

  const fadeInStatic = useRef(fadeIn);
  const fadeOutStatic = useRef(fadeOut);
  const dispatchPreviousColorStatic = useRef(dispatchPreviousColor);

  const styles = stylesFunction(opacity);

  useEffect(() => {
    fadeInStatic.current(() => {
      dispatchPreviousColorStatic.current(colors);
      fadeOutStatic.current();
    });
  }, [colors]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />

      <Animated.View style={styles.linearGradient}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const stylesFunction = (opacity: Animated.Value) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const linearGradient: Animated.WithAnimatedObject<ViewStyle> = {
    ...StyleSheet.absoluteFillObject,
    opacity: opacity,
  };

  return {...styles, linearGradient};
};
