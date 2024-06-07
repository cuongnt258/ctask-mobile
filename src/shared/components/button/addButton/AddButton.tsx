import React, { useMemo } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";

import { ITextProps } from "@shared-components/text/Text";
import Plus from "assets/svg/Plus";
import useStyle from "hooks/useStyle";

import createStyles from "./AddButton.style";

interface AddButtonProps extends ITextProps {
  onPress?: () => void;
  color?: string;
  isDash?: boolean;
  style?: ViewStyle;
}

const AddButton: React.FC<AddButtonProps> = ({
  onPress,
  color,
  isDash,
  style,
}) => {
  const {
    styles,
    theme: { colors },
  } = useStyle(createStyles);

  const buttonStyle: ViewStyle = useMemo(() => {
    const modifiedColor = color || colors.primary;

    if (isDash) {
      return {
        borderWidth: 1,
        borderColor: colors.primary,
        borderStyle: "dashed",
      };
    }

    return { backgroundColor: modifiedColor };
  }, [colors, color, isDash]);

  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle, style]}
      disabled={!onPress}
      onPress={onPress}
    >
      <Plus color={isDash ? colors.primary : colors.white} />
    </TouchableOpacity>
  );
};

export default AddButton;
