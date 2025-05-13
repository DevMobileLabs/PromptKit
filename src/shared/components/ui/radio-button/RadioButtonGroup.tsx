/* eslint-disable @typescript-eslint/naming-convention */
import React, { JSX } from 'react';
import { StyleProp, StyleSheet, TextStyle, View, ViewProps, ViewStyle } from 'react-native';

import { AppearanceMode } from '@/types/theme';

import { colorVariables, scaleWidth } from '@/app/theme';
import RadioButton, { RadioButtonProps } from './RadioButton';
import { RadioButtonVariantStyles } from './utils';
type RadioGroupLayout = 'row' | 'column';

/**
 * Props for the {@link RadioButtonGroup} component.
 */
interface RadioBtnContainedProps extends ViewProps {
  /**
   * An array of options to render as radio buttons. Each option should have a `label` and a `value`.
   */
  options: RadioButtonProps[];
  /**
   * The value of the currently selected radio button.
   */
  selectedValue: string;
  /**
   * Callback function that is called when a radio button is selected. It receives the new value.
   */
  onChange: (value: string) => void;
  /**
   * If true, all radio buttons in the group will be disabled. Defaults to false.
   */
  disabled?: boolean;
  /**
   * Custom styles to apply to the container of the radio button group.
   */
  containerStyles?: StyleProp<ViewStyle>;
  /**
   * The layout direction of the radio buttons. Can be 'row' or 'column'. Defaults to 'column'.
   */
  layout?: RadioGroupLayout;
  /**
   * The spacing between the radio buttons. Applied as `gap` for 'row' layout and `rowGap` for 'column' layout. Defaults to 0.
   */
  spacing?: number;
  /**
   * If true and `layout` is 'row', the radio buttons will wrap to the next line if they don't fit in a single line. Defaults to false.
   */
  wrap?: boolean;
  /**
   * Styles for each radio button item container.
   */
  itemStyles?: StyleProp<ViewStyle>;
  /**
   * Styles for each radio button label.
   */
  itemLabelStyles?: StyleProp<TextStyle>;
  /**
   * Styles for the selected radio button label.
   */
  itemSelectedLabelStyles?: StyleProp<TextStyle>;
  /**
   * Variant styles for individual radio buttons. (Selected, Disabled)
   */
  variantStyles?: RadioButtonVariantStyles;
  /**
   * A test identifier to apply to each individual radio button item for testing purposes.
   */
  radioItemTestId?: string;
  /**
   * Specifies the color theme to use for the radio buttons.
   */
  theme?: AppearanceMode;
  /**
   * Sets a custom tint color for the radio button elements (border, inner circle) in the group.
   */
  tintColor?: string;
}

function RadioButtonContained({
  options,
  selectedValue,
  onChange,
  disabled = false,
  containerStyles,
  itemStyles,
  itemLabelStyles,
  itemSelectedLabelStyles,
  layout = 'column',
  spacing = 0,
  wrap = true,
  variantStyles,
  ...props
}: RadioBtnContainedProps): JSX.Element {
  const groupStyle: StyleProp<ViewStyle> = [
    containerStyles,
    { flexDirection: layout },
    layout === 'row' && spacing > 0 ? { gap: spacing } : undefined,
    layout === 'column' && spacing > 0 ? { rowGap: spacing } : undefined,
    layout === 'row' && wrap ? { flexWrap: 'wrap' } : undefined,
  ];

  return (
    <View style={groupStyle} {...props}>
      {options.map((opt) => (
        <RadioButton
          key={opt.value}
          label={opt.label}
          selected={opt.value === selectedValue}
          onPress={() => onChange(opt?.value || '')}
          disabled={disabled || opt.disabled}
          theme={props.theme}
          tintColor={props.tintColor}
          variantStyles={{
            ...variantStyles, // Apply the default variantStyles
            ...(opt.variantStyles || {}), // Apply any specific variantStyles from opt (if they exist)
            selected: styles.radioItemSelected, // Always apply the itemSelected style when selected
          }}
          style={[styles.radioItem, styles.radioItemContainer, itemStyles, opt.style]}
          labelStyle={[itemLabelStyles, opt.labelStyle]}
          selectedLabelStyle={[itemSelectedLabelStyles, opt.selectedLabelStyle]}
          outerCircleStyle={[styles.itemCircleOuter, opt.outerCircleStyle]}
          isShowChildren={opt.isShowChildren || opt.value === selectedValue}
          disabledStyle={opt.disabledStyle || styles.disabledItem}
          testID={opt.testID || props.radioItemTestId}
          {...opt}
        >
          {opt.children}
        </RadioButton>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  radioItemContainer: {
    width: '100%',
  },
  radioItem: {
    padding: scaleWidth(12),
    borderRadius: scaleWidth(12),
    borderWidth: scaleWidth(1),
    borderColor: colorVariables.neutral_200,
  },
  radioItemSelected: {
    backgroundColor: colorVariables.emerald_50,
    borderColor: colorVariables.emerald_400,
  },
  itemCircleOuter: {
    borderColor: colorVariables.neutral_500,
  },
  disabledItem: {
    opacity: 0.7,
  },
});

export default RadioButtonContained;
