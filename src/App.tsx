import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppNavigator, navigationService, useNavigationTheme } from './app/navigation';
import { withProviders } from './app/providers';

const App = () => {
  const theme = useNavigationTheme();
  return (
    <React.Fragment>
      <NavigationContainer
        theme={theme}
        ref={navigationService.ref}
        onStateChange={navigationService.onStateChange}
        onReady={() => {
          navigationService.onReady();
        }}
      >
        <AppNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </React.Fragment>
  );
};

export default withProviders(App);
