import type { ExtendedTheme } from "@react-navigation/native";
import React, { ReactNode, createContext, useEffect, useMemo } from "react";
import type { ColorSchemeName } from "react-native";
import { StatusBar, useColorScheme } from "react-native";
import { useMMKVStorage } from "react-native-mmkv-storage";

import LocalStorage from "@services/storage";
import { DarkTheme, LightTheme } from "@theme/themes";
import { isAndroid } from "@freakycoder/react-native-helpers";

interface ThemeContextProps {
  isDarkMode: boolean;
  changeScheme: (schemeName: ColorSchemeName) => void;
  theme: ExtendedTheme;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  changeScheme: () => {},
  theme: LightTheme,
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemScheme = useColorScheme();

  const [localScheme, setLocalScheme] = useMMKVStorage<ColorSchemeName>(
    "scheme",
    LocalStorage,
    systemScheme,
  );

  const isDarkMode = useMemo(() => {
    switch (localScheme) {
      case "dark":
        return true;

      case "light":
        return false;

      default:
        return systemScheme === "dark";
    }
  }, [localScheme, systemScheme]);

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");

    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        theme: isDarkMode ? DarkTheme : LightTheme,
        changeScheme: setLocalScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
