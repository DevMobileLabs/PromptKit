import { ConfigContext, ExpoConfig } from '@expo/config';

// This function defines your Expo configuration.
// It can be an object or a function that returns an object.
// Using a function allows you to access the ConfigContext for environment-specific settings.

const appName = 'PromptKit';
const appSlug = 'PromptKit';
const appVersion = '1.0.0';
const appOrientation = 'portrait';
// Use relative paths directly
const appUserInterfaceStyle = 'light';
const appScheme = 'promptkit';
// Use relative paths directly
const appSplashBackgroundColor = '#000000';
// Use relative paths directly
const appAdaptiveBackgroundColor = '#000000';
const appSplashEdgeToEdgeEnabled = true;

const appImageAsset = {
  appIcon: './assets/app/icon.png',
  appSplashImage: './assets/app/splash-icon.png',
  appAdaptiveIconForegroundImage: './assets/app/adaptive-icon.png',
  appWebFavicon: './assets/app/favicon.png',
};

// Define font paths using relative paths
const poppinsFonts = {
  regular: './assets/fonts/Poppins-Regular.ttf',
  bold: './assets/fonts/Poppins-Bold.ttf',
  medium: './assets/fonts/Poppins-Medium.ttf',
  semiBold: './assets/fonts/Poppins-SemiBold.ttf',
};

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    // Basic configuration
    name: appName,
    slug: appSlug,
    version: appVersion,
    orientation: appOrientation,
    icon: appImageAsset.appIcon,
    userInterfaceStyle: appUserInterfaceStyle,
    // Enable the new architecture (if you are using it)
    newArchEnabled: true,
    // Define your deep linking scheme
    scheme: appScheme,

    // Splash screen configuration
    splash: {
      image: appImageAsset.appSplashImage,
      resizeMode: 'contain',
      backgroundColor: appSplashBackgroundColor,
    },

    // Platform-specific configurations
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.anonymous.PromptKit', // Ensure this is unique for your app
      backgroundColor: appSplashBackgroundColor,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: appImageAsset.appAdaptiveIconForegroundImage,
        backgroundColor: appAdaptiveBackgroundColor,
      },
      edgeToEdgeEnabled: appSplashEdgeToEdgeEnabled,
      package: 'com.anonymous.PromptKit', // Ensure this is unique for your app
    },
    web: {
      favicon: appImageAsset.appWebFavicon,
    },

    extra: {
      eas: {
        projectId: process.env.EXPO_PUBLIC_EAS_PROJECT_ID,
      },
    },

    // Plugins configuration (for example, expo-font)
    plugins: [
      [
        'expo-font',
        {
          fonts: [poppinsFonts.regular, poppinsFonts.bold, poppinsFonts.medium, poppinsFonts.semiBold],
        },
      ],
    ],
  };
};
