import BodyText from "@components/BodyText";
import Heading from "@components/Heading";
import PrimaryButton from "@components/PrimaryButton";
import theme from "@constants/layout";
import useThemeContext from "@hooks/useThemeContext";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { colors } = useThemeContext();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgrounds.default },
      ]}
    >
      <Heading style={styles.heading}>Welcome to the app!</Heading>
      <BodyText style={styles.text}>
        This is a simple app to demonstrate supporting light and dark modes
      </BodyText>

      <PrimaryButton
        accessibilityRole="link"
        onPress={() => navigation.navigate("Settings")}
      >
        Go to settings
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 200,
    paddingHorizontal: theme.gaps.screen.horizontal,
  },
  heading: {
    marginBottom: theme.gaps.g12,
  },
  text: {
    marginBottom: theme.gaps.g24,
  },
});
