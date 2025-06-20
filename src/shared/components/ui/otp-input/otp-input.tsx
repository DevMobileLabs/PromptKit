import { ColorTypes, layout_tokens, scaleHeight, scaleWidth, spacing_tokens } from '@/app/theme';
import { getThemeColors } from '@/shared/utils';
import React, { useMemo, useRef, useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { OTPInputProps } from './types';
import { Divider } from '@rneui/themed';

const OTPInput = ({
  numberOfDigits = 4,
  onChange,
  inputStyle,
  containerStyle,
  autoFocus = false,
  theme = 'light',
  ...props
}: OTPInputProps) => {
  const colors = getThemeColors(theme);
  const [otp, setOtp] = useState(Array(numberOfDigits).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<TextInput[]>([]);
  const styles = useMemo(() => createStyles(colors), [colors]);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === '') {
      const updatedOtp = [...otp];
      updatedOtp[index] = text;
      setOtp(updatedOtp);
      onChange?.(updatedOtp.join(''));

      if (text !== '' && index < numberOfDigits - 1) {
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
      {Array.from({ length: numberOfDigits }).map((_, index) => (
        <React.Fragment key={index}>
          <TextInput
            testID={`otp-input-${index}`}
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
          {index < numberOfDigits - 1 && <Divider style={styles.divider} />}
        </React.Fragment>
      ))}
    </View>
  );
};

const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginHorizontal: scaleWidth(spacing_tokens.s_12),
    },
    input: {
      width: scaleWidth(50),
      height: scaleHeight(45),
      borderWidth: scaleWidth(1),
      borderColor: colors.otpInput.border,
      borderRadius: scaleWidth(layout_tokens.border_radius),
      textAlign: 'center',
      backgroundColor: colors.otpInput.backgroundColor,
      marginVertical: scaleHeight(spacing_tokens.s_12),
    },
    inputFocused: {
      borderColor: colors.otpInput.borderHighlight,
      backgroundColor: colors.otpInput.backgroundHighlight,
    },
    divider: {
      width: scaleWidth(10),
      height: scaleHeight(1),
      backgroundColor: colors.otpInput.border,
    },
  });

export default OTPInput;
