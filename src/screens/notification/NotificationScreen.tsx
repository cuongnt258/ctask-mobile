import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";

import AppContainer from "@shared-components/appContainer/AppContainer";
import Text from "@shared-components/text-wrapper/TextWrapper";

import createStyles from "./NotificationScreen.style";

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <AppContainer contentStyle={styles.container}>
      <Text h1 color={colors.text}>
        Notification
      </Text>
    </AppContainer>
  );
};

export default ProfileScreen;
