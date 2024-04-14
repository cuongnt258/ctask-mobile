import { StyleSheet, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  containerSpaceBetween: ViewStyle;
  leftContainer: ViewStyle;
  textContainer: ViewStyle;
  textContainerCenter: ViewStyle;
  rightContainer: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    container: {
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      justifyContent: "center",
      paddingHorizontal: 24,
    },
    containerSpaceBetween: {
      justifyContent: "space-between",
    },
    leftContainer: {
      zIndex: 1,
    },
    textContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
    },
    textContainerCenter: {
      position: "absolute",
      width: "100%",
      flex: 0,
      left: 24,
    },

    rightContainer: {
      zIndex: 1,
    },
  });
};
