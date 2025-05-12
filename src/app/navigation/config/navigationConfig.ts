import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ImageSourcePropType, Platform } from 'react-native';

import { systemTheme } from '@/shared/constants/appConst';
import { useAppSelector } from '@/store';
import { icons } from '@assets/icons';

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

type IItemTabBar = {
  icon: ImageSourcePropType;
  title: string;
  index: number;
};

export const TAB_BAR_MENU: IItemTabBar[] = [
  {
    title: 'Home',
    icon: icons.google,
    index: 0,
  },
  {
    title: 'SCHUFA Score',
    icon: icons.google,
    index: 1,
  },
  {
    title: 'Toolkit',
    icon: icons.google,
    index: 2,
  },
  {
    title: 'Akademie',
    icon: icons.google,
    index: 3,
  },
  {
    title: 'Mehr',
    icon: icons.google,
    index: 4,
  },
];
