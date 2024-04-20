import React, { useEffect } from "react";
import { useMMKVStorage } from "react-native-mmkv-storage";

import LocalStorage from "@services/storage";
import useStyle from "hooks/useStyle";

import AppContainer from "@shared-components/appContainer/AppContainer";

import { Logo } from "assets/svg";
import createStyles from "./LoadingScreen.style";
import { NAVIGATION_SCREENS } from "@shared-constants";

const LoadingScreen: React.FC<any> = ({ navigation }) => {
  const { styles } = useStyle(createStyles);

  const [isFirstOpen] = useMMKVStorage<boolean>(
    "firstOpenApp",
    LocalStorage,
    true,
  );

  const checkFirstOpen = () => {
    if (isFirstOpen) return navigation.replace(NAVIGATION_SCREENS.ONBOARDING);
    navigation.replace(NAVIGATION_SCREENS.AUTH);
  };

  useEffect(() => {
    checkFirstOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContainer contentStyle={styles.container}>
      <Logo />
    </AppContainer>
  );
};

export default LoadingScreen;
