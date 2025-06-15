import { ForgotPasswordScreen, LoginEmailScreen, LoginScreen, SignUpScreen } from '@/features/auth';
import RouteName from '../route';
import { RouteConfig } from '../types';

export const authModuleConfig: RouteConfig[] = [
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
  {
    name: RouteName.AUTH_LOGIN_EMAIL,
    component: LoginEmailScreen,
    options: {},
  },
  {
    name: RouteName.AUTH_FORGOT_PASSWORD,
    component: ForgotPasswordScreen,
    options: {},
  },
];

export type AuthModuleParams = {
  [RouteName.AUTH_LOGIN]: undefined;
  [RouteName.AUTH_SIGNUP]: undefined;
  [RouteName.AUTH_LOGIN_EMAIL]: undefined;
  [RouteName.AUTH_FORGOT_PASSWORD]: undefined;
};
