/* eslint-disable @typescript-eslint/naming-convention */
import store from '@/store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import { ThemeProvider } from './ThemeProvider';
export const withProviders = (
  Component: React.ComponentType<PropsWithChildren<{}>>
): React.ComponentType<PropsWithChildren<{}>> => {
  return function WithProviders(props: PropsWithChildren<{}>) {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <ThemeProvider>
            <Component {...props} />
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    );
  };
};

export default withProviders;
