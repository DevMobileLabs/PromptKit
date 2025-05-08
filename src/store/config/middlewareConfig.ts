import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

export const apiMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    let errorMessage = 'Something went wrong';

    switch (true) {
      case typeof action.payload === 'string': {
        errorMessage = action.payload;
        break;
      }
      case action.payload && typeof action.payload === 'object' && 'message' in action.payload: {
        errorMessage = (action.payload as { message?: string }).message || errorMessage;
        break;
      }
      default:
        break;
    }
    Alert.alert('Error', errorMessage);
  }

  return next(action);
};
