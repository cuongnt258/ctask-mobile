import { THEME_STATE } from "constants/storageKeys";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { ColorSchemeName } from "react-native";
import LocalStorage from "@services/localStorage";

type Props = {
  children: ReactNode;
};

export type ThemeContextState = {
  theme: ColorSchemeName;
  setTheme: React.Dispatch<React.SetStateAction<ColorSchemeName>>;
  loading: boolean;
};

export const ThemeContext = React.createContext<ThemeContextState | undefined>(
  undefined,
);

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ColorSchemeName>();
  const [loading, setLoading] = useState(true);

  void LocalStorage.removeItem(THEME_STATE);

  useEffect(() => {
    const load = async () => {
      const storedTheme = (await LocalStorage.getItem(
        THEME_STATE,
      )) as ColorSchemeName;

      setTheme(storedTheme);
      setLoading(false);
    };

    void load();
  }, []);

  useEffect(() => {
    if (theme) {
      void LocalStorage.setItem(THEME_STATE, theme);
    } else {
      void LocalStorage.removeItem(THEME_STATE);
    }
  }, [theme]);

  const contextState = useMemo(
    () => ({ loading, setTheme, theme }),
    [theme, loading],
  );

  if (loading) return null;

  return (
    <ThemeContext.Provider value={contextState}>
      {children}
    </ThemeContext.Provider>
  );
}
