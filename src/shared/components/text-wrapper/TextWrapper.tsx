import React, { useContext } from "react";
import fonts from "@fonts";
import RNText from "@freakycoder/react-native-custom-text";
import type { IRNTextProps } from "@freakycoder/react-native-custom-text";
import { ThemeContext } from "contexts";

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.sfPro.regular,
  color,
  children,
  ...rest
}) => {
  const {
    isDarkMode,
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <RNText
      fontFamily={fontFamily}
      color={color || isDarkMode ? colors.white : colors.black}
      {...rest}
    >
      {children}
    </RNText>
  );
};

export default TextWrapper;
