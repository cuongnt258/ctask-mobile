import React, { FC } from "react";
import { View, ViewStyle } from "react-native";

import Text from "@shared-components/text/Text";

import createStyle from "./Or.style";
import useStyle from "hooks/useStyle";

type OrProps = {
  style?: ViewStyle;
  title?: string;
};

const Or: FC<OrProps> = ({ style, title }) => {
  const {
    styles,
    theme: { colors },
  } = useStyle(createStyle);

  const renderTitle = () => {
    if (!title) return null;

    return (
      <Text h3 style={styles.text} color={colors.neutral.neutral2}>
        {title}
      </Text>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.divider} />
      {renderTitle()}
      <View style={styles.divider} />
    </View>
  );
};

export default Or;
