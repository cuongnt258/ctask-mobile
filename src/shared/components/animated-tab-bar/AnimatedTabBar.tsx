import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useStyle from "hooks/useStyle";
import createStyles from "./AnimatedTabBar.styles";
import { MAIN_SCREENS } from "@shared-constants";

type TabBarComponentProps = {
  isActive?: boolean;
  options: BottomTabNavigationOptions;
  onPress: () => void;
  route: any;
};

const TabBarComponent = ({
  isActive = false,
  onPress,
  route,
}: TabBarComponentProps) => {
  const { styles, theme } = useStyle(createStyles);
  const { inActiveBottomTabIconColor, activeBottomTabIconColor } =
    theme.colors || {};

  const animatedIconContainerStyles = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isActive ? 1 : 0.5, { duration: 250 }),
    };
  });

  const renderTabBarIcon = (
    route: any,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    let iconName = focused ? "home" : "home-outline";

    switch (route.name) {
      case MAIN_SCREENS.HOME:
        iconName = focused ? "home" : "home-outline";
        break;

      case MAIN_SCREENS.MESSAGE:
        iconName = focused ? "chatbox-ellipses" : "chatbox-ellipses-outline";
        break;

      case MAIN_SCREENS.NOTIFICATION:
        iconName = focused ? "notifications" : "notifications-outline";
        break;

      case MAIN_SCREENS.SETTINGS:
        iconName = focused ? "settings" : "settings-outline";
        break;

      default:
        iconName = focused ? "home" : "home-outline";
        break;
    }

    return (
      <Icon
        name={iconName}
        type={IconType.Ionicons}
        size={size}
        color={color}
      />
    );
  };

  return (
    <Pressable onPress={onPress} style={styles.component}>
      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}
      >
        {renderTabBarIcon(
          route,
          isActive,
          isActive ? activeBottomTabIconColor : inActiveBottomTabIconColor,
          24,
        )}
        {isActive && <View style={styles.activeDot} />}
      </Animated.View>
    </Pressable>
  );
};

const AnimatedTabBar = ({
  state: { index: activeIndex, routes },
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();

  const { styles } = useStyle(createStyles);

  return (
    <View style={[styles.tabBar, { marginBottom: bottom }]}>
      <View style={styles.tabBarContainer}>
        {routes.map((route, index) => {
          const isActive = index === activeIndex;
          const { options } = descriptors[route.key];

          return (
            <TabBarComponent
              key={route.key}
              isActive={isActive}
              options={options}
              route={route}
              onPress={() => navigation.navigate(route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default AnimatedTabBar;
