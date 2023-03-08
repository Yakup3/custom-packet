import {localStrings} from '../../../shared/localization';
import {ISelectedItem, ISelectedPadCount} from '../../../shared/models';

interface IData {
  standardPad: number;
  superPad: number;
  superPlusPad: number;
  dailyPad: number;
  superDailyPad: number;
  miniTampon: number;
  standardTampon: number;
}

export const arrangeSelectedData = (data: IData) => {
  const {
    standardPad,
    superPad,
    superPlusPad,
    dailyPad,
    superDailyPad,
    miniTampon,
    standardTampon,
  } = data;

  const padData = {
    name: localStrings.padPackets,
    padCounts: [
      {
        name: localStrings.standardPad,
        count: standardPad,
        price: 2.973,
      },
      {
        name: localStrings.superPad,
        count: superPad,
        price: 3.327,
      },
      {
        name: localStrings.superPlusPad,
        count: superPlusPad,
        price: 3.748,
      },
    ].filter((item: ISelectedPadCount) => item.count > 0),
  };

  const dailyPadData = {
    name: localStrings.dailyPadPackets,
    padCounts: [
      {
        name: localStrings.dailyPad,
        count: dailyPad,
        price: 1.972,
      },
      {
        name: localStrings.superDailyPad,
        count: superDailyPad,
        price: 2.092,
      },
    ].filter((item: ISelectedPadCount) => item.count > 0),
  };

  const tamponData = {
    name: localStrings.tamponPackets,
    padCounts: [
      {
        name: localStrings.miniTampon,
        count: miniTampon,
        price: 3.377,
      },
      {
        name: localStrings.standardTampon,
        count: standardTampon,
        price: 3.701,
      },
    ].filter((item: ISelectedPadCount) => item.count > 0),
  };

  const packetData = [padData, dailyPadData, tamponData].filter(
    (item: ISelectedItem) => {
      const padCount = item.padCounts.filter(
        (padCountItem: ISelectedPadCount) => padCountItem.count > 0,
      );
      return padCount.length > 0;
    },
  );

  return packetData;
};

export const calculateTotalPrice = (packetData: ISelectedItem[]) => {
  const totalPrice = packetData.reduce((acc: number, item: ISelectedItem) => {
    const padCount = item.padCounts.reduce(
      (acc: number, item: ISelectedPadCount) => {
        return acc + item.count * item.price;
      },
      0,
    );
    return acc + padCount;
  }, 0);

  return totalPrice.toFixed(2);
};
