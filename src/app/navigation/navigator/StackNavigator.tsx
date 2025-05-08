import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { mainScreens, screenDefaultOptions } from '../config';
import RouteName from '../route';
import { RootStackParamList } from '../types';
import BottomTabBar from './BottomTabBar';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

export const MainStackNavigator: React.ComponentType = () => {
  return (
    <Stack.Navigator screenOptions={screenDefaultOptions} initialRouteName={RouteName.MAIN_TAB}>
      {/* Bottom Tab */}
      <Stack.Screen name={RouteName.MAIN_TAB} component={BottomTabNavigator} options={{ headerShown: false }} />
      {/* Main Screens */}
      {mainScreens.map((screen) => (
        <Stack.Screen key={screen.name} name={screen.name} component={screen.component} options={screen.options} />
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
      <Tab.Screen name={RouteName.HOME} getComponent={() => Screen1} />
      <Tab.Screen name={RouteName.SEARCH} getComponent={() => Screen2} />
      <Tab.Screen name={RouteName.NOTIFICATION} getComponent={() => Screen3} />
      <Tab.Screen name={RouteName.PROFILE} getComponent={() => Screen4} />
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
