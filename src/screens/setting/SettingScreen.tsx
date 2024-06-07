import React, { useContext } from "react";
import { ColorSchemeName, TouchableOpacity } from "react-native";

import { ThemeContext } from "contexts";
import useStyle from "hooks/useStyle";

import AppContainer from "@shared-components/appContainer/AppContainer";
import Text from "@shared-components/text-wrapper/TextWrapper";

import createStyles from "./SettingScreen.style";

const ProfileScreen: React.FC = () => {
  const {
    styles,
    theme: { colors },
  } = useStyle(createStyles);

  const { changeScheme } = useContext(ThemeContext);

  const renderSchemeOption = (schemeName: ColorSchemeName) => {
    const onPress = () => {
      changeScheme(schemeName);
    };

    return (
      <TouchableOpacity
        key={schemeName}
        style={styles.schemeButton}
        onPress={onPress}
      >
        <Text color={colors.white} center>
          {schemeName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <AppContainer contentStyle={styles.container}>
      <Text h1 color={colors.text}>
        Setting
      </Text>
      {["system", "dark", "light"].map((e: any) => renderSchemeOption(e))}
    </AppContainer>
  );
};

export default ProfileScreen;
