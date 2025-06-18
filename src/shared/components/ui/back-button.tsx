import { icons } from '@assets/icons';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import IconButton, { IconButtonProps } from './icon-button/icon-button';

interface BackButtonProps extends Omit<IconButtonProps, 'icon'> {
  icon?: ImageSourcePropType | undefined;
}

const BackButton = ({ onPress, iconStyle, icon, ...props }: BackButtonProps) => {
  return <IconButton icon={icon || icons.back} onPress={onPress} iconStyle={iconStyle} {...props} />;
};

export default BackButton;
