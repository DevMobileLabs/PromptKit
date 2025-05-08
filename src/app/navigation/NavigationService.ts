import {
  CommonActions,
  createNavigationContainerRef,
  NavigationContainerRefWithCurrent,
  NavigationState,
  ParamListRoute,
  StackActions,
} from '@react-navigation/native';
import { RootStackParamList as RootStackParams } from './types';

/**
 * Interface for the Navigation Service.
 */
export interface INavigationService {
  readonly ref: NavigationContainerRefWithCurrent<RootStackParams>;
  onStateChange(): void;
  onReady(): void;
  navigate<T extends keyof RootStackParams & string>(screen: T, params?: RootStackParams[T]): void;
  push<T extends keyof RootStackParams & string>(screen: T, params?: RootStackParams[T]): void;
  replace<T extends keyof RootStackParams & string>(screen: T, params?: RootStackParams[T]): void;
  goBack(): void;
  pop(count?: number): void;
  popToTop(): void;
  reset<T extends keyof RootStackParams & string>(screen: T, params?: RootStackParams[T]): void;
  setParams<T extends keyof RootStackParams>(params: Partial<RootStackParams[T]>): void;
  canGoBack(): boolean;
  getState(): NavigationState | undefined;
  getCurrentRoute(): ParamListRoute<RootStackParams> | undefined;
  getCurrentParams<T = unknown>(): T | undefined;
  goBackTo<T extends keyof RootStackParams>(screen: T): void;
}

/**
 * NavigationService
 * A singleton service to handle navigation throughout the app.
 */
class NavigationService implements INavigationService {
  private navigationRef = createNavigationContainerRef<RootStackParams>();
  private prevScreenName: string | null = null;

  /**
   * @returns {NavigationContainerRefWithCurrent<RootStackParams>} The navigation reference.
   */
  get ref(): NavigationContainerRefWithCurrent<RootStackParams> {
    return this.navigationRef;
  }

  /**
   * Handles navigation state changes and logs screen transitions.
   * Updates the previous screen name.
   */
  onStateChange = (): void => {
    if (!this.navigationRef.isReady()) {
      return;
    }

    const currentRoute = this.navigationRef.getCurrentRoute();
    const currentScreenName = currentRoute?.name || null;

    if (this.prevScreenName && currentScreenName) {
      if (__DEV__) {
        console.log('onStateChange:', JSON.stringify({ to: currentScreenName, from: this.prevScreenName }, null, '2'));
      }
    }

    this.prevScreenName = currentScreenName;
  };

  /**
   * Initializes the previous screen name when navigation is ready.
   */
  onReady = (): void => {
    if (!this.navigationRef.isReady()) {
      return;
    }
    this.prevScreenName = this.navigationRef.getCurrentRoute()?.name || null;
  };

  /**
   * Navigates to a specified screen with optional parameters.
   * @template T
   * @param {T} screen - The screen name.
   * @param {RootStackParams[T]} [params] - Optional parameters for the screen.
   */
  navigate<T extends keyof RootStackParams & string>(screen: T, params?: RootStackParams[T]): void {
    if (this.navigationRef.isReady()) {
      this.navigationRef.navigate(screen as string, params as object);
    }
  }

  /**
   * Pushes a new screen onto the navigation stack.
   * @template T
   * @param {T} screen - The screen name.
   * @param {RootStackParams[T]} [params] - Optional parameters for the screen.
   */
  push<T extends keyof RootStackParams & string>(screen: T, params?: RootStackParams[T]): void {
    if (this.navigationRef.isReady()) {
      this.navigationRef.dispatch(StackActions.push(screen, params));
    }
  }

  /**
   * Replaces the current screen with a new one.
   * @template T
   * @param {T} screen - The screen name.
   * @param {RootStackParams[T]} [params] - Optional parameters for the screen.
   */
  replace<T extends keyof RootStackParams & string>(screen: T, params?: RootStackParams[T]): void {
    if (this.navigationRef.isReady()) {
      this.navigationRef.dispatch(StackActions.replace(screen, params));
    }
  }

  /**
   * Navigates back to the previous screen.
   */
  goBack(): void {
    if (this.navigationRef.isReady() && this.navigationRef.canGoBack()) {
      this.navigationRef.goBack();
    }
  }

  /**
   * Pops a specific number of screens from the navigation stack.
   * @param {number} count - Number of screens to pop. Defaults to 1.
   */
  pop(count: number = 1): void {
    if (this.navigationRef.isReady()) {
      this.navigationRef.dispatch(StackActions.pop(count));
    }
  }

  /**
   * Pops all screens and navigates to the top of the stack.
   */
  popToTop(): void {
    if (this.navigationRef.isReady()) {
      this.navigationRef.dispatch(StackActions.popToTop());
    }
  }

  /**
   * Resets navigation stack and navigates to the specified screen.
   * @template T - The screen name which must be a key of RootStackParamList and a string.
   * @param {T} screen - The screen name.
   * @param {RootStackParamList[T]} [params] - Optional parameters for the screen.
   */
  reset<T extends keyof RootStackParams & string>(screen: T, params?: RootStackParams[T]): void {
    if (this.navigationRef.isReady()) {
      this.navigationRef.reset({
        index: 0,
        routes: [{ name: screen, params }],
      });
    }
  }

  /**
   * Updates the parameters of the current route.
   * @template T
   * @param {Partial<RootStackParams[T]>} params - The new parameters.
   */
  setParams<T extends keyof RootStackParams>(params: Partial<RootStackParams[T]>): void {
    if (this.navigationRef.isReady()) {
      this.navigationRef.dispatch(CommonActions.setParams(params));
    }
  }

  /**
   * Checks if navigation can go back.
   * @returns {boolean} Whether navigation can go back.
   */
  canGoBack(): boolean {
    return this.navigationRef.isReady() && this.navigationRef.canGoBack();
  }

  /**
   * Retrieves the current navigation state.
   * @returns {NavigationState | undefined} The navigation state, if available.
   */
  getState(): NavigationState | undefined {
    return this.navigationRef.isReady() ? this.navigationRef.getState() : undefined;
  }

  /**
   * Retrieves the current active route.
   * @returns {ParamListRoute<RootStackParams> | undefined} The current route, if available.
   */
  getCurrentRoute(): ParamListRoute<RootStackParams> | undefined {
    return this.navigationRef.isReady() ? this.navigationRef.getCurrentRoute() : undefined;
  }

  /**
   * Retrieves the parameters of the current active route.
   * @template T
   * @returns {T | undefined} The current route parameters, if available.
   */
  getCurrentParams<T = unknown>(): T | undefined {
    return this.navigationRef.isReady() ? (this.navigationRef.getCurrentRoute()?.params as T) : undefined;
  }

  /**
   * Navigates back until it reaches a specified screen.
   * @template T
   * @param {T} screen - The target screen name.  d
   */
  goBackTo<T extends keyof RootStackParams>(screen: T): void {
    if (this.navigationRef.isReady()) {
      while (this.navigationRef.canGoBack() && this.getCurrentRoute()?.name !== screen) {
        this.navigationRef.goBack();
      }
    }
  }
}

export const navigationService = new NavigationService();
