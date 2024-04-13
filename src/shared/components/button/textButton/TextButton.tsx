import React from "react";
import { TouchableOpacity } from "react-native";

import Text, { ITextProps } from "@shared-components/text/Text";

interface TextButtonProps extends ITextProps {
  onPress?: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({
  onPress = () => {},
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text {...props} />
    </TouchableOpacity>
  );
};

export default TextButton;
