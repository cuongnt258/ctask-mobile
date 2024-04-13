import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { isReadyRef, navigationRef } from "react-navigation-helpers";

import LoadingScreen from "@screens/loading/LoadingScreen";
import { NAVIGATION_SCREENS } from "@shared-constants";
import { ThemeContext } from "contexts";
import MainNavigation from "./MainNavigation";
import OnboardingScreen from "@screens/onboarding/OnboardingScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  React.useEffect((): any => {
    return () => (isReadyRef.current = false);
  }, []);

  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      theme={theme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={NAVIGATION_SCREENS.LOADING}
          component={LoadingScreen}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.ONBOARDING}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name={NAVIGATION_SCREENS.MAIN}
          component={MainNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
