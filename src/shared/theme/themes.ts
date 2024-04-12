import type { ExtendedTheme } from "@react-navigation/native";
import { DefaultTheme } from "@react-navigation/native";

export const colors = {
  primary: "#643FDB",
  secondary: "#FF8A00",
  white: "#FFF",
  black: "#000",
  neutral: {
    neutral1: "#1C1243",
    neutral2: "#A29EB6",
    neutral3: "#EFF1F3",
    neutral4: "#FFFFFF",
  },
  semantic: {
    red: "#FF6A5D",
    green: "#47C272",
  },
  overlay: {
    pink: "#E15A93",
    pink2: "#F4D8E8",
    red: "#FF6A5D",
    red2: "#FFD7D4",
    purple: "#B37BE7",
    green2: "#DEEDED",
    yellow2: "#FFE7CC",
  },
};

export const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
    bottomTabBackground: colors.white,
    inActiveBottomTabIconColor: colors.neutral.neutral2,
    activeBottomTabIconColor: colors.primary,
  },
};

export const DarkTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    bottomTabBackground: colors.primary,
    activeBottomTabIconColor: colors.white,
  },
};
