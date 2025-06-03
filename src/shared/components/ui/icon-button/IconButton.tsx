import React, { memo, useMemo } from 'react';
import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { DARK_COLORS, LIGHT_COLORS } from '@/app/theme';
import {
  getIconBtnDisabledIconStyles,
  getIconBtnDisabledStyles,
  getIconBtnPressVariantStyles,
  getIconBtnSizeStyle,
  getIconBtnVariantStyles,
  getIconStyle,
  IconButtonSize,
  IconButtonVariant,
} from './utils';

/**
 * Props for the {@link IconButton} component.
 */
interface IconButtonProps extends Omit<PressableProps, 'style'>, React.RefAttributes<View> {
  /**
   * The source of the icon image. Can be a local file, a remote URL, or an asset.
   */
  icon: ImageSourcePropType | undefined;
  /**
   * Function to call when the button is pressed.
   */
  onPress?: () => void;
  /**
   * Defines the visual style variant of the button.
   */
  variant?: IconButtonVariant;
  /**
   * Defines the size of the button.
   */
  size?: IconButtonSize;
  /**
   * Specifies the color theme to use for the button.
   * Defaults to 'light'.
   */
  theme?: 'light' | 'dark';
  /**
   * If true, the button will display a loading indicator (if implemented in the component).
   * Defaults to false.
   */
  isLoading?: boolean;
  /**
   * A test identifier for the icon image, used for testing purposes.
   */
  iconTestId?: string;
  /**
   * The resize mode for the icon image. Defaults to 'contain'.
   */
  iconResizeMode?: ImageResizeMode;
  /**
   * If true, the button will be disabled and not interactable.
   * Defaults to false.
   */
  disabled?: boolean;
  /**
   * Custom styles to apply to the button container.
   */
  iconButtonStyle?: StyleProp<ViewStyle>;
  /**
   * Custom styles to apply when the button is disabled.
   */
  disabledStyle?: StyleProp<ViewStyle>;
  /**
   * Custom styles to apply to the icon when the button is disabled.
   */
  disabledIconStyle?: StyleProp<ImageStyle>;
  /**
   * Custom styles to apply when the button is pressed.
   */
  pressedStyle?: StyleProp<ViewStyle>;
  /**
   * Custom styles to apply to the icon image.
   */
  iconStyle?: StyleProp<ImageStyle>;
}

/**
 * A customizable button component that displays an icon and handles user interactions.
 *
 * @param {IconButtonProps} props - The properties for the IconButton component.
 * @returns {JSX.Element} The rendered IconButton component.
 */
const IconButton = ({
  icon,
  onPress,
  iconButtonStyle,
  disabledStyle,
  disabledIconStyle,
  pressedStyle,
  theme = 'light',
  disabled = false,
  size = 'sm',
  variant = 'primary',
  iconStyle,
  iconTestId,
  iconResizeMode = 'contain',
  ...props
}: IconButtonProps) => {
  const colors = theme === 'light' ? LIGHT_COLORS : DARK_COLORS;

  const defaultButtonVariantStyle = useMemo(() => getIconBtnVariantStyles(variant, colors), [variant, colors]);
  const defaultDisabledStyle = useMemo(() => getIconBtnDisabledStyles(variant, colors), [variant, colors]);
  const defaultDisabledIconStyle = useMemo(() => getIconBtnDisabledIconStyles(variant, colors), [variant, colors]);
  const defaultPressVariantStyle = useMemo(() => getIconBtnPressVariantStyles(variant, colors), [variant, colors]);
  const defaultSizeStyle = useMemo(() => getIconBtnSizeStyle(size), [size]);
  const defaultIconSize = useMemo(() => getIconStyle(size), [size]);

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        defaultButtonVariantStyle,
        defaultSizeStyle,
        iconButtonStyle,
        pressed && (pressedStyle ? pressedStyle : defaultPressVariantStyle),
        disabled && (disabledStyle ? disabledStyle : defaultDisabledStyle),
      ]}
      role={props.role ? props.role : 'button'}
      {...props}
    >
      <Image
        testID={iconTestId}
        style={[
          styles.icon,
          defaultIconSize,
          iconStyle,
          disabled && (disabledIconStyle ? disabledIconStyle : defaultDisabledIconStyle),
        ]}
        source={icon}
        resizeMode={iconResizeMode}
        accessibilityIgnoresInvertColors={true}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
});

export default memo(IconButton);
