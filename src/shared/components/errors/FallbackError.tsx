import { Button } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ErrorFallbackProps {
  /** The error that was caught by the ErrorBoundary */
  error?: Error;
  /** Callback to reset the error boundary */
  onReset?: () => void;
}

/**
 * A default fallback UI component that can be reused in your ErrorBoundary.
 */
const FallbackError: React.FC<ErrorFallbackProps> = ({ error, onReset }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Something went wrong.</Text>
      {error && <Text style={styles.error}>{error.toString()}</Text>}
      {onReset && <Button title="Try Again" onPress={onReset} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  error: {
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
    color: 'red',
  },
});

export default FallbackError;
