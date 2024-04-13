import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

import useStyle from "hooks/useStyle";

import createStyles from "./AppContainer.style";

type AppContainerProps = {
  children: ReactNode;
  style: ViewStyle;
};

const AppContainer: React.FC<AppContainerProps> = ({
  children,
  style,
  ...props
}) => {
  const { styles } = useStyle(createStyles);

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

export default AppContainer;
