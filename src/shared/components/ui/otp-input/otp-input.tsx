import { ColorTypes } from '@/app/theme';
import { getThemeColors } from '@/shared/utils';
import { AppearanceMode } from '@/types/theme';
import React, { useMemo, useRef, useState } from 'react';
import { StyleSheet, TextInput, TextStyle, View, ViewProps, ViewStyle } from 'react-native';

export interface OTPInputProps extends ViewProps {
  length?: number;
  onChange?: (otp: string) => void;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  autoFocus?: boolean;
  theme?: AppearanceMode;
}

const OTPInput: React.FC<OTPInputProps> = ({
  length = 4,
  onChange,
  inputStyle,
  containerStyle,
  autoFocus = false,
  theme = 'light',
  ...props
}) => {
  const colors = getThemeColors(theme);
  const [otp, setOtp] = useState(Array(length).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<TextInput[]>([]);
  const styles = useMemo(() => createStyles(colors), [colors]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === '') {
      const updatedOtp = [...otp];
      updatedOtp[index] = text;
      setOtp(updatedOtp);
      onChange?.(updatedOtp.join(''));

      if (text !== '' && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View testID="otp-container" style={[styles.container, containerStyle]} {...props}>
      {Array.from({ length }).map((_, index) => (
        <TextInput
          testID={`otp-input-${index}`}
          key={index}
          style={[styles.input, inputStyle, focusedIndex === index && styles.inputFocused]}
          value={otp[index]}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(null)}
          ref={(ref) => {
            inputRefs.current[index] = ref!;
            if (autoFocus && index === 0) {
              ref?.focus();
            }
          }}
        />
      ))}
    </View>
  );
};

const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingHorizontal: 10,
      width: '100%',
      flexWrap: 'wrap',
    },
    input: {
      width: 79,
      height: 42,
      borderWidth: 1,
      borderColor: colors.otpInput.border,
      borderRadius: 8,
      textAlign: 'center',
      backgroundColor: colors.otpInput.backgroundColor,
      marginVertical: 5,
    },
    inputFocused: {
      borderColor: colors.otpInput.borderHighlight,
      backgroundColor: colors.otpInput.backgroundHighlight,
    },
  });

export default OTPInput;
