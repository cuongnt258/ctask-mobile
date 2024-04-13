import { View } from "react-native";
import React, { useMemo } from "react";

import createStyles from "./Slider.style";
import useStyle from "hooks/useStyle";

type SliderProps = {
  step?: number;
  current?: number;
};

const Slider: React.FC<SliderProps> = ({ step = 1, current = 1 }) => {
  const { styles } = useStyle(createStyles);

  const data = useMemo(
    () => Array.from(new Array(step), (_, i) => i + 1),
    [step],
  );

  const renderDot = (e: number) => {
    const isActive = e === current;

    return (
      <View
        style={[
          styles.dot,
          isActive && styles.activeDot,
          e !== data.length && styles.space,
        ]}
      />
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {data.map(renderDot)}
    </View>
  );
};

export default Slider;
