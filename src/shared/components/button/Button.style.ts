import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../../theme/colors';

interface Style {
  button: ViewStyle;
  labelStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue.darkest,
  },
  labelStyle: {
    color: colors.text.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
