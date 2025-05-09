import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable, Text } from '@react-navigation/elements';
import { useLinkBuilder } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TAB_BAR_MENU } from '../config/navigationConfig';
import { scaleWidth } from '@/app/theme';
import { scaleHeight } from '@/app/theme';

const BottomTabBar: React.FunctionComponent<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { buildHref } = useLinkBuilder();

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

const styles = StyleSheet.create({
  container: {
    maxHeight: scaleHeight(82),
    backgroundColor: '#010101',
    borderTopColor: '#FFC115',
    borderTopWidth: scaleWidth(1),
    borderTopLeftRadius: scaleWidth(16),
    borderTopRightRadius: scaleWidth(16),
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBlock: scaleHeight(16),
    paddingInline: scaleWidth(20),
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    gap: scaleHeight(6),
  },
  icon: {
    height: scaleHeight(24),
    aspectRatio: 1,
    tintColor: '#999999',
  },
  iconSelected: {
    tintColor: '#00A991',
  },
  text: {
    fontSize: scaleWidth(12),
    lineHeight: scaleWidth(15.6),
    textAlign: 'center',
    color: '#999999',
  },
  textSelected: {
    color: '#FFFFFF',
  },
});

export default BottomTabBar;
