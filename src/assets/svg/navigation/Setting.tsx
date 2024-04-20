/* eslint-disable max-len */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { colors } from "@theme/themes";

function Setting({ color = colors.primary }: { color?: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2 19.2a1.8 1.8 0 003.6 0v-1.16c.419-.126.82-.293 1.197-.497l.821.821a1.8 1.8 0 002.546-2.546l-.821-.82c.204-.378.371-.779.496-1.198H19.2a1.8 1.8 0 000-3.6h-1.16a6.264 6.264 0 00-.497-1.197l.821-.821a1.8 1.8 0 00-2.546-2.546l-.82.821a6.262 6.262 0 00-1.198-.496V4.8a1.8 1.8 0 00-3.6 0v1.16c-.419.126-.82.293-1.197.497l-.821-.82a1.8 1.8 0 10-2.546 2.545l.821.82a6.262 6.262 0 00-.496 1.198H4.8a1.8 1.8 0 000 3.6h1.16c.126.419.293.82.497 1.197l-.821.821a1.8 1.8 0 002.546 2.546l.82-.821c.378.204.779.371 1.198.496V19.2zm1.8-4.5a2.7 2.7 0 100-5.4 2.7 2.7 0 000 5.4z"
        fill={color}
      />
    </Svg>
  );
}

export default Setting;
