import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';

import styles from './Button.style';

interface IButtonProps {
  label: string;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  labelStyle?: ViewStyle;
  onPress: () => void;
}

export default function Button(props: IButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, props.buttonStyle]}
      disabled={props.disabled || false}
      onPress={props.onPress}>
      <Text style={[styles.labelStyle, props.labelStyle]}>{props.label}</Text>
    </TouchableOpacity>
  );
}
