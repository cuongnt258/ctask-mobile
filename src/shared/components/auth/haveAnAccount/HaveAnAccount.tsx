import React from "react";
import { View, ViewStyle } from "react-native";

import { colors } from "@theme/themes";
import useStyle from "hooks/useStyle";
import { translations } from "shared/localization";

import { TextButton } from "@shared-components/button";
import Text from "@shared-components/text/Text";

import createStyles from "./HaveAnAccount.style";

type HaveAnAccountProps = {
  onPress?: () => void;
  style?: ViewStyle;
  isSignUp?: boolean;
};

const HaveAnAccount: React.FC<HaveAnAccountProps> = ({
  onPress,
  style,
  isSignUp = false,
}) => {
  const { styles } = useStyle(createStyles);

  return (
    <View style={[styles.container, style]}>
      <Text h2 color={colors.neutral.neutral2}>
        {isSignUp
          ? translations.auth.youDontHaveAnAccount
          : translations.auth.alreadyHaveAnAccount}
      </Text>
      <TextButton
        h2
        color={colors.secondary}
        style={{ marginLeft: 8 }}
        onPress={onPress}
      >
        {isSignUp ? translations.auth.signUp : translations.login}
      </TextButton>
    </View>
  );
};

export default HaveAnAccount;
