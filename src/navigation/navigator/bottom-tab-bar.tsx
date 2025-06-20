import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable, Text } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ColorTypes, fonts, scaleHeight, scaleWidth, spacing_tokens } from '@/app/theme';
import { useAppTheme } from '@/providers';
import { TAB_BAR_MENU } from '../config/tab-bar';

const BottomTabBar: React.FunctionComponent<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { buildHref } = useLinkBuilder();
  const { colors } = useAppTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const renderTab = useCallback(
    () =>
      TAB_BAR_MENU.map(({ index, title, icon }) => {
        const currentState = state.routes[index];
        if (!currentState) return null; // Bỏ qua nếu không có route tương ứng

        const { options } = descriptors[currentState.key];
        const label = title ?? options.tabBarLabel ?? options.title ?? currentState.name;
        const route = currentState.name;

        const isFocused = state.index === index;

        const onPress = (): void => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route, currentState.params);
          }
        };

        const onLongPress = (): void => {
          navigation.emit({
            type: 'tabLongPress',
            target: route,
          });
        };

        return (
          <PlatformPressable
            key={route}
            href={buildHref(route)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.itemContainer}
          >
            <Image source={icon} style={[styles.icon, isFocused && styles.iconSelected]} />
            <Text style={[styles.text, isFocused && styles.textSelected]}>{label}</Text>
          </PlatformPressable>
        );
      }),
    [state.index, navigation]
  );

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.wrapper}>{renderTab()}</View>
    </SafeAreaView>
  );
};

const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    container: {
      maxHeight: scaleHeight(82),
      backgroundColor: colors.background.primary,
      borderTopColor: colors.background.secondary,
      shadowColor: colors.background.secondary,
    },
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: scaleWidth(spacing_tokens.s_24),
      paddingVertical: scaleHeight(spacing_tokens.s_16),
      shadowColor: colors.background.secondary,
    },
    itemContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: scaleHeight(spacing_tokens.s_8),
    },
    icon: {
      height: scaleHeight(spacing_tokens.s_24),
      aspectRatio: 1,
      tintColor: colors.text.secondary,
    },
    iconSelected: {
      tintColor: colors.button.primary,
    },
    text: {
      fontSize: scaleWidth(fonts.size.small),
      lineHeight: scaleWidth(fonts.size.small),
      textAlign: 'center',
      color: colors.text.secondary,
    },
    textSelected: {
      fontWeight: '500',
      color: colors.text.primary,
    },
  });

export default BottomTabBar;
