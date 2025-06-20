import { ColorTypes, fonts, scaleHeight, scaleWidth, spacing_tokens } from '@/app/theme';
import { RouteName } from '@/navigation';
import { useAppTheme } from '@/providers';
import { Button } from '@/shared/components/ui/button';
import useAppNavigation from '@/shared/hooks/use-app-navigation';
import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { onboardingData } from './data';
import { OnboardingData } from './types';

const OnboardingScreen = () => {
  const pagerRef = useRef<PagerView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowDimensions();
  const { navigation } = useAppNavigation();
  const { colors } = useAppTheme();
  const styles = createStyles(colors);

  const handlePageChange = (index: number) => {
    setActiveIndex(index);
    pagerRef.current?.setPage(index);
  };

  const handleNext = () => {
    if (activeIndex < onboardingData.length - 1) {
      handlePageChange(activeIndex + 1);
    } else {
      // Navigate to the next screen (e.g., Login)
      navigation.navigate(RouteName.AUTH_LOGIN);
    }
  };

  return (
    <View style={styles.container}>
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setActiveIndex(e.nativeEvent.position)}
      >
        {onboardingData.map((item: OnboardingData) => (
          <View key={item.id} style={[styles.page, { width }]}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        ))}
      </PagerView>

      <View style={styles.buttonContainer}>
        <Button
          title={activeIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
          titleStyle={styles.buttonText}
          onPress={handleNext}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background.primary,
    },
    pagerView: {
      flex: 1,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: scaleWidth(spacing_tokens.s_24),
    },
    image: {
      width: scaleWidth(200),
      height: scaleHeight(200),
      resizeMode: 'contain',
      marginBottom: scaleHeight(spacing_tokens.s_48),
    },
    title: {
      fontSize: scaleWidth(fonts.size.large),
      fontWeight: 'bold',
      marginBottom: scaleHeight(spacing_tokens.s_12),
      textAlign: 'center',
    },
    subtitle: {
      fontSize: scaleWidth(fonts.size.medium),
      textAlign: 'center',
      color: colors.text.secondary,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: scaleHeight(spacing_tokens.s_40),
      left: 0,
      right: 0,
      paddingHorizontal: scaleWidth(spacing_tokens.s_24),
    },
    buttonText: {
      fontSize: scaleWidth(fonts.size.medium),
      fontWeight: '500',
    },
    button: {
      borderRadius: 10,
    },
  });

export default OnboardingScreen;
