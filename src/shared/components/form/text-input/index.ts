/* eslint-disable @typescript-eslint/naming-convention */
import { Platform } from 'react-native';

import TextInputFieldAndroid from './TextInputField.android';
import TextInputFieldIos from './TextInputField.ios';

const TextInputField = Platform.select({
  ios: () => TextInputFieldIos,
  android: () => TextInputFieldAndroid,
  default: () => TextInputFieldIos,
})();

export default TextInputField;
