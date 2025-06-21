import { ColorTypes, scaleHeight, scaleWidth, width } from '@/app/theme';
import { useAppTheme } from '@/providers';
import React, { useMemo, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CARD_WIDTH = (width - scaleWidth(48)) / 2;

const PromptCard = ({ item }: { item: any }) => {
  const { colors } = useAppTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  // Handle image loading error
  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <View style={styles.promptCard}>
      {/* Image container with aspect ratio for square images */}
      <View style={styles.imageContainer}>
        {imageErrors[item.id] ? (
          // Fallback view when image fails to load
          <View style={styles.imageFallback}>
            <Text style={styles.fallbackText}>📷</Text>
            <Text style={styles.fallbackSubText}>Image</Text>
          </View>
        ) : (
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={styles.promptImage}
            onError={() => handleImageError(item.id)}
          />
        )}
        <View style={styles.midjourneyTag}>
          <Text style={styles.midjourneyTagText}>▲ Midjourney</Text>
        </View>
      </View>
      {/* Prompt title */}
      <View style={styles.promptTitleContainer}>
        <Text style={styles.promptTitle} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
      {/* Prompt footer with price and rating */}
      <View style={styles.promptFooter}>
        <Text style={styles.promptPrice}>{item.price}</Text>
        {item.rating && <Text style={styles.promptRating}>{item.rating}</Text>}
      </View>
    </View>
  );
};

export default PromptCard;

const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    promptsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    promptCard: {
      width: CARD_WIDTH,
      backgroundColor: colors.background.secondary,
      borderRadius: 10,
      marginBottom: scaleHeight(10),
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    imageContainer: {
      width: '100%',
      aspectRatio: 1, // Makes the image container square
      position: 'relative',
      overflow: 'hidden',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },

    imageFallback: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background.primary,
    },
    fallbackText: {
      fontSize: 24,
      color: colors.text.secondary,
    },
    fallbackSubText: {
      fontSize: 12,
      color: colors.text.secondary,
      marginTop: scaleHeight(4),
    },

    promptImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    midjourneyTag: {
      position: 'absolute',
      top: 8,
      left: 8,
      backgroundColor: 'rgba(63, 33, 13, 0.7)', // Specific color from screenshot with opacity
      borderRadius: 10,
      paddingHorizontal: 6,
      paddingVertical: 3,
      flexDirection: 'row',
      alignItems: 'center',
    },
    midjourneyTagText: {
      color: '#ffc107', // Gold-like color from screenshot
      fontSize: 10,
      fontWeight: 'bold',
    },
    promptTitleContainer: {
      paddingHorizontal: scaleWidth(8),
      marginTop: scaleHeight(8),
      height: scaleHeight(40), // Fixed height for two lines to prevent layout shifts
      justifyContent: 'center', // Center text vertically if it's less than 2 lines
    },
    promptTitle: {
      color: colors.text.primary,
      fontSize: 14,
      fontWeight: '500',
    },
    promptFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: scaleWidth(8),
      paddingBottom: scaleHeight(8),
      marginTop: scaleHeight(4),
    },
    promptPrice: {
      color: colors.text.primary,
      fontSize: 13,
      fontWeight: 'bold',
    },
    promptRating: {
      color: '#ffc107',
      fontSize: 13,
      fontWeight: 'bold',
    },
  });
