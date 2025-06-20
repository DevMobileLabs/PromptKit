import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { AllModuleParamList } from '../config';

type RouteNameType = keyof AllModuleParamList;

// configuration for a route in the navigation stack
export type RouteConfig = {
  name: RouteNameType;
  component: React.ComponentType;
  options?: NativeStackNavigationOptions | BottomTabNavigationOptions;
};

export interface RootStackParamList extends AllModuleParamList, ParamListBase {}
