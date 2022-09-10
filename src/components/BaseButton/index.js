import React from 'react';
import {Pressable} from 'react-native';
import {
  validateFunction,
  validateBoolean,
  validateObject,
  validateArray,
} from 'utils';

const BaseButton = ({
  children,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  disabled,
  style,
  pressedPressableStyle,
  ...props
}) => {
  if (!children) return null;

  const validatedOnPress = validateFunction(onPress) ? onPress : () => {};
  const validatedOnPressIn = validateFunction(onPressIn) ? onPressIn : () => {};
  const validatedOnPressOut = validateFunction(onPressOut)
    ? onPressOut
    : () => {};
  const validatedOnLongPress = validateFunction(onLongPress)
    ? onLongPress
    : () => {};
  const validatedDisabled = validateBoolean(disabled) ? disabled : false;
  const validatedStyle = validateArray(style) ? style : [{}];
  const validatedPressedPressableStyle = validateObject(pressedPressableStyle)
    ? pressedPressableStyle
    : {};

  return (
    <Pressable
      onPress={validatedOnPress}
      onPressIn={validatedOnPressIn}
      onPressOut={validatedOnPressOut}
      onLongPress={validatedOnLongPress}
      style={({pressed}) => [
        ...validatedStyle,
        pressed && validatedPressedPressableStyle,
      ]}
      disabled={validatedDisabled}
      {...props}>
      {({pressed}) =>
        React.Children.toArray(children).map(el =>
          React.cloneElement(el, {...el.props, pressed}, el.props.children),
        )
      }
    </Pressable>
  );
};

export default BaseButton;
