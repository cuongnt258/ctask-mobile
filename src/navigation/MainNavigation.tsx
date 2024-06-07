import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import HomeScreen from "@screens/home/HomeScreen";
import MessageScreen from "@screens/message/MessageScreen";
import NotificationScreen from "@screens/notification/NotificationScreen";
import SettingScreen from "@screens/setting/SettingScreen";

import AnimatedTabBar from "@shared-components/animatedTabBar/AnimatedTabBar";
import { MAIN_SCREENS } from "@shared-constants";

const Tab = createBottomTabNavigator();
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

export default MainNavigation;
