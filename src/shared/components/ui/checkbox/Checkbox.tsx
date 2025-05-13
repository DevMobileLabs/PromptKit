import { getThemeColors } from '@/shared/utils';
import { AppearanceMode } from '@/types/theme';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Animated,
  Image,
  ImageStyle,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { CheckboxPosition, createCheckboxStyle, createLabelTextStyle, createSpacingStyle } from './utils';
import { icons } from '@assets/icons';

export interface CheckBoxProps extends Omit<PressableProps, 'style'> {
  /**
   * Controls the checked state of the checkbox. If provided, the component becomes controlled.
   */
  checked?: boolean;
  /**
   * If true, the checkbox will display an indeterminate (in-between) state.
   */
  inBetween?: boolean;
  /**
   * If true, the checkbox will be disabled and not interactable.
   */
  disabled?: boolean;
  /**
   * Defines the size of the checkbox. Can be 'small', 'medium' (default), or 'large'.
   */
  checkboxSize?: number;
  /**
   * Sets a custom tint color for the checkbox elements (border, checkmark).
   */
  tintColor?: string;
  /**
   * Callback function that is called when the checked state of the checkbox changes.
   * Receives the new checked value (boolean) as an argument.
   */
  onChange?: (checked: boolean) => void;
  /**
   * Additional styles to apply to the main container of the checkbox.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Text label to display next to the checkbox.
   */
  label?: string;
  /**
   * Custom styles to apply to the label text.
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * Custom styles to apply to the label text when the checkbox is disabled.
   */
  disabledLabelStyle?: StyleProp<ViewStyle>;
  /**
   * Custom styles to apply directly to the checkbox element (the square box).
   */
  checkboxStyles?: StyleProp<ViewStyle>;
  /**
   * Custom styles to apply directly to the checkbox element when it is disabled.
   */
  disabledCheckboxStyles?: StyleProp<ViewStyle>;
  /**
   * Determines the position of the checkbox relative to the label.
   * Can be 'left' (default), 'right', 'top', or 'bottom'.
   */
  checkboxPosition?: CheckboxPosition;
  /**
   * Defines the spacing between the checkbox and the label.
   */
  spacing?: number;
  /**
   * Specifies the color theme to use. Defaults to 'system' (using the device's appearance).
   */
  theme?: AppearanceMode;
  /**
   * Custom test identifier to apply to the checkbox for testing purposes.
   */
  checkBoxTestId?: string;

  isShowChildren?: boolean;
}

/**
 * A customizable checkbox component that allows users to select or deselect an option.
 *
 * @param {CheckBoxProps} props - The properties for the CheckBox component.
 * @returns {JSX.Element} The rendered CheckBox component.
 */
const CheckBox: React.FC<CheckBoxProps> = ({
  checked: checkedProp,
  inBetween = false,
  disabled = false,
  checkboxSize = 20,
  onChange,
  label,
  tintColor,
  checkboxPosition = 'left',
  theme = 'system',
  spacing = 8,
  style,
  labelStyle,
  disabledLabelStyle,
  disabledCheckboxStyles,
  checkboxStyles,
  checkBoxTestId,
  isShowChildren = false,
  ...props
}) => {
  const colors = getThemeColors(theme); // Get theme-based colors.
  const [internalChecked, setInternalChecked] = useState<boolean>(checkedProp ?? false); // Internal checked state (for uncontrolled components).
  const isControlled = checkedProp !== undefined; // Check if the component is controlled.
  const isChecked = isControlled ? checkedProp : internalChecked; // Current checked value.
  const checkMarkSize = checkboxSize * 0.6; // Size of the checkmark icon (60% of checkbox size).
  const containerStyle = [styles.container, style];
  const children = typeof props.children === 'function' ? null : props.children;
  const animatedOpacity = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    if (isShowChildren && children) {
      Animated.timing(animatedOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isShowChildren, children]);

  const checkboxStyle = useMemo<StyleProp<ViewStyle>>(() => {
    return createCheckboxStyle(checkboxSize, disabled, tintColor, isChecked, colors, checkboxStyles);
  }, [checkboxSize, disabled, tintColor, isChecked, colors, checkboxStyles]);

  const spacingForItem = useMemo<StyleProp<ViewStyle>>(() => {
    return createSpacingStyle(checkboxPosition, spacing);
  }, [spacing, checkboxPosition]);

  // Handles the press event on the checkbox icon.
  const handleCheckboxPress = useCallback(() => {
    const newValue = !isChecked;
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    onChange?.(newValue);
  }, [isChecked, isControlled, onChange]);

  // Create the label text style based on the provided styles and theme.
  const labelTextStyle = useMemo(() => {
    return createLabelTextStyle({
      disabled,
      disabledLabelStyle,
      labelStyle,
      spacingForItem,
      colors,
    });
  }, [disabled, disabledLabelStyle, labelStyle, spacingForItem, colors]);

  // Create the checkmark style based on the size and theme.
  const checkMarkStyle = useMemo<StyleProp<ImageStyle>>(() => {
    return { width: checkMarkSize, height: checkMarkSize, tintColor: colors.checkbox.checkMark };
  }, [checkMarkSize, colors.checkbox.checkMark]);

  // Determine checkbox position.
  const flexDirection = checkboxPosition === 'left' || checkboxPosition === 'right' ? 'row' : 'column';
  const justifyContent =
    checkboxPosition === 'left' ? 'flex-start' : checkboxPosition === 'right' ? 'flex-end' : 'center';

  // Renders the content inside the checkbox (checkmark or indeterminate).
  const renderCheckboxContent = () => {
    if (isChecked) {
      return <Image source={inBetween ? icons.inBetween : icons.check} style={checkMarkStyle} resizeMode="contain" />;
    }

    return null;
  };

  return (
    <View style={containerStyle}>
      <View style={{ flexDirection, justifyContent }}>
        {(checkboxPosition === 'left' || checkboxPosition === 'top') && (
          <Pressable
            testID={checkBoxTestId}
            style={[checkboxStyle, spacingForItem, disabled && disabledCheckboxStyles]}
            onPress={handleCheckboxPress}
            disabled={disabled}
            android_ripple={disabled ? undefined : { color: tintColor }}
            accessibilityState={{
              checked: isChecked,
              disabled,
            }}
            {...props}
          >
            {renderCheckboxContent()}
          </Pressable>
        )}

        {label && (
          <Text style={labelTextStyle} accessibilityRole="button" accessibilityState={{ disabled }}>
            {label}
          </Text>
        )}

        {(checkboxPosition === 'right' || checkboxPosition === 'bottom') && (
          <Pressable
            testID={checkBoxTestId}
            style={[checkboxStyle, spacingForItem, disabled && disabledCheckboxStyles]}
            onPress={handleCheckboxPress}
            disabled={disabled}
            android_ripple={disabled ? undefined : { color: tintColor }}
            accessibilityState={{
              checked: isChecked,
              disabled,
            }}
            {...props}
          >
            {renderCheckboxContent()}
          </Pressable>
        )}
      </View>
      {children && (
        <Animated.View style={[styles.childrenContainer, { opacity: animatedOpacity }]}>
          {isShowChildren && children}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  childrenContainer: {
    width: '100%',
  },
});

export default memo(CheckBox);
