import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
}

export default (theme: ExtendedTheme, isDarkMode: boolean) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      paddingHorizontal: 24,
    },
    input: {
      marginTop: 24,
    },
    signInButton: {
      marginTop: 24,
    },
    or: {
      marginTop: 24,
    },
    socialButton: {
      marginTop: 16,
    },
    forgotPassword: {
      marginTop: 16,
      color: isDarkMode ? colors.neutral.neutral4 : colors.neutral.neutral1,
    },
  });
};
