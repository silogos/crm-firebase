import React, { FC, memo } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';

interface BoxInterfaces extends ViewStyle {
  children?: FC | FC[] | React.ReactElement | React.ReactElement[];
  onPress?: () => void;
  disabled?: boolean;
  activeOpacity?: number;
}

const Box: FC<BoxInterfaces> = ({
  children,
  onPress,
  disabled,
  activeOpacity,
  ...props
}) => {
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={activeOpacity}
        disabled={disabled}
        style={props}>
        {children}
      </TouchableOpacity>
    );
  } else {
    return <View style={{ ...props }}>{children}</View>;
  }
};

export default memo(Box);
