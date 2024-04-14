import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme || {};

  return StyleSheet.create<Style>({
    container: {
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      backgroundColor: colors.neutral.neutral3,
    },
  });
};
