import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  content: ViewStyle;
  imageContainer: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;

  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      paddingHorizontal: 24,
    },
    wrapper: {
      alignItems: "center",
      justifyContent: "flex-end",
      flex: 1,
    },
    imageContainer: {
      marginBottom: 70,
    },
    content: {
      justifyContent: "space-between",
      height: 257,
    },
    textContent: {
      marginHorizontal: 24,
    },
    description: {
      marginTop: 14,
    },
    footer: {
      flexDirection: "row",
      alignItems: "center",
    },
    buttonNext: {
      width: 60,
      height: 60,
      borderRadius: 60,
      backgroundColor: colors.primary,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 13,
    },
  });
};
