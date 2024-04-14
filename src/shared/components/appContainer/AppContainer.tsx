import React, { ReactNode } from "react";
import { SafeAreaView, ScrollView, View, ViewStyle } from "react-native";

import useStyle from "hooks/useStyle";

import createStyles from "./AppContainer.style";

type AppContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
  isSafeArea?: boolean;
  title?: ReactNode;
  isScrollView?: boolean;
};

const AppContainer: React.FC<AppContainerProps> = ({
  title,
  children,
  style,
  contentStyle,
  isSafeArea = false,
  isScrollView = false,

  ...props
}) => {
  const { styles } = useStyle(createStyles);

  const renderContent = () => {
    if (isScrollView) {
      return (
        <ScrollView
          bounces={false}
          contentContainerStyle={[styles.content, contentStyle]}
        >
          {children}
        </ScrollView>
      );
    }

    return <View style={[styles.content, contentStyle]}>{children}</View>;
  };

  if (isSafeArea) {
    return (
      <SafeAreaView style={[styles.container, style]} {...props}>
        {title}
        {renderContent()}
      </SafeAreaView>
    );
  }

  return (
    <View style={[styles.container, style]} {...props}>
      {title}
      {renderContent()}
    </View>
  );
};

export default AppContainer;
