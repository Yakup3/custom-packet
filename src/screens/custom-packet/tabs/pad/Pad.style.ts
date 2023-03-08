import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../../../theme/colors';

interface Style {
  container: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    padding: 10,
    backgroundColor: colors.text.white,
  },
});
