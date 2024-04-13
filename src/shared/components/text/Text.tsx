import React from "react";
import {
  Text as BaseText,
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
} from "react-native";

import useStyle from "hooks/useStyle";

import createStyles from "./Text.style";

export interface ITextProps extends TextProps {
  title?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  body1?: boolean;
  body2?: boolean;
  caption?: string;
  right?: boolean;
  center?: boolean;
  color?: string;
  colorDark?: string;
  style?: StyleProp<TextStyle> | Array<StyleProp<TextStyle>> | TextStyle;
  children?: React.ReactNode;
}

const Text: React.FC<ITextProps> = ({
  color,
  colorDark,
  title,
  h1,
  h2,
  h3,
  body1,
  body2 = true,
  caption,
  right,
  center,
  style,
  ...props
}) => {
  const { styles, isDarkMode } = useStyle(createStyles);

  const textStyle = StyleSheet.flatten([
    styles.text,
    body2 && styles.body2,
    title && styles.title,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    body1 && styles.body1,
    caption && styles.caption,
    right && styles.right,
    center && styles.center,
    color && { color: isDarkMode ? colorDark || color : color },
    style,
  ]);

  return <BaseText style={textStyle} {...props} />;
};

export default Text;
