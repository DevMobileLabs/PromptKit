import { ImageSourcePropType } from 'react-native';

import { ChatScreen } from '@/features/chat';
import { DiscoverPromptsScreen } from '@/features/discover';
import { ProfileScreen } from '@/features/profile';
import { icons } from '@assets/icons';
import RouteName from '../route';
import { RouteConfig } from '../types';

type IItemTabBar = {
  icon: ImageSourcePropType;
  title: string;
  index: number;
};

export const TAB_BAR_MENU: IItemTabBar[] = [
  {
    title: 'Discover',
    icon: icons.discover,
    index: 0,
  },
  {
    title: 'Chat',
    icon: icons.chat,
    index: 1,
  },
  {
    title: 'Profile',
    icon: icons.user,
    index: 2,
  },
];

export const tabBarModuleConfig: RouteConfig[] = [
  {
    name: RouteName.DISCOVER,
    component: DiscoverPromptsScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: RouteName.CHAT,
    component: ChatScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: RouteName.PROFILE,
    component: ProfileScreen,
    options: {
      headerShown: false,
    },
  },
];

export type TabBarModuleParams = {
  [RouteName.DISCOVER]: undefined;
  [RouteName.CHAT]: undefined;
  [RouteName.PROFILE]: undefined;
};
