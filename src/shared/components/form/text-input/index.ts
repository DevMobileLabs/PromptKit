/* eslint-disable @typescript-eslint/naming-convention */
import { Platform } from 'react-native';

import TextInputFieldAndroid from './text-input-field.android';
import TextInputFieldIos from './text-input-field.ios';

const TextInputField = Platform.select({
  ios: () => TextInputFieldIos,
  android: () => TextInputFieldAndroid,
  default: () => TextInputFieldIos,
})();

export default TextInputField;
