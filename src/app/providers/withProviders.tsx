import store from '@/store';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';

export const withProviders = (
  Component: React.ComponentType<PropsWithChildren<{}>>
): React.ComponentType<PropsWithChildren<{}>> => {
  return function WithProviders(props: PropsWithChildren<{}>) {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      </ErrorBoundary>
    );
  };
};

export default withProviders;
