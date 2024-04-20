import theme from "@constants/layout";
import useThemeContext from "@hooks/useThemeContext";
import React from "react";
import {
  AccessibilityRole,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import BodyText from "./BodyText";

type Props = TouchableOpacityProps & {
  accessibilityRole: AccessibilityRole;
};

export default function PrimaryButton({ children, style, ...props }: Props) {
  const { colors } = useThemeContext();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors.backgrounds.primary },
        style,
      ]}
      {...props}
    >
      {typeof children === "string" ? (
        <BodyText style={[styles.text, { color: colors.textLight }]}>
          {children}
        </BodyText>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.radius.default,
    paddingHorizontal: theme.gaps.button.horizontal,
    paddingVertical: theme.gaps.button.vertical,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 21,
  },
});
