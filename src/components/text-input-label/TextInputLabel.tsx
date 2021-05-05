import React, { FC, memo } from 'react';
import {
  Text,
  ViewStyle,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import Box from '../box';

interface TextInputWrapperInterface extends ViewStyle {
  onPress?: () => void;
}

interface TextInputLabelInterfaces extends TextInputProps {
  label: string;
  wrapperStyle?: ViewStyle | ViewStyle[];
  labelStyle?: TextStyle;
  textInputWrapper?: TextInputWrapperInterface;
}

const defaultLabelStyle = { fontSize: 12, marginBottom: 5, color: '#000' };

const TextInputLabel: FC<TextInputLabelInterfaces> = ({
  label,
  wrapperStyle,
  labelStyle,
  textInputWrapper,
  ...props
}) => {
  return (
    <Box {...wrapperStyle}>
      <Text style={[defaultLabelStyle, labelStyle]}>{label}</Text>
      <Box
        justifyContent={'center'}
        height={40}
        borderRadius={6}
        paddingHorizontal={11}
        borderWidth={1}
        borderColor={'#ccd0d5'}
        backgroundColor={'#f5f6f7'}
        {...textInputWrapper}>
        <RNTextInput {...props} />
      </Box>
    </Box>
  );
};

export default memo(TextInputLabel);
