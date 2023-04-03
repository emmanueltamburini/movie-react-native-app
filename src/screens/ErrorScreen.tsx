import React, {useContext, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, NativeModules} from 'react-native';
import {GradientContext} from '../context/GradientContext';
import {GradientBackground} from '../components/GradientBackground';
import {TouchableIcon} from '../components/TouchableIcon';

export const ErrorScreen = () => {
  const {dispatchColor} = useContext(GradientContext);
  const dispatchColorStatic = useRef(dispatchColor);

  useEffect(() => {
    dispatchColorStatic.current({primary: 'red', secondary: '#F5A2A2'});
  }, []);

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Something happened</Text>
        <Text style={styles.subtitle}>
          Sorry, something happened, it could be an issue with the network
          connection, please try again. if the problem persists please contact
          wit emmanueltamburini@gmail.com
        </Text>
        <TouchableIcon
          name="refresh-outline"
          size={50}
          color="black"
          onPress={() => NativeModules.DevSettings.reload()}
        />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});
