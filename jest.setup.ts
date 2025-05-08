import "react-native-gesture-handler/jestSetup";
import "@testing-library/jest-native/extend-expect";

jest.mock("expo-status-bar", () => ({
  StatusBar: () => null,
}));
