import React, { useEffect } from "react";
import { View } from "react-native";

import Text from "@shared-components/text-wrapper/TextWrapper";
import { NAVIGATION_SCREENS } from "@shared-constants";
import useStyle from "hooks/useStyle";

import createStyles from "./LoadingScreen.style";

const LoadingScreen: React.FC<any> = ({ navigation }) => {
  const {
    styles,
    theme: { colors },
  } = useStyle(createStyles);

  const navigateToMainStack = () => {
    navigation.navigate(NAVIGATION_SCREENS.MAIN);
  };

  useEffect(() => {
    setTimeout(navigateToMainStack, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Loading
      </Text>
    </View>
  );
};

export default LoadingScreen;
