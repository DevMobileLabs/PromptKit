import { BottomTabNavigator } from '../navigator';
import RouteName from '../route';
import { RouteConfig } from '../types';

export const homeModuleConfig: RouteConfig[] = [
  {
    name: RouteName.HOME,
    component: BottomTabNavigator,
    options: {
      headerShown: false,
    },
  },
];

export type HomeModuleParams = {
  [RouteName.HOME]: undefined;
};
