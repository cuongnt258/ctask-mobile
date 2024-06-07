import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;

  return StyleSheet.create<Style>({
    container: {
      width: "100%",
      height: 24,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    divider: {
      flex: 1,
      height: 2,
      backgroundColor: colors.neutral.neutral3,
    },
    text: {
      marginHorizontal: 16,
      alignSelf: "center",
      textAlignVertical: "center",
    },
  });
};
