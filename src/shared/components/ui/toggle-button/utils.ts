/* eslint-disable @typescript-eslint/naming-convention */

import { colorVariables, scaleHeight, scaleWidth } from '@/app/theme';
import { Platform, StyleProp, ViewStyle } from 'react-native';

/// Toggle Constants
export const CHILDREN_CONTAINER_MARGIN_TOP = 12;

// Toggle Types
export type ToggleSize = 'sm' | 'md' | 'lg';
export type ToggleItemValues = { [id: string | number]: boolean };

interface ToggleSizeStyles {
  width: number;
  height: number;
  borderRadius: number;
  thumbSize: number;
}

export type ToggleContainedMode = 'contained' | 'separated' | 'plain';
export type ToggleLabelPosition = 'left' | 'right' | 'hidden';

///---------------------Toggle Button-------------------------------
export const _getSizeStylesIOS = (size: ToggleSize): ToggleSizeStyles => {
  switch (size) {
    case 'sm':
      return {
        width: scaleWidth(38),
        height: scaleHeight(24),
        borderRadius: scaleWidth(25),
        thumbSize: scaleWidth(19),
      };
    case 'lg':
      return {
        width: scaleWidth(58),
        height: scaleHeight(54),
        borderRadius: scaleWidth(25),
        thumbSize: scaleWidth(28),
      };
    default:
      return {
        width: scaleWidth(44),
        height: scaleHeight(26),
        borderRadius: scaleWidth(25),
        thumbSize: scaleWidth(22),
      };
  }
};

export const _getSizeStylesAndroid = (size: ToggleSize): ToggleSizeStyles => {
  switch (size) {
    case 'sm':
      return {
        width: scaleWidth(36),
        height: scaleHeight(28),
        borderRadius: scaleWidth(25),
        thumbSize: scaleWidth(18),
      };
    case 'lg':
      return {
        width: scaleWidth(56),
        height: scaleHeight(38),
        borderRadius: scaleWidth(25),
        thumbSize: scaleWidth(26),
      };
    default:
      return {
        width: scaleWidth(46),
        height: scaleHeight(32),
        borderRadius: scaleWidth(25),
        thumbSize: scaleWidth(22),
      };
  }
};

const getSizeStyles = Platform.select({
  ios: _getSizeStylesIOS,
  android: _getSizeStylesAndroid,
  default: _getSizeStylesIOS,
});

///--------------------Toggle Button Contained-------------------------------
export const ITEM_CONTAINER_MARGIN_VERTICAL = 12;
export const ITEM_CONTAINER_MARGIN_HORIZONTAL = 12;
export const DIVIDER_CONTAINER_MARGIN = 16;

const listModeStyles: Record<ToggleContainedMode, StyleProp<ViewStyle>> = {
  contained: {
    borderColor: colorVariables.neutral_200,
    borderWidth: 1,
    paddingVertical: scaleWidth(6),
    paddingHorizontal: scaleWidth(8),
    borderRadius: scaleWidth(12),
  },
  plain: {},
  separated: {
    gap: 12,
  },
};

const itemToggleModeStyles: Record<ToggleContainedMode, StyleProp<ViewStyle>> = {
  contained: {
    borderColor: colorVariables.neutral_200,
  },
  plain: {},
  separated: {
    borderRadius: scaleWidth(12),
    borderColor: colorVariables.neutral_200,
    borderWidth: 1,
  },
};

export { getSizeStyles, itemToggleModeStyles, listModeStyles };
