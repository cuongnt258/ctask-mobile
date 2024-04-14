/* eslint-disable max-len */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { colors } from "@theme/themes";

function Gmail({ color = colors.black }: { color?: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5.5 7.5l4.082 3.13c1.147.82 2.688.82 3.835 0L17.5 7.5M2.385 15.151a13.077 13.077 0 010-6.302 7.353 7.353 0 015.546-5.407l.453-.101a14.401 14.401 0 016.232 0l.453.1a7.353 7.353 0 015.546 5.408c.514 2.07.514 4.233 0 6.302a7.353 7.353 0 01-5.546 5.407l-.453.101a14.402 14.402 0 01-6.232 0l-.453-.1a7.353 7.353 0 01-5.546-5.408z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default Gmail;
