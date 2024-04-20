import useThemeContext from "@hooks/useThemeContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@screens/HomeScreen";
import SettingsScreen from "@screens/SettingsScreen";
import React from "react";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { colors } = useThemeContext();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.backgrounds.default },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
