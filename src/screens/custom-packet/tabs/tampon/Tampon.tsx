import * as React from 'react';
import {View} from 'react-native';

import styles from './Tampon.style';
import PadSlider from '../../components/pad-slider/PadSlider';
import {localStrings} from '../../../../shared/localization';

interface ITamponProps {
  handleOnMini: (value: number) => void;
  handleOnStandard: (value: number) => void;
}

const Tampon = (props: ITamponProps) => {
  const [minimumValue] = React.useState(0);
  const [maximumValue] = React.useState(60);

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
      {renderPad(localStrings.miniTampon, props.handleOnMini)}
      {renderPad(localStrings.standardTampon, props.handleOnStandard)}
    </View>
  );
};

export default Tampon;
