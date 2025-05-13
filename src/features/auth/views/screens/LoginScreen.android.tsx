import { useAppTheme } from '@/app/providers';
import { ColorTypes } from '@/app/theme';
import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// You might need to install a library like react-native-vector-icons
// import Icon from 'react-native-vector-icons/FontAwesome'; // Example import

const CreateAccountScreen = () => {
  const { colors } = useAppTheme();

  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>

      <View style={styles.optionsContainer}>
        {/* Continue with Email/Phone Button */}
        <TouchableOpacity style={[styles.button, styles.emailButton]}>
          <Text style={styles.emailButtonText}>Continue with Email/Phone</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or Android</Text>

        {/* Continue with Apple Button */}
        <TouchableOpacity style={[styles.button, styles.socialButton]}>
          {/* <Icon name="apple" size={20} color="#000" style={styles.icon} /> */}
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>

        {/* Continue with Facebook Button */}
        <TouchableOpacity style={[styles.button, styles.socialButton]}>
          {/* <Icon name="facebook" size={20} color="#1877F2" style={styles.icon} /> */}
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>

        {/* Continue with Google Button */}
        <TouchableOpacity style={[styles.button, styles.socialButton]}>
          {/* <Icon name="google" size={20} color="#4285F4" style={styles.icon} /> */}
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>

      {/* Already have an account? Log in */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Do you already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            /* Navigate to Login Screen */
          }}
        >
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background.primary, // Use primary background color from theme
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
      fontFamily: 'serif', // Example of using a serif font if available
      color: colors.text.general_strong, // Assuming a text color exists in your theme colors
    },
    optionsContainer: {
      width: '100%',
      backgroundColor: colors.background.secondary, // Use secondary background color from theme
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000', // Shadow color might be theme-dependent as well
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: 15,
      borderRadius: 5,
      marginBottom: 15,
    },
    emailButton: {
      backgroundColor: '#1E8A6C', // Green color - consider making this theme-dependent
    },
    emailButtonText: {
      color: '#fff', // White color - consider making this theme-dependent
      fontSize: 16,
      fontWeight: 'bold',
    },
    orText: {
      fontSize: 16,
      color: 'gray', // Assuming a secondary text color exists
      marginBottom: 15,
    },
    socialButton: {
      backgroundColor: colors.background.secondary, // Use secondary background for social buttons
      borderWidth: 1,
      borderColor: 'gray', // Assuming a border color exists in theme
    },
    socialButtonText: {
      fontSize: 16,
      color: colors.text.general_strong, // Use primary text color
      marginLeft: 10, // Space for icon
    },
    icon: {
      marginRight: 10,
    },
    loginContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    loginText: {
      fontSize: 16,
      color: 'gray', // Use secondary text color
    },
    loginLink: {
      fontSize: 16,
      color: '#1E8A6C', // Green color for link - consider making this theme-dependent
      fontWeight: 'bold',
    },
  });

export default CreateAccountScreen;
