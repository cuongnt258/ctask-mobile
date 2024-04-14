import React, { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";

import useStyle from "hooks/useStyle";

import AddButton from "@shared-components/button/addButton/AddButton";
import Text from "@shared-components/text/Text";

import { Forward, Backward } from "assets/svg";
import createStyles from "./Title.style";
import { useNavigation } from "@react-navigation/native";

interface TitleProps {
  text?: string;
  textType?: "title" | "h1" | "h2";
  isCenter?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  textRightIcon?: ReactNode;
  leftType?: "back";
  rightType?: "add" | "forward" | "dropdown";
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const Title: React.FC<TitleProps> = ({
  isCenter = false,
  leftIcon,
  rightIcon,
  textRightIcon,
  leftType,
  rightType,
  onPressLeft,
  onPressRight,
  textType = "h1",
  text = "",
}) => {
  const navigation = useNavigation();

  const {
    styles,
    theme: { colors },
    isDarkMode,
  } = useStyle(createStyles);

  const handlePressLeft = () => {
    if (onPressLeft) return onPressLeft();
    if (leftType === "back") return navigation.goBack();
  };

  const renderLeft = () => {
    if (leftIcon) return leftIcon;

    switch (leftType) {
      case "back":
        return (
          <TouchableOpacity
            disabled={leftType !== "back" && !handlePressLeft}
            onPress={handlePressLeft}
            style={styles.leftContainer}
          >
            <Backward color={isDarkMode ? colors.white : colors.primary} />
          </TouchableOpacity>
        );

      default:
        return null;
    }
  };

  const renderText = () => {
    if (!text) return null;

    return (
      <View
        style={[styles.textContainer, isCenter && styles.textContainerCenter]}
      >
        <Text
          style={isCenter && styles.textCenter}
          center={isCenter}
          {...{ [textType]: true }}
          color={isDarkMode ? colors.white : colors.black}
        >
          {text}
        </Text>
        {textRightIcon}
      </View>
    );
  };

  const renderRight = () => {
    if (rightIcon) return rightIcon;

    switch (rightType) {
      case "add":
        return (
          <AddButton
            color={isDarkMode ? colors.secondary : colors.primary}
            onPress={onPressRight}
          />
        );

      case "forward":
        return (
          <TouchableOpacity disabled={!onPressRight} onPress={onPressRight}>
            <Forward color={colors.white} />
          </TouchableOpacity>
        );

      case "dropdown":
        return (
          <TouchableOpacity disabled={!onPressRight} onPress={onPressRight}>
            <Forward color={colors.white} />
          </TouchableOpacity>
        );

      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, isCenter && styles.containerSpaceBetween]}>
      {renderLeft()}
      {renderText()}
      {renderRight()}
    </View>
  );
};

export default Title;
