import React from "react";
import { LogBox } from "react-native";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";

/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";
import { ThemeProvider } from "contexts/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

LogBox.ignoreAllLogs();

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
