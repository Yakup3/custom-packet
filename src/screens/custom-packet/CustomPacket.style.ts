import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ScreenHeight, ScreenWidth} from '../../shared/constants';
import colors from '../../theme/colors';

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
  headerContainer: ViewStyle;
  headerTitle: TextStyle;
  headerIconsContainer: ViewStyle;
  headerIconContainer: ViewStyle;
  itemInCartContainer: ViewStyle;
  itemInCart: TextStyle;
  titleText: TextStyle;
  descriptionText: TextStyle;
  tabViewContainer: ViewStyle;
  tabBarLabelStyle: TextStyle;
  disabledButton: ViewStyle;
  disabledButtonLabel: TextStyle;
  modalContent: ViewStyle;
  modalHeaderContainer: ViewStyle;
  modalTitle: TextStyle;
  deliveryDescriptionContainer: ViewStyle;
  deliveryDescriptionText: TextStyle;
  packetImageContainer: ViewStyle;
  packetImage: ImageStyle;
  selectedItemsContainer: ViewStyle;
  selectedItemContainer: ViewStyle;
  selectedItemTitle: TextStyle;
  selectedItemDetailText: TextStyle;
  removeFromPacket: TextStyle;
  modalContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: '100%',
    backgroundColor: colors.text.white,
  },
  contentContainer: {
    paddingVertical: 50,
    paddingHorizontal: 17,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.orange.dark,
  },
  headerIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemInCartContainer: {
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: colors.green.darker,
    position: 'absolute',
    right: -13,
    top: -13,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemInCart: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text.white,
  },
  headerIconContainer: {
    marginRight: 15,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: colors.text.black,
  },
  descriptionText: {
    fontSize: 16,
    color: colors.text.black,
  },
  tabViewContainer: {
    width: ScreenWidth * 0.9,
    height: 400,
    marginBottom: 50,
  },
  tabBarLabelStyle: {
    color: colors.gray.dark,
    textAlign: 'center',
  },
  disabledButton: {
    width: '100%',
    height: 50,
    borderRadius: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray.medium,
  },
  disabledButtonLabel: {
    color: colors.gray.dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContent: {
    width: ScreenWidth * 0.9,
    maxHeight: ScreenHeight * 0.8,
    alignSelf: 'center',
    marginTop: ScreenHeight * 0.11,
    backgroundColor: colors.text.white,
    shadowColor: colors.text.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContainer: {
    padding: 35,
  },
  modalHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text.black,
  },
  deliveryDescriptionContainer: {
    height: 50,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.text.white,
    shadowColor: colors.text.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  deliveryDescriptionText: {
    fontSize: 16,
    marginLeft: 6,
    color: colors.text.black,
  },
  packetImageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 40,
    backgroundColor: colors.text.white,
  },
  packetImage: {
    width: '100%',
    height: '100%',
  },
  selectedItemsContainer: {
    width: '100%',
  },
  selectedItemContainer: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 20,
    padding: 15,
    backgroundColor: colors.text.white,
    shadowColor: colors.text.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'space-between',
  },
  selectedItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text.black,
  },
  selectedItemDetailText: {
    fontSize: 14,
    color: colors.gray.dark,
  },
  removeFromPacket: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text.black,
  },
});
