import React, { useContext } from "react";
import { ColorSchemeName, TouchableOpacity, View } from "react-native";

import Text from "@shared-components/text-wrapper/TextWrapper";
import useStyle from "hooks/useStyle";
import createStyles from "./SettingScreen.style";
import { ThemeContext } from "contexts";

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
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Setting
      </Text>
      {["system", "dark", "light"].map((e: any) => renderSchemeOption(e))}
    </View>
  );
};

export default ProfileScreen;
