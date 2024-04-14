import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import SignUpScreen from "@screens/signup/SignUpScreen";

import { AUTH_SCREENS } from "@shared-constants";
import SignInScreen from "@screens/signIn/SignInScreen";

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      <Stack.Screen name={AUTH_SCREENS.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={AUTH_SCREENS.SIGN_UP} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
