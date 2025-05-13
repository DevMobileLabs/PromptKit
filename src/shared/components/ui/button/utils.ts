import { TextStyle, ViewStyle } from 'react-native';

import { ColorTypes } from '@/app/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'underline' | 'destructive';
export type IconPosition = 'left' | 'right' | 'top' | 'bottom';
export type ButtonSize = 'sm' | 'md' | 'lg';

// -----------------------------------------------------------------------------
// Variant Styles
// -----------------------------------------------------------------------------

const variantStylesMap: Record<ButtonVariant, (colors: ColorTypes) => ViewStyle> = {
  primary: (colors) => ({
    backgroundColor: colors.button.primary,
    borderColor: colors.button.primary,
  }),
  secondary: (colors) => ({
    backgroundColor: colors.button.secondary,
    borderColor: colors.button.secondaryBorder,
  }),
  underline: () => ({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  }),
  destructive: (colors) => ({
    // backgroundColor: colors.button.destructive,
    backgroundColor: 'transparent',
    borderColor: colors.button.destructiveBorder,
  }),
};

export const getVariantStyles = (variant: ButtonVariant, colors: ColorTypes): ViewStyle =>
  variantStylesMap[variant]?.(colors) || {};

// -----------------------------------------------------------------------------
// Pressed Variant Styles
// -----------------------------------------------------------------------------

const pressVariantStylesMap: Record<ButtonVariant, (colors: ColorTypes) => ViewStyle> = {
  primary: (colors) => ({ backgroundColor: colors.button.primaryPressed }),
  secondary: (colors) => ({ backgroundColor: colors.button.secondaryPressed }),
  destructive: (colors) => ({ backgroundColor: colors.button.destructivePressed }),
  underline: () => ({ backgroundColor: 'transparent' }),
};

export const getPressVariantStyles = (variant: ButtonVariant, colors: ColorTypes): ViewStyle =>
  pressVariantStylesMap[variant]?.(colors) || {};

// -----------------------------------------------------------------------------
// Text Variant Styles
// -----------------------------------------------------------------------------

const textVariantStylesMap: Record<ButtonVariant, (colors: ColorTypes) => TextStyle> = {
  primary: (colors) => ({ color: colors.button.primaryText }),
  secondary: (colors) => ({ color: colors.button.secondaryText }),
  underline: (colors) => ({ color: colors.button.underlineText, textDecorationLine: 'underline', fontWeight: '500' }),
  destructive: (colors) => ({ color: colors.button.destructiveText }),
};

export const getTextVariantStyles = (variant: ButtonVariant, colors: ColorTypes): TextStyle =>
  textVariantStylesMap[variant]?.(colors) || {};

// -----------------------------------------------------------------------------
// Disabled Styles
// -----------------------------------------------------------------------------

const disabledStylesMap: Record<ButtonVariant, (colors: ColorTypes) => ViewStyle> = {
  primary: (colors) => ({
    backgroundColor: colors.button.primaryDisabled,
    borderColor: colors.button.primaryDisabled,
  }),
  secondary: (colors) => ({
    backgroundColor: colors.button.secondaryDisabled,
    borderColor: colors.button.secondaryDisabledBorder,
  }),
  underline: () => ({ borderColor: 'transparent', backgroundColor: 'transparent' }),
  destructive: (colors) => ({
    // backgroundColor: colors.button.destructiveDisabled,
    backgroundColor: 'transparent',
    borderColor: colors.button.destructiveDisabledBorder,
  }),
};

export const getDisabledStyles = (variant: ButtonVariant, colors: ColorTypes): ViewStyle =>
  disabledStylesMap[variant]?.(colors) || {};

// -----------------------------------------------------------------------------
// Disabled Text Styles
// -----------------------------------------------------------------------------

const disabledTextStylesMap: Record<ButtonVariant, (colors: ColorTypes) => TextStyle> = {
  primary: (colors) => ({ color: colors.button.primaryDisabledText }),
  secondary: (colors) => ({
    color: colors.button.secondaryDisabledText,
  }),
  underline: (colors) => ({ color: colors.button.underlineDisabledText }),
  destructive: (colors) => ({
    color: colors.button.destructiveDisabledText,
  }),
};

export const getDisabledTextStyles = (variant: ButtonVariant, colors: ColorTypes): TextStyle =>
  disabledTextStylesMap[variant]?.(colors) || {};

// -----------------------------------------------------------------------------
// Size Styles
// -----------------------------------------------------------------------------

export const getSizeStyles = (size: ButtonSize): ViewStyle => {
  const styles: Record<ButtonSize, ViewStyle> = {
    sm: {
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
    md: {
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    lg: {
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
  };
  return styles[size];
};

// -----------------------------------------------------------------------------
// Text Size Styles
// -----------------------------------------------------------------------------

export const getTextSizeStyles = (size: ButtonSize): TextStyle => {
  const styles: Record<ButtonSize, TextStyle> = {
    sm: {
      fontSize: 14,
    },
    md: {
      fontSize: 16,
    },
    lg: {
      fontSize: 18,
    },
  };
  return styles[size];
};

export const getButtonContentStyle = (isSmall: boolean, iconPosition: IconPosition, iconGap: number) => {
  const contentStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  };

  if (isSmall) {
    contentStyle.justifyContent = 'center';
  } else {
    switch (iconPosition) {
      case 'left':
        contentStyle.flexDirection = 'row';
        contentStyle.gap = iconGap;
        break;
      case 'right':
        contentStyle.flexDirection = 'row-reverse';
        contentStyle.gap = iconGap;
        break;
      case 'top':
        contentStyle.flexDirection = 'column';
        contentStyle.gap = iconGap;
        break;
      case 'bottom':
        contentStyle.flexDirection = 'column-reverse';
        contentStyle.gap = iconGap;
        break;
    }
  }

  return contentStyle;
};
