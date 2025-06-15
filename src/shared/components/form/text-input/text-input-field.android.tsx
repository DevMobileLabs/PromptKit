import { colorVariables, fonts, scaleHeight, scaleWidth } from '@/app/theme';
import { getThemeColors } from '@/shared/utils';
import { AppearanceMode } from '@/types/theme';
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
  error,
  helperText,
  editable = true,
  theme = 'light',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValueVisible, setIsValueVisible] = useState(!secureTextEntry);
  const [internalValue, setInternalValue] = useState(value || '');
  const animatedLabel = useRef(new Animated.Value(internalValue.length > 0 ? 1 : 0)).current;
  const colors = getThemeColors(theme);

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: isFocused || internalValue.length > 0 ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, internalValue]);

  const handleOnChangeText = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    }
    setInternalValue(text);
  };

  const borderColor = error ? colorVariables.red_500 : colors.input.border;

  const labelStyle = {
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [12, -10],
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 0.9],
      outputRange: [scaleWidth(fonts.size.medium), scaleWidth(fonts.size.small)],
    }),
    color: error ? colorVariables.red_500 : colors.input.placeholder,
    backgroundColor: colors.input.background,
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.inputContainer, { borderColor: borderColor, backgroundColor: colors.input.background }]}>
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
          testID={props.testID}
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

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: scaleHeight(4),
    paddingHorizontal: scaleWidth(8),
  },
  textInput: {
    flex: 1,
    fontSize: scaleWidth(fonts.size.small),
  },
  floatingLabel: {
    position: 'absolute',
    left: 12,
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 4,
  },
  eyeIcon: {
    right: 12,
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

export default memo(TextInputField);
