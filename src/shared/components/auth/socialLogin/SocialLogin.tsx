import React, { FC } from "react";
import { View, ViewStyle } from "react-native";

import useStyle from "hooks/useStyle";

import { IconButton } from "@shared-components/button";

import { Facebook, Gmail, Instagram } from "assets/svg/auth";
import createStyle from "./SocialLogin.style";

type SocialLoginProps = {
  style?: ViewStyle;
  onLoginSocialSuccess?: (type: string) => void;
};

const SocialLogin: FC<SocialLoginProps> = ({
  style,
  onLoginSocialSuccess = () => {},
}) => {
  const { styles } = useStyle(createStyle);

  const onPressFacebook = () => {
    onLoginSocialSuccess("facebook");
  };

  const onPressGmail = () => {
    onLoginSocialSuccess("gmail");
  };

  const onPressInstagram = () => {
    onLoginSocialSuccess("instagram");
  };

  return (
    <View style={[styles.container, style]}>
      <IconButton icon={<Facebook />} onPress={onPressFacebook} />
      <IconButton
        style={{ marginHorizontal: 16 }}
        icon={<Instagram />}
        onPress={onPressInstagram}
      />
      <IconButton icon={<Gmail />} onPress={onPressGmail} />
    </View>
  );
};

export default SocialLogin;
