import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

// We will now use the ParsedURL type directly from expo-linking
// interface ParsedDeepLink {
//   route?: string;
//   params?: Record<string, string | string[] | undefined>;
// }

/**
 * @function useDeepLinking
 * @description A custom hook to handle incoming deep links using expo-linking.
 * It listens for new deep links while the app is open and checks for an initial deep link when the app launches.
 * It returns the parsed URL object provided directly by Linking.parse().
 * @returns {ParsedURL | null} The most recently handled parsed URL, or null if none.
 */
const useDeepLinking = () => {
  // State to store the parsed URL directly from Linking.parse()
  const [deepLink, setDeepLink] = useState<Linking.ParsedURL | null>(null);

  // expo-linking's useURL hook listens for incoming deep links
  // This hook updates whenever a new deep link activates the app while it's running
  const url = Linking.useURL();

  useEffect(() => {
    // This effect runs when the 'url' from useURL changes
    if (url) {
      console.log('Deep link received (useURL):', url);
      // Directly use Linking.parse() and set the state
      const parsed = Linking.parse(url);
      setDeepLink(parsed);
    }
  }, [url]); // Depend on the 'url' provided by useURL hook

  useEffect(() => {
    // Check for the initial URL when the app is launched via a deep link
    const getInitialDeepLink = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();
        if (initialUrl) {
          console.log('Initial deep link (getInitialURL):', initialUrl);
          // Directly use Linking.parse() for the initial URL
          const parsed = Linking.parse(initialUrl);
          setDeepLink(parsed);
        }
      } catch (error) {
        console.error('Error getting initial deep link URL:', error);
      }
    };

    getInitialDeepLink();

    // No need to manually remove event listeners with useURL hook
    // getInitialURL is a one-time check on mount
  }, []); // Empty dependency array means this effect runs only once on mount

  // Return the parsed URL state
  return deepLink;
};

export default useDeepLinking;
