import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      paddingHorizontal: 24,
    },
    input: {
      marginTop: 24,
    },
    signUpButton: {
      marginTop: 32,
    },
    or: {
      marginTop: 24,
    },
    socialButton: {
      marginTop: 16,
    },
  });
};
