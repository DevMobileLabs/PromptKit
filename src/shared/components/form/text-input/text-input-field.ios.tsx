import React, { memo, useEffect, useRef, useState } from 'react';
import {
  Animated,
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colorVariables, fonts, scaleWidth } from '@/app/theme';
import { getThemeColors } from '@/shared/utils';
import { AppearanceMode } from '@/types/theme';

interface CustomTextInputFieldProps extends TextInputProps {
  label: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  textInputStyle?: StyleProp<TextStyle>;
  floatingLabelStyle?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  helperText?: string;
  theme?: AppearanceMode;
}

const TextInputField: React.FC<CustomTextInputFieldProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  textInputStyle,
  floatingLabelStyle,
  style,
  error,
  helperText,
  editable = true,
  theme = 'light',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValueVisible, setIsValueVisible] = useState(!secureTextEntry);
  const [internalValue, setInternalValue] = useState(value || '');
  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;
  const colors = getThemeColors(theme);

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || internalValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animatedLabel, isFocused, internalValue]);

  const handleOnChangeText = (text: string) => {
    onChangeText?.(text);
    setInternalValue(text);
  };

  const borderColor = error ? colorVariables.red_500 : colors.input.border;

  const labelStyle = {
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [14, -10],
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 0.8],
      outputRange: [scaleWidth(14), scaleWidth(fonts.size.small)],
    }),
    color: error ? colorVariables.red_500 : colors.input.placeholder,
    backgroundColor: colors.input.background,
  };

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor,
          },
          style,
        ]}
      >
        <Animated.Text style={[styles.floatingLabel, labelStyle, floatingLabelStyle]}>{label}</Animated.Text>

        <TextInput
          style={[styles.textInput, { color: colors.text.primary }, textInputStyle]}
          secureTextEntry={!isValueVisible && secureTextEntry}
          keyboardType={keyboardType}
          value={value !== undefined ? value : internalValue}
          onChangeText={handleOnChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder=""
          placeholderTextColor={colors.input.placeholder}
          editable={editable}
          {...props}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsValueVisible((prev) => !prev)} style={styles.eyeIcon}>
            <Icon name={isValueVisible ? 'eye-off' : 'eye'} size={20} color={colors.input.placeholder} />
          </TouchableOpacity>
        )}
      </View>

      {!!error && <Text style={styles.errorText}>{error}</Text>}

      {!!helperText && !error && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};

export default memo(TextInputField);

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: scaleWidth(1),
    borderRadius: 8,
    padding: scaleWidth(14),
  },
  textInput: {
    flex: 1,
    fontSize: scaleWidth(fonts.size.small),
  },
  floatingLabel: {
    position: 'absolute',
    left: 12,
    paddingHorizontal: 6,
    paddingVertical: 0,
    borderRadius: 4,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  errorText: {
    marginTop: 4,
    marginLeft: 10,
    color: colorVariables.red_500,
    fontSize: scaleWidth(12),
  },
  helperText: {
    marginTop: 4,
    marginLeft: 10,
    color: colorVariables.neutral_500,
    fontSize: scaleWidth(12),
  },
});
