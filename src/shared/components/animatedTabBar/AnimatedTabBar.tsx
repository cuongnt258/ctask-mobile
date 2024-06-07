import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useStyle from "hooks/useStyle";
import createStyles from "./AnimatedTabBar.styles";
import { MAIN_SCREENS } from "@shared-constants";
import { Chat, Home, Notification, Setting } from "assets/svg/navigation";

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

  const renderTabBarIcon = (route: any, color: string) => {
    switch (route.name) {
      case MAIN_SCREENS.HOME:
        return <Home color={color} />;

      case MAIN_SCREENS.MESSAGE:
        return <Chat color={color} />;

      case MAIN_SCREENS.NOTIFICATION:
        return <Notification color={color} />;

      case MAIN_SCREENS.SETTINGS:
        return <Setting color={color} />;

      default:
        return <Home color={color} />;
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.component}>
      <Animated.View
        style={[styles.iconContainer, animatedIconContainerStyles]}
      >
        {renderTabBarIcon(
          route,
          isActive ? activeBottomTabIconColor : inActiveBottomTabIconColor,
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
    <View style={[styles.tabBar, { marginBottom: bottom || 24 }]}>
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
