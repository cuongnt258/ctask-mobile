import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

import useStyle from "hooks/useStyle";

import createStyles from "./IconButton.style";

interface IconButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  style?: ViewStyle;
  icon?: ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  style,
  icon,
  ...props
}) => {
  const { styles } = useStyle(createStyles);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={!onPress}
      onPress={onPress}
      {...props}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
