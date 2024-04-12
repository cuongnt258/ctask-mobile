import React from "react";
import { View } from "react-native";

import Text from "@shared-components/text-wrapper/TextWrapper";
import useStyle from "hooks/useStyle";
import createStyles from "./MessageScreen.style";

const MessageScreen: React.FC = () => {
  const {
    styles,
    theme: { colors },
  } = useStyle(createStyles);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Setting
      </Text>
    </View>
  );
};

export default MessageScreen;
