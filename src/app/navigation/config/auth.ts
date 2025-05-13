import { SignUpScreen, LoginScreen } from '@/features/auth';
import RouteName from '../route';
import { RouteConfig } from '../types';

export const AuthModuleConfig: RouteConfig[] = [
  {
    name: RouteName.AUTH_LOGIN,
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: RouteName.AUTH_SIGNUP,
    component: SignUpScreen,
    options: {},
  },
];

export type AuthModuleParams = {
  [RouteName.AUTH_LOGIN]: undefined;
  [RouteName.AUTH_SIGNUP]: undefined;
};
