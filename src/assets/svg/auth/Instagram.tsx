/* eslint-disable max-len */
import * as React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

import { colors } from "@theme/themes";

function Instagram({ color = colors.black }: { color?: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3.353 8.95A7.511 7.511 0 018.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 015.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 01-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 01-5.597-5.597 13.354 13.354 0 010-6.1z"
        stroke={color}
        strokeWidth={1.5}
      />
      <Rect
        x={9}
        y={9}
        width={6}
        height={6}
        rx={3}
        stroke={color}
        strokeWidth={1.5}
      />
      <Circle cx={16} cy={7} r={1} fill={color} />
    </Svg>
  );
}

export default Instagram;
