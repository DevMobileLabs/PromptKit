import { Dimensions } from 'react-native';

const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;
const SMALL_WIDTH = 402;

const { width, height } = Dimensions.get('window');

const isSmallScreen = width < SMALL_WIDTH;

function scaleWidth<T extends number>(value: T): T {
  return ((width * value) / DESIGN_WIDTH) as T;
}

function scaleHeight<T extends number>(value: T): T {
  return ((height * value) / DESIGN_HEIGHT) as T;
}

export { isSmallScreen, scaleHeight, scaleWidth, width };
