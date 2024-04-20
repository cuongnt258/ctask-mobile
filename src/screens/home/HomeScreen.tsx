import React from "react";

import useStyle from "hooks/useStyle";

import AppContainer from "@shared-components/appContainer/AppContainer";
import Text from "@shared-components/text-wrapper/TextWrapper";

import createStyles from "./HomeScreen.style";

const HomeScreen: React.FC = () => {
  const {
    styles,
    theme: { colors },
  } = useStyle(createStyles);

  return (
    <AppContainer contentStyle={styles.container}>
      <Text h1 color={colors.text}>
        Home
      </Text>
    </AppContainer>
  );
};

export default HomeScreen;
