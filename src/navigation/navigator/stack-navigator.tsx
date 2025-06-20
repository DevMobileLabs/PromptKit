import { BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { mainScreens, screenDefaultOptions } from '../config';
import { tabBarModuleConfig } from '../config/tab-bar';
import RouteName from '../route';
import { RootStackParamList } from '../types';
import BottomTabBar from './bottom-tab-bar';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

export const MainStackNavigator: React.ComponentType = () => {
  return (
    <Stack.Navigator screenOptions={screenDefaultOptions} initialRouteName={RouteName.ONBOARDING}>
      <Stack.Screen name={RouteName.MAIN_TAB} component={BottomTabNavigator} options={{ headerShown: false }} />
      {mainScreens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options as NativeStackNavigationOptions}
        />
      ))}
    </Stack.Navigator>
  );
};

export const BottomTabNavigator: React.ComponentType = () => {
  const renderBottomTabBar = useCallback(
    (props: BottomTabBarProps): React.ReactElement => <BottomTabBar {...props} />,
    []
  );
  return (
    <Tab.Navigator tabBar={renderBottomTabBar} screenOptions={{ headerShown: false, lazy: true }}>
      {tabBarModuleConfig.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options as BottomTabNavigationOptions}
        />
      ))}
    </Tab.Navigator>
  );
};

const Screen1: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Screen 1</Text>
    </View>
  );
};

const Screen2: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Screen 2</Text>
    </View>
  );
};

const Screen3: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Screen 3</Text>
    </View>
  );
};

const Screen4: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Screen 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE4EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
