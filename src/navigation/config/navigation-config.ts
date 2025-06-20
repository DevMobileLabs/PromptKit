import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import { systemTheme } from '@/shared/constants/appConst';
import { useAppSelector } from '@/store';

export const screenDefaultOptions = (): NativeStackNavigationOptions => ({
  headerShadowVisible: false,
  headerShown: true,
  ...Platform.select({
    ios: {
      headerLargeTitle: true,
      headerTransparent: true,
    },
  }),
});

export const useNavigationTheme = (): Theme => {
  const themeMode = useAppSelector((state) => state.settings.themeMode);
  const isDarkMode = themeMode === 'dark' || (themeMode === 'system' && systemTheme === 'dark');

  return {
    dark: isDarkMode,
    colors: {
      ...(isDarkMode ? DarkTheme.colors : DefaultTheme.colors),
    },
    fonts: DefaultTheme.fonts,
  };
};
