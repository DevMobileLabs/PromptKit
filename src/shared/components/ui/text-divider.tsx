import { scaleWidth } from '@/app/theme';
import { fonts } from '@/app/theme/font';
import React, { memo } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

type TextDividerProps = {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  dividerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  labelPosition?: 'center' | 'left' | 'right';
};

const TextDivider = ({
  label,
  containerStyle,
  dividerStyle,
  labelStyle,
  labelPosition = 'center',
}: TextDividerProps) => {
  const renderCenter = (
    <>
      <View style={[styles.divider, dividerStyle]} />
      <Text style={[styles.labelText, labelStyle]}>{label}</Text>
      <View style={[styles.divider, dividerStyle]} />
    </>
  );

  const renderLeft = (
    <>
      <Text style={[styles.labelText, labelStyle, { marginRight: scaleWidth(12) }]}>{label}</Text>
      <View style={[styles.divider, { flex: 1 }, dividerStyle]} />
    </>
  );

  const renderRight = (
    <>
      <View style={[styles.divider, { flex: 1 }, dividerStyle]} />
      <Text style={[styles.labelText, labelStyle, { marginLeft: scaleWidth(12) }]}>{label}</Text>
    </>
  );

  return (
    <View
      style={[styles.dividerContainer, containerStyle, labelPosition !== 'center' && { justifyContent: 'flex-start' }]}
    >
      {labelPosition === 'left' && renderLeft}
      {labelPosition === 'right' && renderRight}
      {labelPosition === 'center' && renderCenter}
    </View>
  );
};

const styles = StyleSheet.create({
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scaleWidth(1),
  },
  divider: {
    borderWidth: 0.5,
    borderColor: 'grey',
    width: '45%',
  },
  labelText: {
    marginHorizontal: scaleWidth(12),
    fontSize: scaleWidth(fonts.size.medium),
    color: 'grey',
  },
});

export default memo(TextDivider);
