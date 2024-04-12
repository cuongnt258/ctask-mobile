import { StyleSheet, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  container: ViewStyle;
  schemeButton: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    schemeButton: {
      padding: 8,
      marginTop: 8,
      backgroundColor: colors.primary,
      paddingHorizontal: 15,
      minWidth: 100,
    },
  });
};
