import fonts from "@fonts";
import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
}

export default (theme: ExtendedTheme, isDarkMode: boolean) => {
  const { colors, styles } = theme || {};

  return StyleSheet.create<Style>({
    container: {
      flexDirection: "row",
      height: 48,
      borderRadius: 16,
      borderWidth: 1,
      paddingHorizontal: 24,
      borderColor: isDarkMode
        ? colors.neutral.neutral4
        : colors.neutral.neutral1,
    },
    leftIconContainer: {
      marginRight: 16,
    },
    input: {
      flex: 1,
      fontSize: 16,
      fontFamily: fonts.sfPro.medium,
      color: isDarkMode ? colors.neutral.neutral4 : colors.primary,
    },
  });
};
