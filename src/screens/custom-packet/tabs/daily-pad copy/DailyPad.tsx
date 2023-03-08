import * as React from 'react';
import {View} from 'react-native';

import styles from './DailyPad.style';
import PadSlider from '../../components/pad-slider/PadSlider';
import {localStrings} from '../../../../shared/localization';

interface IDailyPadProps {
  handleOnStandard: (value: number) => void;
  handleOnSuper: (value: number) => void;
}

const DailyPad = (props: IDailyPadProps) => {
  const [minimumValue] = React.useState(0);
  const [maximumValue] = React.useState(100);

  const renderPad = (
    padTitle: string,
    onSlidingComplete: (value: number) => void,
  ) => (
    <PadSlider
      step={10}
      title={padTitle}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      onSlidingComplete={onSlidingComplete}
    />
  );

  return (
    <View style={styles.container}>
      {renderPad(localStrings.dailyPad, props.handleOnStandard)}
      {renderPad(localStrings.superDailyPad, props.handleOnSuper)}
    </View>
  );
};

export default DailyPad;
