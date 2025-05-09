import { ThemeName } from '@/types/theme';
import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native'; // Optional: để lấy theme hệ thống ban đầu
import { ColorTypes, DARK_COLORS, LIGHT_COLORS } from '../theme';

type ThemeContextType = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  colors: ColorTypes;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Tạo Provider component
interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeName;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  // Sử dụng useColorScheme() để lấy theme mặc định của hệ thống nếu initialTheme không được truyền
  const systemColorScheme = useColorScheme();
  const defaultTheme = initialTheme || systemColorScheme || 'light';

  const [theme, setTheme] = useState<'light' | 'dark'>(defaultTheme);

  const colors = useMemo(() => {
    return theme === 'light' ? LIGHT_COLORS : DARK_COLORS;
  }, [theme]);

  const contextValue = {
    theme,
    setTheme,
    colors,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Báo lỗi nếu hook được dùng bên ngoài ThemeProvider
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
