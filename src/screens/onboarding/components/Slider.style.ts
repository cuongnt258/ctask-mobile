import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  dot: ViewStyle;
  activeDot: ViewStyle;
  space: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;

  return StyleSheet.create<Style>({
    dot: {
      width: 8,
      height: 8,
      borderRadius: 24,
      backgroundColor: "#D1D8DD",
    },
    activeDot: {
      width: 24,
      backgroundColor: colors.primary,
    },
    space: {
      marginRight: 8,
    },
  });
};
