import React from "react";
import ThemeProvider from "@contexts/themeContext";
import NavigationContainer from "@navigators/NavigationContainer";
import RootNavigator from "@navigators/RootNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
