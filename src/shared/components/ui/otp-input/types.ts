import { AppearanceMode } from '@/types/theme';
import { TextStyle, ViewStyle } from 'react-native';
import { ViewProps } from 'react-native';

export interface OTPInputProps extends ViewProps {
  numberOfDigits?: number;
  onChange?: (otp: string) => void;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  autoFocus?: boolean;
  theme?: AppearanceMode;
}
