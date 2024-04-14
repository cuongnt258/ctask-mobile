import React, { FC, ReactNode, useRef, useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import useStyle from "hooks/useStyle";

import createStyles from "./Input.style";

interface InputProps extends TextInputProps {
  icon?: ReactNode;
  placeholder?: string;
  style?: ViewStyle;
  inputStyle?: ViewStyle;
  defaultValue?: string;
}

const Input: FC<InputProps> = ({
  icon,
  placeholder = "",
  style,
  inputStyle,
  defaultValue = "",
  ...props
}) => {
  const {
    styles,
    theme: { colors },
  } = useStyle(createStyles);

  const refInput = useRef<TextInput | null>(null);
  const refIsFocus = useRef<boolean>(false);
  const refValue = useRef<string>(defaultValue);

  const [isActive, setActive] = useState(false);

  const onFocus = () => {
    refIsFocus.current = true;
    setActive(true);
    console.log("[🪵] Input → onFocus");
  };

  const onBlur = () => {
    console.log("[🪵] Input → onBlur");

    refIsFocus.current = false;
    setActive(false);
  };

  const onChangeText = (value: string = "") => {
    refValue.current = value;
  };

  const onPressContainer = () => {
    if (!refInput.current) return;

    if (refIsFocus.current) refInput.current.blur();
    else refInput.current.focus();
  };

  const renderIcon = () => {
    if (!icon) return null;
    return <View style={styles.leftIconContainer}>{icon}</View>;
  };

  const renderText = () => {
    return (
      <TextInput
        ref={refInput}
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={colors.neutral.neutral2}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        {...props}
      />
    );
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isActive && { borderColor: colors.primary },
        style,
      ]}
      onPress={onPressContainer}
    >
      {renderIcon()}
      {renderText()}
    </TouchableOpacity>
  );
};

export default Input;
