import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/appTheme';

interface Props {
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const TouchableIcon = ({name, color, size, onPress, style}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Icon
        name={name}
        size={size ? size : 65}
        color={color ? color : colors.primary}
      />
    </TouchableOpacity>
  );
};
