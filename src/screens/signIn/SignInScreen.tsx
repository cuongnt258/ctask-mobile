import React from "react";
import { View } from "react-native";

import { AUTH_SCREENS, NAVIGATION_SCREENS } from "@shared-constants";
import { translations } from "shared/localization";

import AppContainer from "@shared-components/appContainer/AppContainer";
import { HaveAnAccount, Or, SocialLogin } from "@shared-components/auth";
import Button, { TextButton } from "@shared-components/button";
import Input from "@shared-components/input/Input";
import Title from "@shared-components/title/Title";

import SignInUp from "assets/svg/auth/SignInUp";
import useStyle from "hooks/useStyle";

import createStyles from "./SignInScreen.style";

const SignInScreen = ({ navigation }: any) => {
  const { styles } = useStyle(createStyles);

  const onPressForgotPassword = () => {
    navigation.navigate(AUTH_SCREENS.FORGOT_PASSWORD);
  };

  const onPressSignIn = () => {
    navigation.navigate(NAVIGATION_SCREENS.MAIN);
  };

  const onPressSignUp = () => {
    navigation.navigate(AUTH_SCREENS.SIGN_UP);
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
        text={translations.auth.signIn}
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
        <TextButton
          h3
          right
          style={styles.forgotPassword}
          onPress={onPressForgotPassword}
        >
          {translations.auth.forgotPasswordQ}
        </TextButton>
        <Button
          style={styles.signInButton}
          title={translations.auth.signIn}
          onPress={onPressSignIn}
        />
        <Or style={styles.or} title={translations.auth.orSignInWith} />
        <SocialLogin
          style={styles.socialButton}
          onLoginSocialSuccess={onLoginSocialSuccess}
        />
      </View>
      <HaveAnAccount isSignUp onPress={onPressSignUp} />
    </AppContainer>
  );
};

export default SignInScreen;
