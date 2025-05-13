import { Button as RNEButton, ButtonProps as RNEButtonProps } from '@rneui/themed';
import React, { forwardRef, memo, useCallback, useMemo } from 'react';
import {
  ActivityIndicator,
  Image,
  ImageURISource,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { layout_tokens, LIGHT_COLORS, scaleWidth } from '@/app/theme';
import { getThemeColors, isImageSource, isReactElement } from '@/shared/utils';
import { AppearanceMode } from '@/types/theme';
import {
  ButtonSize,
  ButtonVariant,
  getButtonContentStyle,
  getDisabledStyles,
  getDisabledTextStyles,
  getPressVariantStyles,
  getSizeStyles,
  getTextSizeStyles,
  getTextVariantStyles,
  getVariantStyles,
  IconPosition,
} from './utils';

/**
 * Props for the custom Button component using React Native Elements.
 */
export interface ButtonProps extends Omit<RNEButtonProps, 'style' | 'onPress' | 'size'> {
  title?: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  theme?: AppearanceMode;
  isLoading?: boolean;
  loadingMode?: 'replace' | 'along';
  disabled?: boolean;
  Icon?: React.ReactElement | ImageURISource;
  iconPosition?: IconPosition;
  iconGap?: number;
  iconFillColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
}

/**
 * A customizable button component using React Native Elements' Button.
 *
 * @param {ButtonProps} props - The properties for the Button component.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = forwardRef<any, ButtonProps>(
  (
    {
      title,
      onPress,
      variant = 'primary',
      size = 'md',
      theme = 'light',
      isLoading = false,
      loadingMode = 'replace',
      disabled = false,
      iconPosition = 'left',
      iconGap = 10,
      Icon,
      iconFillColor,
      buttonStyle,
      titleStyle,
      disabledStyle,
      pressedStyle,
      ...props
    },
    ref
  ) => {
    const colors = getThemeColors(theme);
    const isSmall = size === 'sm';

    // Convert our size to RNE size
    const rneSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';

    // Memoized styles
    const buttonVariantStyle = useMemo(() => getVariantStyles(variant, colors), [variant, colors]);
    const pressVariantStyle = useMemo(() => getPressVariantStyles(variant, colors), [variant, colors]);
    const textVariantStyle = useMemo(() => getTextVariantStyles(variant, colors), [variant, colors]);
    const defaultDisabledStyle = useMemo(() => getDisabledStyles(variant, colors), [variant, colors]);
    const defaultDisabledTextStyle = useMemo(() => getDisabledTextStyles(variant, colors), [variant, colors]);
    const buttonSizeStyle = useMemo(() => getSizeStyles(size), [size]);
    const textSizeStyle = useMemo(() => getTextSizeStyles(size), [size]);
    const buttonContentStyle = useMemo(
      () => getButtonContentStyle(isSmall, iconPosition, iconGap),
      [isSmall, iconPosition, iconGap]
    );

    // Render the button's icon
    const renderIcon = useCallback((): React.JSX.Element | null => {
      if (isReactElement(Icon)) {
        // Clone the element to potentially add fill color or other props if needed
        // return React.cloneElement(Icon, { fill: iconFillColor || Icon.props.fill });
        return Icon; // Returning as is for simplicity, modify if you need to inject props
      }

      if (isImageSource(Icon)) {
        return (
          <Image
            testID="image-icon"
            source={Icon}
            style={{ width: isSmall ? 20 : 24, height: isSmall ? 20 : 24 }}
            resizeMode="contain"
            tintColor={iconFillColor} // Apply tintColor if provided
          />
        );
      }

      return null;
    }, [Icon, isSmall, iconFillColor]); // Added iconFillColor to dependency array

    // Custom content rendering to support iconPosition and loadingMode
    const renderContent = () => {
      if (loadingMode === 'replace' && isLoading) {
        return (
          <ActivityIndicator
            testID="activity-indicator"
            // Determine color based on variant and iconFillColor
            color={
              iconFillColor || (variant === 'underline' ? LIGHT_COLORS.button.primary : LIGHT_COLORS.background.primary)
            }
          />
        );
      }

      return (
        <View style={buttonContentStyle}>
          {/* Render Icon if exists and not in replace loading mode */}
          {Icon && <View>{renderIcon()}</View>}

          {/* Render Title if exists */}
          {title && (
            <View style={{ flexShrink: 1 }}>
              {/* Using RNEButton with type="clear" for title to leverage its text styling */}
              <RNEButton
                title={title}
                type="clear" // Use clear type to make it look like just text
                titleStyle={[textVariantStyle, textSizeStyle, titleStyle, disabled && defaultDisabledTextStyle]}
                containerStyle={{ margin: 0 }} // Remove default margin
                buttonStyle={{ padding: 0 }} // Remove default padding
              />
            </View>
          )}

          {/* Render loading indicator if in along mode */}
          {loadingMode === 'along' && isLoading && (
            <ActivityIndicator
              testID="activity-indicator"
              style={styles.activityIndicator}
              size={'small'}
              // Determine color based on variant and iconFillColor
              color={
                iconFillColor ||
                (variant === 'underline' ? LIGHT_COLORS.button.primary : LIGHT_COLORS.background.primary)
              }
            />
          )}
        </View>
      );
    };

    return (
      <RNEButton
        ref={ref}
        onPress={onPress}
        disabled={isLoading || disabled}
        buttonStyle={[styles.button, buttonVariantStyle, buttonSizeStyle, buttonStyle]}
        containerStyle={[pressedStyle || pressVariantStyle, disabled && (disabledStyle || defaultDisabledStyle)]}
        title="" // Set title to empty string as content is rendered manually
        type={variant === 'underline' ? 'clear' : 'solid'} // Use clear type for underline variant
        size={rneSize} // Pass RNE specific size
        {...props} // Spread any other RNEButtonProps
      >
        {renderContent()} {/* Render custom content */}
      </RNEButton>
    );
  }
);

Button.displayName = 'Button';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scaleWidth(layout_tokens.border_radius),
    borderWidth: scaleWidth(1),
  },
  activityIndicator: { marginLeft: 8 },
});

export default memo(Button);
