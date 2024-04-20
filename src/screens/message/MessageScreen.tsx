import React from "react";

import useStyle from "hooks/useStyle";
import Text from "@shared-components/text-wrapper/TextWrapper";
import AppContainer from "@shared-components/appContainer/AppContainer";

import createStyles from "./MessageScreen.style";

const MessageScreen: React.FC = () => {
  const {
    styles,
    theme: { colors },
  } = useStyle(createStyles);

  return (
    <AppContainer contentStyle={styles.container}>
      <Text h1 color={colors.text}>
        Message
      </Text>
    </AppContainer>
  );
};

export default MessageScreen;
