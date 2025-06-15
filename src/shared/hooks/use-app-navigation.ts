import { RootStackParamList } from '@/app/navigation';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';

const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList>>();
  return {
    navigation,
    route,
  };
};

export default useAppNavigation;
