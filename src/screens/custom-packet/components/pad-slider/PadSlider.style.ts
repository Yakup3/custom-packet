import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../../theme/colors';

interface Style {
  padContainer: ViewStyle;
  title: TextStyle;
  minMaxContainer: ViewStyle;
  minMaxValue: TextStyle;
}

export default StyleSheet.create<Style>({
  padContainer: {
    width: '100%',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    color: colors.gray.dark,
  },
  minMaxContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  minMaxValue: {
    fontSize: 14,
    color: colors.gray.dark,
  },
});
