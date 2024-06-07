import React from "react";
import { View } from "react-native";

import { AUTH_SCREENS, NAVIGATION_SCREENS } from "@shared-constants";
import { translations } from "shared/localization";

import AppContainer from "@shared-components/appContainer/AppContainer";
import { HaveAnAccount, Or, SocialLogin } from "@shared-components/auth";
import Button from "@shared-components/button";
import Input from "@shared-components/input/Input";
import Title from "@shared-components/title/Title";

import SignInUp from "assets/svg/auth/SignInUp";
import useStyle from "hooks/useStyle";

import createStyles from "./SignUpScreen.style";

const SignUpScreen = ({ navigation }: any) => {
  const { styles } = useStyle(createStyles);

  const onPressLogin = () => {
    navigation.navigate(AUTH_SCREENS.SIGN_IN);
  };

  const onPressSignUp = () => {
    navigation.navigate(NAVIGATION_SCREENS.MAIN);
  };

  const onLoginSocialSuccess = () => {
    //
  };

  return (
    <AppContainer
      isSafeArea
      contentStyle={styles.container}
      title={<Title isCenter leftType="back" />}
      isScrollView
    >
      <Title
        textType="title"
        text={translations.auth.signUp}
        isCenter
        textRightIcon={
          <View>
            <View style={{ position: "absolute", left: 5, bottom: 7 }}>
              <SignInUp />
            </View>
          </View>
        }
      />
      <View style={{ marginTop: 40, flex: 1 }}>
        <Input placeholder={translations.auth.username} />
        <Input style={styles.input} placeholder={translations.auth.password} />
        <Input
          style={styles.input}
          placeholder={translations.auth.confirmPassword}
        />
        <Button
          style={styles.signUpButton}
          title={translations.auth.signUp}
          onPress={onPressSignUp}
        />
        <Or style={styles.or} title={translations.auth.orSignUpWith} />
        <SocialLogin
          style={styles.socialButton}
          onLoginSocialSuccess={onLoginSocialSuccess}
        />
      </View>
      <HaveAnAccount onPress={onPressLogin} />
    </AppContainer>
  );
};

export default SignUpScreen;
