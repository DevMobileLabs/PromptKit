import { ColorTypes, scaleHeight, scaleWidth } from '@/app/theme';
import { useAppTheme } from '@/providers';
import TextInputField from '@/shared/components/form/text-input';
import { SafeAreaView } from '@/shared/components/layouts';
import React, { useMemo } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PromptCard from '../components/prompt-card';

const DiscoverPromptsScreen = () => {
  const { colors } = useAppTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);

  // Placeholder data for trending prompts with better image URLs
  const trendingPrompts = [
    {
      id: '1',
      image: 'https://picsum.photos/160/160?random=1',
      title: 'Art Nouveau Storybook ...',
      price: '$4.99',
    },
    {
      id: '2',
      image: 'https://picsum.photos/160/160?random=2',
      title: 'Whimsical Companions',
      price: '$4.99',
    },
    {
      id: '3',
      image: 'https://picsum.photos/160/160?random=3',
      title: 'Detective Clues Junk Jo...',
      price: '$2.99',
    },
    {
      id: '4',
      image: 'https://picsum.photos/160/160?random=4',
      title: 'Intricate Patterns In Ab...',
      price: '$3.99',
      rating: '5.0 ★',
    },
    {
      id: '5',
      image: 'https://picsum.photos/160/160?random=5',
      title: 'Kawaii Sweet Food Clipart',
      price: '$3.99',
    },
    {
      id: '6',
      image: 'https://picsum.photos/160/160?random=6',
      title: 'Watercolor Paranormal I...',
      price: '$3.99',
      rating: '5.0 ★',
    },
    {
      id: '7',
      image: 'https://picsum.photos/160/160?random=7',
      title: 'Ancient Guardian Statues',
      price: '$5.99',
    },
    {
      id: '8',
      image: 'https://picsum.photos/160/160?random=8',
      title: 'Dreamy Cyberpunk City',
      price: '$4.99',
    },
  ];

  // Component for displaying an individual prompt card

  return (
    <SafeAreaView>
      {/* Header Section */}
      <View style={styles.header}>
        <TextInputField label="Search" />
      </View>

      {/* Filter Section */}
      <View style={styles.filterSection}>
        {/* All Filters Button */}
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>All Filters</Text>
        </TouchableOpacity>
        {/* Most Relevant Button */}
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Most relevant</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.promptsGrid}
        data={trendingPrompts}
        renderItem={({ item }) => <PromptCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.trendingPromptsContainer}
      />
    </SafeAreaView>
  );
};

// Stylesheet for the components
const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      paddingHorizontal: scaleWidth(16),
      paddingVertical: scaleHeight(10),
      backgroundColor: colors.background.secondary,
    },

    filterSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    filterButton: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 15,
      paddingHorizontal: 12,
      paddingVertical: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    filterButtonText: {
      color: colors.text.primary,
      marginRight: 5,
      fontSize: 14,
    },

    trendingPromptsContainer: {
      paddingHorizontal: scaleWidth(16),
      paddingBottom: scaleHeight(4),
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text.primary,
      marginTop: 20,
      marginBottom: 15,
    },
    promptsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  });

export default DiscoverPromptsScreen;
