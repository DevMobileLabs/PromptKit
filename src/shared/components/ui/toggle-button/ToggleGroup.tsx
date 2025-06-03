import React, { memo, useMemo } from 'react';
import { StyleProp, StyleSheet, TextStyle, View, ViewProps, ViewStyle } from 'react-native';

import { ColorTypes } from '@/app/theme';
import { getThemeColors } from '@/shared/utils';
import { Divider, normalize } from '@rneui/themed';
import Toggle, { ToggleProps } from './Toggle';
import {
  DIVIDER_CONTAINER_MARGIN,
  ITEM_CONTAINER_MARGIN_HORIZONTAL,
  ITEM_CONTAINER_MARGIN_VERTICAL,
  itemToggleModeStyles,
  listModeStyles,
  ToggleContainedMode,
  ToggleLabelPosition,
} from './utils';
import { AppearanceMode } from '@/types/theme';

/**
 * Props for the ToggleContained component.
 * This component renders a list of toggles with optional labels and dividers.
 */
export interface ToggleContainedProps extends ViewProps {
  /**
   * An array of ToggleItem objects representing the toggles to display.
   */
  items?: ToggleProps[];
  /**
   * The size of the toggles. Inherited by individual items if not specified on them.
   */
  size?: ToggleProps['size'];
  /**
   * The theme of the toggles. Inherited by individual items if not specified on them.
   */
  theme?: AppearanceMode;
  /**
   * The offset of the thumb within the toggle track. Inherited by individual items if not specified on them.
   */
  thumbOffset?: ToggleProps['thumbOffset'];
  /**
   * Whether all toggles in the list are disabled. Can be overridden by individual item's 'disabled' prop.
   */
  disabled?: boolean;
  /**
   * Custom style for the container of each individual toggle item.
   */
  itemContainerStyle?: ViewStyle;
  /**
   * Custom style for the label of each individual toggle item.
   */
  labelStyle?: TextStyle;
  /**
   * The default position of the label for all items. Can be overridden by individual item's 'labelPosition' prop. Defaults to 'left'.
   */
  labelPosition?: ToggleLabelPosition;
  /**
   * The visual mode of the toggle list. Defaults to 'contained'.
   */
  mode?: ToggleContainedMode;
}

const ToggleGroup: React.FC<ToggleContainedProps> = ({
  items,
  size,
  theme = 'light',
  thumbOffset,
  style,
  itemContainerStyle,
  labelStyle,
  disabled,
  labelPosition: defaultLabelPosition = 'left',
  mode = 'contained',
  ...props
}) => {
  const colors = getThemeColors(theme);
  const styles = useMemo(() => createStyles(colors, mode), [colors, mode]);

  /**
   * Gets the container style for each individual toggle item.
   */
  const itemContainerStyles = useMemo(() => {
    const baseStyle: StyleProp<ViewStyle>[] = [styles.itemContainer, itemToggleModeStyles[mode], itemContainerStyle];

    baseStyle.push({ flexDirection: 'row', alignItems: 'center' });
    return StyleSheet.flatten(baseStyle);
  }, [itemContainerStyle, mode, styles.itemContainer]);

  return (
    // Apply the list mode style and any custom style to the overall container.
    <View style={StyleSheet.flatten([listModeStyles[mode], styles.container, style])} {...props}>
      {items?.map((item, index) => {
        return (
          <>
            <View key={item.id} testID={`toggle-container-${item.id}`} style={itemContainerStyles}>
              <Toggle
                value={item.value}
                onValueChange={item.onValueChange}
                disabled={item.disabled ? item.disabled : disabled}
                size={item.size ? item.size : size}
                theme={item.theme ? item.theme : theme}
                thumbOffset={item.thumbOffset ? item.thumbOffset : thumbOffset}
                labelPosition={item.labelPosition ? item.labelPosition : defaultLabelPosition}
                labelStyle={item.labelStyle ? item.labelStyle : labelStyle}
                label={item.label}
                {...item}
              >
                {item.children}
              </Toggle>
            </View>
            {/* Render a divider if the mode is 'contained' and it's not the last item. */}
            {mode === 'contained' && index < items.length - 1 && (
              <View style={styles.dividerContainer}>
                <Divider style={styles.divider} />
              </View>
            )}
          </>
        );
      })}
    </View>
  );
};

const createStyles = (colors: ColorTypes, mode: ToggleContainedMode) =>
  StyleSheet.create({
    container: {
      backgroundColor: mode === 'contained' ? colors.toggleContained.bg : 'transparent',
    },
    itemContainer: {
      width: '100%',
      backgroundColor: mode === 'separated' ? colors.toggleContained.bg : 'transparent',
      paddingVertical: normalize(ITEM_CONTAINER_MARGIN_VERTICAL),
      paddingHorizontal: normalize(ITEM_CONTAINER_MARGIN_HORIZONTAL),
    },

    dividerContainer: { alignItems: 'center', paddingHorizontal: normalize(DIVIDER_CONTAINER_MARGIN) },
    divider: { height: 1 },
  });

export default memo(ToggleGroup);
