import { ColorTypes, scaleHeight, scaleWidth } from '@/app/theme';
import { getThemeColors } from '@/shared/utils';
import { AppearanceMode } from '@/types/theme';
import { icons } from '@assets/icons';
import { memo, useCallback, useMemo, useState } from 'react';
import { Image, Pressable, StyleSheet, View, ViewProps } from 'react-native';
import { Text } from 'react-native-gesture-handler';

interface AccordionProps extends ViewProps {
  title: string;
  content?: string;
  theme?: AppearanceMode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, theme = 'light' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = getThemeColors(theme);
  const styles = useMemo(() => createStyles(colors), [colors]);

  const toggleAccordion = useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <View testID="accordion-view" style={[styles.accordion]}>
      <Pressable testID="accordion-toggle" onPress={toggleAccordion} style={[styles.header]}>
        <View style={styles.titleContainer}>
          <Text ellipsizeMode="tail" testID="accordion-title" style={[styles.title]}>
            {title}
          </Text>
        </View>
        <Image source={isExpanded ? icons.up : icons.down} resizeMode="contain" style={styles.icon} />
      </Pressable>
      {isExpanded && content && content.trim().length !== 0 && (
        <Text testID="accordion-content" style={[styles.content]}>
          {content}
        </Text>
      )}
    </View>
  );
};

const createStyles = (colors: ColorTypes) =>
  StyleSheet.create({
    accordion: {
      width: '100%',
      backgroundColor: colors.accordion.background,
      borderRadius: 8,
      padding: 15,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 5,
    },
    titleContainer: {
      flex: 1,
      marginRight: 10,
    },
    title: {
      flexShrink: 1,
    },
    content: {
      fontWeight: '400',
      marginTop: 10,
    },
    icon: {
      height: scaleHeight(16),
      width: scaleWidth(16),
    },
  });

export default memo(Accordion);
