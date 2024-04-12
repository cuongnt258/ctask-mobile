import type { ExtendedTheme } from "@react-navigation/native";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import type { ColorSchemeName } from "react-native";
import { useColorScheme } from "react-native";
import { useMMKVStorage } from "react-native-mmkv-storage";

import LocalStorage from "@services/storage";
import { DarkTheme, LightTheme } from "@theme/themes";

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: (updateDarkMode: boolean) => void;
  changeScheme: (schemeName: ColorSchemeName) => void;
  theme: ExtendedTheme;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleDarkMode: () => {},
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

  const [isDarkMode, setDarkMode] = useState(checkIsDarkMode(localScheme));

  function checkIsDarkMode(schemeName: ColorSchemeName) {
    switch (schemeName) {
      case "dark":
        return true;

      case "light":
        return false;

      default:
        return systemScheme === "dark";
    }
  }

  const toggleDarkMode = (updateDarkMode: boolean) => {
    setDarkMode(updateDarkMode);
  };

  useEffect(() => {
    setDarkMode(checkIsDarkMode(localScheme));
  }, [localScheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        theme: isDarkMode ? DarkTheme : LightTheme,
        toggleDarkMode,
        changeScheme: setLocalScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
