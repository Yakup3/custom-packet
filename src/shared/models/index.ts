interface ISelectedPadCount {
  name: string;
  count: number;
  price: number;
}

interface ISelectedItem {
  name: string;
  padCounts: ISelectedPadCount[];
}

export type {ISelectedPadCount, ISelectedItem};
