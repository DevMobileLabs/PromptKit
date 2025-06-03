import { ImageStyle, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';
import { icons } from '@assets/icons';

interface AppIconProps {
  name: keyof typeof icons;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}

const AppIcon: React.FC<AppIconProps> = ({ name, size = 24, color, style, iconStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={icons[name]}
        style={[styles.icon, { width: size, height: size }, iconStyle]}
        tintColor={color}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default AppIcon;
