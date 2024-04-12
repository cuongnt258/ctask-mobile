import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { isReadyRef, navigationRef } from "react-navigation-helpers";

import HomeScreen from "@screens/home/HomeScreen";
import NotificationScreen from "@screens/notification/NotificationScreen";
import SettingScreen from "@screens/setting/SettingScreen";
import MessageScreen from "@screens/message/MessageScreen";

import AnimatedTabBar from "@shared-components/animated-tab-bar/AnimatedTabBar";
import { MAIN_SCREENS, NAVIGATION_SCREENS } from "@shared-constants";
import { ThemeContext } from "contexts";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
      })}
      tabBar={(props) => <AnimatedTabBar {...props} />}
    >
      <Tab.Screen name={MAIN_SCREENS.HOME} component={HomeScreen} />
      <Tab.Screen name={MAIN_SCREENS.MESSAGE} component={MessageScreen} />
      <Tab.Screen
        name={MAIN_SCREENS.NOTIFICATION}
        component={NotificationScreen}
      />
      <Tab.Screen name={MAIN_SCREENS.SETTINGS} component={SettingScreen} />
    </Tab.Navigator>
  );
};

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
          name={NAVIGATION_SCREENS.MAIN}
          component={MainNavigation}
        />
        {/* <Stack.Screen name={NAVIGATION_SCREENS.DETAIL}>{(props) => <DetailScreen {...props} />}</Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
