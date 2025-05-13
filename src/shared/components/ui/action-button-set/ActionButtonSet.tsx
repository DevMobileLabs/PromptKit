import { AppearanceMode } from '@/types/theme';
import React, { memo, useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { Button, ButtonProps } from '../button';

type Layout = 'row' | 'column';

/**
 * Props for the {@link ActionButtonSet} component.
 */
interface ActionButtonSetProps extends ViewProps {
  /**
   * An array of props to configure each individual {@link Button} within the set.
   */
  actions: ButtonProps[];
  /**
   * Custom styles to apply to the container of the action buttons.
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Determines how the buttons are laid out within the container.
   * 'row': Buttons are arranged horizontally.
   * 'column': Buttons are arranged vertically.
   * Defaults to 'row'.
   */
  layout?: Layout;
  /**
   * The spacing between the action buttons.
   * Defaults to 8.
   */
  spacing?: number;
  /**
   * Specifies the color theme to use for the action buttons.
   * Defaults to 'system'.
   */
  theme?: AppearanceMode;
  /**
   * Defines the maximum number of buttons allowed per row when the `layout` is set to 'row'.
   * If the number of actions exceeds this value, the buttons will wrap onto the next row.
   * This property is ignored if `layout` is 'column'.
   * Defaults to 3.
   */
  maxButtonPerRow?: number;
}

/**
 * A component that renders a set of {@link Button} components, useful for presenting multiple related actions.
 *
 * @param {ActionButtonSetProps} props - The properties for the ActionButtonSet component.
 * @returns {JSX.Element} The rendered ActionButtonSet component.
 */
const ActionButtonSet: React.FC<ActionButtonSetProps> = ({
  actions,
  containerStyle,
  layout = 'row',
  spacing = 8,
  theme = 'system',
  maxButtonPerRow = 3,
  ...props
}) => {
  const containerLayoutStyle = useMemo<ViewStyle>(() => {
    const flexDirection: Layout = layout === 'row' ? 'column' : 'column';
    const gap = layout === 'row' ? spacing : spacing;
    return { flexDirection, gap };
  }, [layout, spacing]);

  const defaultStyles = createStyles();

  const containerStyles = useMemo<StyleProp<ViewStyle>>(() => {
    return StyleSheet.flatten([defaultStyles.container, containerStyle, containerLayoutStyle]);
  }, [defaultStyles.container, containerStyle, containerLayoutStyle]);

  // Renders a single row of buttons.
  const renderRow = (rowItems: ButtonProps[], rowIndex: number) => (
    <View
      key={rowItems.map((item) => item.title).join('-')}
      style={[defaultStyles.row, { gap: spacing }]}
      testID={`action-button-set-row-${rowIndex}`}
    >
      {rowItems.map((action, index) => (
        <Button
          key={index}
          {...action}
          theme={theme}
          title={action.Icon && layout === 'row' && maxButtonPerRow > 2 ? '' : action.title}
          buttonStyle={[defaultStyles.buttonInRow, action.buttonStyle]}
          testID={`action-button-set-button-${index}`}
        />
      ))}
    </View>
  );

  // Renders content based on layout.
  const renderContent = () => {
    if (layout === 'row') {
      const rows: ButtonProps[][] = [];
      const validMaxPerRow = Math.max(1, maxButtonPerRow);
      for (let i = 0; i < actions.length; i += validMaxPerRow) {
        rows.push(actions.slice(i, i + validMaxPerRow));
      }
      return rows.map((row, index) => renderRow(row, index)); // Pass rowIndex
    } else {
      return actions.map((action, index) => (
        <Button key={index} {...action} theme={theme} buttonStyle={[action.buttonStyle]} />
      ));
    }
  };

  return (
    <View style={containerStyles} {...props}>
      {renderContent()}
    </View>
  );
};

const createStyles = () =>
  StyleSheet.create({
    container: {},
    row: {
      flexDirection: 'row',
    },
    buttonInRow: {
      flex: 1,
    },
  });

export default memo(ActionButtonSet);
