import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
}

export default (theme: ExtendedTheme, isDarkMode: boolean) => {
  const { colors } = theme || {};

  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: isDarkMode
        ? colors.neutral.neutral1
        : colors.neutral.neutral4,
    },
  });
};
