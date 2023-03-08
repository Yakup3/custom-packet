import * as React from 'react';
import Slider from '@react-native-community/slider';

import styles from './Slider.style';
import colors from '../../../theme/colors';

interface ISliderProps {
  step: number;
  value: number;
  minimumValue: number;
  maximumValue: number;
  onSlidingComplete: (value: number) => void;
}

const SliderComponent = (props: ISliderProps) => {
  return (
    <Slider
      style={styles.slider}
      value={props.value}
      step={props.step}
      tapToSeek={true}
      minimumValue={props.minimumValue}
      maximumValue={props.maximumValue}
      thumbTintColor={colors.blue.darkest}
      maximumTrackTintColor={colors.gray.medium}
      minimumTrackTintColor={colors.blue.darkest}
      onSlidingComplete={props.onSlidingComplete}
    />
  );
};

export default SliderComponent;
