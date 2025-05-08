import 'react-native-gesture-handler/jestSetup';
import '@testing-library/jest-native/extend-expect';

// Polyfill for setImmediate
(global as any).setImmediate = (callback: (...args: any[]) => void, ...args: any[]) => {
  return setTimeout(callback, 0, ...args);
};

// Polyfill for clearImmediate
(global as any).clearImmediate = (id: number) => {
  clearTimeout(id);
};

jest.mock('expo-status-bar', () => ({
  StatusBar: () => null,
}));

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
