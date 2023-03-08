import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  slider: ViewStyle;
}

export default StyleSheet.create<Style>({
  slider: {
    width: '100%',
    marginBottom: 10,
  },
});
