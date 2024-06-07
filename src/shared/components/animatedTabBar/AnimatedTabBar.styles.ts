import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  tabBar: ViewStyle;
  tabBarContainer: ViewStyle;
  component: ViewStyle;
  iconContainer: ViewStyle;
  icon: ViewStyle;
  activeDot: ViewStyle;
}

export default (theme: ExtendedTheme, isDarkMode: boolean) => {
  const { colors, styles } = theme || {};

  return StyleSheet.create<Style>({
    tabBar: {
      backgroundColor: colors.bottomTabBackground,
      borderRadius: 16,
      position: "absolute",
      bottom: 0,
      left: 16,
      right: 16,
      height: 64,
      ...styles.shadow,
    },
    tabBarContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    component: {
      height: 64,
      width: 64,
    },
    iconContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      height: 36,
      width: 36,
    },
    activeDot: {
      width: 6,
      height: 6,
      borderRadius: 6,
      backgroundColor: isDarkMode ? colors.secondary : colors.primary,
      marginTop: 8,
    },
  });
};
