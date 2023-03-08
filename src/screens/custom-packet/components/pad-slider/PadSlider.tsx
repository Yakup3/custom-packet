import * as React from 'react';

import styles from './PadSlider.style';
import {Text, View} from 'react-native';
import SliderComponent from '../../../../shared/components/slider/Slider';

interface IPadSliderProps {
  step: number;
  title: string;
  value: number;
  minimumValue: number;
  maximumValue: number;
  onSlidingComplete: (value: number) => void;
}

const PadSlider = (props: IPadSliderProps) => {
  return (
    <View style={styles.padContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <SliderComponent
        step={props.step}
        value={props.value}
        minimumValue={props.minimumValue}
        maximumValue={props.maximumValue}
        onSlidingComplete={props.onSlidingComplete}
      />
      <View style={styles.minMaxContainer}>
        <Text style={styles.minMaxValue}>{props.minimumValue}</Text>
        <Text style={styles.minMaxValue}>{props.maximumValue}</Text>
      </View>
    </View>
  );
};

export default PadSlider;
