import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../../theme/colors';

interface Style {
  modalOverlay: ViewStyle;
}

export default StyleSheet.create<Style>({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.modalBackground,
  },
});
