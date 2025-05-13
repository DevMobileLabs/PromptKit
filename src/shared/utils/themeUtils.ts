import { ColorTypes } from '@/app/theme';
import { DARK_COLORS, LIGHT_COLORS } from '@/app/theme/colors';
import { AppearanceMode } from '@/types/theme';
import React from 'react';
import { ImageRequireSource, ImageURISource } from 'react-native';
import { systemTheme } from '../constants/appConst';

export const isImageSource = (icon: ImageURISource | ImageRequireSource | undefined): icon is ImageURISource => {
  // Check if it's a number (ImageRequireSource)
  if (typeof icon === 'number') {
    return true;
  }
  // Check if it's a non-null object with a string 'uri' property (ImageURISource)
  if (typeof icon === 'object' && icon !== null && typeof icon.uri === 'string') {
    return true;
  }
  // Otherwise, it's not a valid image source we're checking for
  return false;
};

export const isReactElement = (icon: any): icon is React.ReactElement => {
  return React.isValidElement(icon);
};

export const getThemeColors = (theme: AppearanceMode): ColorTypes => {
  const isSystemTheme = theme === 'system';
  const isDarkMode = systemTheme === 'dark';
  if (isSystemTheme) {
    return isDarkMode ? DARK_COLORS : LIGHT_COLORS;
  }
  return theme === 'dark' ? DARK_COLORS : LIGHT_COLORS;
};
