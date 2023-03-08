import React from 'react';
import {TouchableWithoutFeedback, View, Modal} from 'react-native';

import styles from './Modal.style';

interface IModalProps {
  animationType: 'none' | 'slide' | 'fade';
  transparent: boolean;
  visible: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

export default function CustomModal(props: IModalProps) {
  return (
    <Modal
      animationType={props.animationType}
      transparent={props.transparent}
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <TouchableWithoutFeedback onPress={props.onRequestClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      {props.children}
    </Modal>
  );
}
