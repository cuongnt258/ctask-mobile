import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme || {};

  return StyleSheet.create<Style>({
    container: {
      backgroundColor: colors.primary,
      height: 48,
      paddingHorizontal: 12,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
    },
    content: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
  });
};
