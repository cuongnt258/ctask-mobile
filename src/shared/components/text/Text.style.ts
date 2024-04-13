import fonts from "@fonts";
import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, TextStyle } from "react-native";

interface Style {
  text: TextStyle;
  title: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  caption: TextStyle;
  center: TextStyle;
  right: TextStyle;
}

export default (theme: ExtendedTheme, isDarkMode: boolean) => {
  const { colors } = theme || {};

  return StyleSheet.create<Style>({
    text: {
      color: isDarkMode ? colors.white : colors.black,
      fontSize: 14,
      lineHeight: 20,
      fontFamily: fonts.sfPro.medium,
    },
    title: {
      fontSize: 24,
      lineHeight: 36,
      fontFamily: fonts.sfPro.bold,
    },
    h1: {
      fontSize: 18,
      lineHeight: 28,
      fontFamily: fonts.sfPro.bold,
    },
    h2: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.sfPro.bold,
    },
    h3: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: fonts.sfPro.medium,
    },
    body1: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: fonts.sfPro.bold,
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: fonts.sfPro.bold,
    },
    caption: {
      fontSize: 12,
      lineHeight: 20,
      fontFamily: fonts.sfPro.medium,
    },
    center: {
      textAlign: "center",
    },
    right: {
      textAlign: "right",
    },
  });
};
