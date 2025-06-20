import { authModuleConfig, AuthModuleParams } from './auth';
import { homeModuleConfig, HomeModuleParams } from './home';
import { onboardingModuleConfig, OnboardingModuleParams } from './onboarding';
import { tabBarModuleConfig, TabBarModuleParams } from './tab-bar';

type NoDuplicateKeys<T extends T[number][]> = T extends [infer First, ...infer Rest extends T[number][]]
  ? Rest extends [] // Base case: if there's no more types left to compare, return First as the valid type
    ? First
    : NoDuplicateKeysHelper<First, NoDuplicateKeys<Rest>> // Continue checking and combining the types
  : never; // In case of an empty array, return never

type NoDuplicateKeysHelper<T, U> = U extends 'Error: Duplicate keys found'
  ? 'Error: Duplicate keys found' // If U is already an error, return error
  : keyof T & keyof U extends never // If there are no overlapping keys
    ? T & U // Combine the types
    : 'Error: Duplicate keys found'; // If duplicate keys are found, return the error

/**
 * @instruction
 * To add a new module, ensure that the module parameters are included in the array passed to `NoDuplicateKeys`.
 */
export type AllModuleParamList = NoDuplicateKeys<
  [AuthModuleParams, OnboardingModuleParams, HomeModuleParams, TabBarModuleParams]
>;

export const mainScreens = [...authModuleConfig, ...onboardingModuleConfig, ...homeModuleConfig, ...tabBarModuleConfig];

export * from './navigation-config';
