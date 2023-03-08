import * as React from 'react';
import {View} from 'react-native';

import styles from './Pad.style';
import {localStrings} from '../../../../shared/localization';
import PadSlider from '../../components/pad-slider/PadSlider';

interface IPadProps {
  handleOnStandard: (value: number) => void;
  handleOnSuper: (value: number) => void;
  handleOnSuperPlus: (value: number) => void;
}

const Pad = (props: IPadProps) => {
  const [minimumValue] = React.useState(0);
  const [maximumValue] = React.useState(60);

  const renderPad = (
    padTitle: string,
    onSlidingComplete: (value: number) => void,
  ) => (
    <PadSlider
      step={10}
      value={0}
      title={padTitle}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      onSlidingComplete={onSlidingComplete}
    />
  );

  return (
    <View style={styles.container}>
      {renderPad(localStrings.standardPad, props.handleOnStandard)}
      {renderPad(localStrings.superPad, props.handleOnSuper)}
      {renderPad(localStrings.superPlusPad, props.handleOnSuperPlus)}
    </View>
  );
};

export default Pad;
