import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { colors } from "@theme/themes";

function Forward({ color = colors.primary }: { color?: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.5 7l5 5-5 5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Forward;
