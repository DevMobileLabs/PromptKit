import { OnboardingScreen } from '@/shared/components/layouts';
import RouteName from '../route';
import { RouteConfig } from '../types';

export const onboardingModuleConfig: RouteConfig[] = [
  {
    name: RouteName.ONBOARDING,
    component: OnboardingScreen,
    options: {
      headerShown: false,
    },
  },
];

export type OnboardingModuleParams = {
  [RouteName.ONBOARDING]: undefined;
};
