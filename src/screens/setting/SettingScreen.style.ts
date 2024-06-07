import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  schemeButton: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;

  return StyleSheet.create<Style>({
    container: {
      flex: 1,
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
