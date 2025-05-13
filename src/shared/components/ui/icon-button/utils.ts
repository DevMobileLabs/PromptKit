/* eslint-disable @typescript-eslint/naming-convention */

import { ColorTypes, scaleHeight, scaleWidth } from '@/app/theme';
import { ImageStyle, ViewStyle } from 'react-native';

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export type IconButtonVariant = 'primary' | 'secondary' | 'ghost';
export type IconButtonSize = 'lg' | 'sm' | 'extra-small';

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------
const iconButtonSize = {
  widthLargeIcon: scaleWidth(48),
  heightLargeIcon: scaleHeight(48),
  borderRadiusLargeIcon: scaleWidth(32),
  widthSmallIcon: scaleWidth(32),
  heightSmallIcon: scaleHeight(32),
  borderRadiusSmallIcon: scaleWidth(32),
  widthExtraSmallIcon: scaleWidth(24),
  heightExtraSmallIcon: scaleHeight(24),
  borderRadiusExtraSmallIcon: scaleWidth(32),
};

const iconSize = {
  widthLargeIcon: scaleWidth(24),
  heightLargeIcon: scaleHeight(24),
  widthSmallIcon: scaleWidth(20),
  heightSmallIcon: scaleHeight(20),
  widthExtraSmallIcon: scaleWidth(16),
  heightExtraSmallIcon: scaleHeight(16),
};

// -----------------------------------------------------------------------------
// Variant Styles
// -----------------------------------------------------------------------------

const iconBtnVariantStylesMap: Record<IconButtonVariant, (colors: ColorTypes) => ViewStyle> = {
  primary: (colors) => ({
    backgroundColor: colors.iconButton.primary,
    borderColor: colors.iconButton.primaryBorder,
  }),
  secondary: (colors) => ({
    backgroundColor: colors.iconButton.secondary,
    borderColor: colors.iconButton.secondaryBorder,
  }),
  ghost: (colors) => ({
    backgroundColor: colors.iconButton.ghost,
    borderColor: colors.iconButton.ghostBorder,
  }),
};

const getIconBtnVariantStyles = (variant: IconButtonVariant, colors: ColorTypes): ViewStyle =>
  iconBtnVariantStylesMap[variant]?.(colors) || {};

// -----------------------------------------------------------------------------
// Pressed Variant Styles
// -----------------------------------------------------------------------------

const iconBtnPressVariantStylesMap: Record<IconButtonVariant, (colors: ColorTypes) => ViewStyle> = {
  primary: (colors) => ({
    backgroundColor: colors.iconButton.primaryPressed,
    borderColor: colors.iconButton.primary,
  }),
  secondary: (colors) => ({
    backgroundColor: colors.iconButton.secondaryPressed,
    borderColor: 'transparent',
  }),
  ghost: (colors) => ({
    backgroundColor: colors.iconButton.ghostPressed,
    borderColor: colors.iconButton.ghostBorder,
  }),
};

const getIconBtnPressVariantStyles = (variant: IconButtonVariant, colors: ColorTypes): ViewStyle =>
  iconBtnPressVariantStylesMap[variant]?.(colors) || {};

// -----------------------------------------------------------------------------
// Disabled Styles
// -----------------------------------------------------------------------------

const iconBtnDisabledStylesMap: Record<IconButtonVariant, (colors: ColorTypes) => ViewStyle> = {
  primary: (colors) => ({
    backgroundColor: colors.iconButton.primaryDisabled,
    borderColor: colors.iconButton.primaryDisabled,
  }),
  secondary: (colors) => ({
    backgroundColor: colors.iconButton.secondaryDisabled,
    borderColor: colors.iconButton.secondaryDisabledBorder,
  }),
  ghost: (colors) => ({
    backgroundColor: colors.iconButton.ghostDisabled,
    borderColor: 'transparent',
  }),
};

const getIconBtnDisabledStyles = (variant: IconButtonVariant, colors: ColorTypes): ViewStyle =>
  iconBtnDisabledStylesMap[variant]?.(colors) || {};

// -----------------------------------------------------------------------------
// Disabled Icon Styles
// -----------------------------------------------------------------------------

const iconBtnDisabledIconStylesMap: Record<IconButtonVariant, (colors: ColorTypes) => ImageStyle> = {
  primary: (colors) => ({
    tintColor: colors.iconButton.primaryDisabledIcon,
  }),
  secondary: (colors) => ({
    backgroundColor: colors.iconButton.secondaryDisabled,
    tintColor: colors.iconButton.secondaryDisabledIcon,
  }),
  ghost: (colors) => ({
    tintColor: colors.iconButton.ghostDisabledIcon,
  }),
};

const getIconBtnDisabledIconStyles = (variant: IconButtonVariant, colors: ColorTypes): ImageStyle =>
  iconBtnDisabledIconStylesMap[variant]?.(colors) || {};

// -----------------------------------------------------------------------------
// Size Styles
// -----------------------------------------------------------------------------

const iconBtnSizeMap: Record<IconButtonSize, ViewStyle> = {
  lg: {
    width: iconButtonSize.widthLargeIcon,
    height: iconButtonSize.heightLargeIcon,
    borderRadius: iconButtonSize.borderRadiusLargeIcon,
  },
  sm: {
    width: iconButtonSize.widthSmallIcon,
    height: iconButtonSize.heightSmallIcon,
    borderRadius: iconButtonSize.borderRadiusSmallIcon,
  },
  'extra-small': {
    width: iconButtonSize.widthExtraSmallIcon,
    height: iconButtonSize.heightExtraSmallIcon,
    borderRadius: iconButtonSize.borderRadiusExtraSmallIcon,
  },
};

const getIconBtnSizeStyle = (size: IconButtonSize): ViewStyle => iconBtnSizeMap[size] || {};

// -----------------------------------------------------------------------------
// Icon Size Styles
// -----------------------------------------------------------------------------

const iconStylesMap: Record<IconButtonSize, ImageStyle> = {
  lg: { width: iconSize.widthLargeIcon, height: iconSize.heightLargeIcon },
  sm: { width: iconSize.widthSmallIcon, height: iconSize.heightSmallIcon },
  'extra-small': { width: iconSize.widthExtraSmallIcon, height: iconSize.heightExtraSmallIcon },
};

const getIconStyle = (size: IconButtonSize): ImageStyle => iconStylesMap[size] || {};

// -----------------------------------------------------------------------------
// Exports
// -----------------------------------------------------------------------------

export {
  getIconBtnDisabledIconStyles,
  getIconBtnDisabledStyles,
  getIconBtnPressVariantStyles,
  getIconBtnSizeStyle,
  getIconBtnVariantStyles,
  getIconStyle,
};
