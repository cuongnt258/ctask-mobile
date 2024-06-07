import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useStyle from "hooks/useStyle";

import AppContainer from "@shared-components/appContainer/AppContainer";
import Button, { TextButton } from "@shared-components/button";
import Text from "@shared-components/text/Text";

import { Onboarding } from "assets/svg";
import createStyles from "./OnboardingScreen.style";
import { AUTH_SCREENS, NAVIGATION_SCREENS } from "@shared-constants";
import ChevronRight from "assets/svg/ChevronRight";
import Slider from "./components/Slider";
import { translations } from "shared/localization";
import { HaveAnAccount } from "@shared-components/auth";

const OnboardingScreen: React.FC<any> = ({ navigation }) => {
  const {
    styles,
    theme: { colors },
  } = useStyle(createStyles);
  const { bottom } = useSafeAreaInsets();

  const [step, setStep] = useState(1);

  const onPressGetStarted = () => {
    navigation.replace(NAVIGATION_SCREENS.AUTH, {
      screen: AUTH_SCREENS.SIGN_UP,
    });
  };

  const onPressLogin = () => {
    navigation.replace(NAVIGATION_SCREENS.AUTH, {
      screen: AUTH_SCREENS.SIGN_IN,
    });
  };

  const onPressNext = () => {
    setStep(step + 1);
  };

  const onPressSkip = () => {
    navigation.navigate(NAVIGATION_SCREENS.MAIN);
  };

  const renderImage = () => {
    switch (step) {
      case 1:
        return <Onboarding.Onboarding1 />;

      case 2:
        return <Onboarding.Onboarding2 />;

      case 3:
        return <Onboarding.Onboarding3 />;

      default:
        return null;
    }
  };

  const renderText = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.textContent}>
            <Text title center>
              {translations.onboarding.title1}
            </Text>
            <Text
              center
              color={colors.neutral.neutral1}
              colorDark={colors.neutral.neutral4}
              style={styles.description}
            >
              {translations.onboarding.description1}
            </Text>
          </View>
        );

      case 2:
        return (
          <View style={styles.textContent}>
            <Text title center>
              {translations.onboarding.title2}
            </Text>
            <Text
              center
              color={colors.neutral.neutral1}
              colorDark={colors.neutral.neutral4}
              style={styles.description}
            >
              {translations.onboarding.description2}
            </Text>
          </View>
        );

      case 3:
        return (
          <View style={styles.textContent}>
            <Text title center>
              {translations.onboarding.title3}
            </Text>
            <Text
              center
              color={colors.neutral.neutral1}
              colorDark={colors.neutral.neutral4}
              style={styles.description}
            >
              {translations.onboarding.description3}
            </Text>
          </View>
        );

      default:
        return null;
    }
  };

  const renderFooter = () => {
    if (step === 3) {
      return <HaveAnAccount onPressLogin={onPressLogin} />;
    }

    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonNext} onPress={onPressNext}>
          <ChevronRight />
        </TouchableOpacity>
        <TextButton color={colors.neutral.neutral2} onPress={onPressSkip}>
          {translations.skip}
        </TextButton>

        <View style={{ alignItems: "flex-end", flex: 1 }}>
          <Slider step={3} current={step} />
        </View>
      </View>
    );
  };

  return (
    <AppContainer style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageContainer}>{renderImage()}</View>
        <View style={[styles.content, { marginBottom: bottom || 24 }]}>
          {renderText()}
          {step === 3 && (
            <Button
              title={translations.getStarted}
              onPress={onPressGetStarted}
            />
          )}
          {renderFooter()}
        </View>
      </View>
    </AppContainer>
  );
};

export default OnboardingScreen;
