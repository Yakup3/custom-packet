import {Dimensions} from 'react-native';
import {localStrings} from '../localization';

export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;

export const ROUTES = [
  {key: 'pad', title: localStrings.beijePad},
  {key: 'dailyPad', title: localStrings.beijeDailyPad},
  {key: 'tampon', title: localStrings.beijeTampon},
];

export const CART = 'CART';
