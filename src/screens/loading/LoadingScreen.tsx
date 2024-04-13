import React, { useEffect } from "react";
import { View } from "react-native";
import { useMMKVStorage } from "react-native-mmkv-storage";

import { NAVIGATION_SCREENS } from "@shared-constants";
import useStyle from "hooks/useStyle";
import LocalStorage from "@services/storage";

import createStyles from "./LoadingScreen.style";
import { Logo } from "assets/svg";

const LoadingScreen: React.FC<any> = ({ navigation }) => {
  const { styles } = useStyle(createStyles);

  const [isFirstOpen] = useMMKVStorage<boolean>(
    "firstOpenApp",
    LocalStorage,
    true,
  );

  const checkFirstOpen = () => {
    if (isFirstOpen) return navigation.replace(NAVIGATION_SCREENS.ONBOARDING);

    navigation.replace(NAVIGATION_SCREENS.MAIN);
  };

  useEffect(() => {
    checkFirstOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default LoadingScreen;
