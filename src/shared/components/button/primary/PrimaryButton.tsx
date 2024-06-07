import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";

import useStyle from "hooks/useStyle";

import Text from "@shared-components/text/Text";

import createStyles from "./PrimaryButton.style";

interface PrimaryButtonProps extends TouchableOpacityProps {
  children?: ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  title?: string;
  textColor?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  title,
  style,
  contentStyle,
  textColor,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const {
    styles,
    theme: { colors },
  } = useStyle(createStyles);

  const renderChildren = () => {
    if (!children) {
      return (
        <Text
          h3
          color={textColor || colors.white}
          style={{
            marginLeft: leftIcon ? 8 : 0,
            marginRight: rightIcon ? 8 : 0,
          }}
        >
          {title}
        </Text>
      );
    }

    return children;
  };

  return (
    <TouchableOpacity style={[styles.container, style]} {...props}>
      <View style={[styles.content, contentStyle]}>
        {leftIcon}
        {renderChildren()}
        {rightIcon}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
