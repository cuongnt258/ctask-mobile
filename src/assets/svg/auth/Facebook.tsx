/* eslint-disable max-len */
import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { colors } from "@theme/themes";

function Facebook({ color = colors.black }: { color?: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.844 8.67h-2.306V7.545c0-.195.014-.324.032-.406.018-.084.039-.113.045-.12.002-.002.105-.1.621-.1h1.739s0 0 0 0c.615 0 1.125-.475 1.125-1.07V2.973c0-.594-.51-1.069-1.124-1.07h0L14.394 1.9h0c-1.615 0-2.996.504-3.988 1.467-.987.958-1.505 2.293-1.505 3.853v1.45H7.026c-.616 0-1.126.475-1.126 1.07v3.096c0 .595.51 1.07 1.126 1.07H8.9v7.124c0 .595.51 1.07 1.126 1.07h3.385c.616 0 1.126-.475 1.126-1.07v-7.124h2.314c.616 0 1.126-.475 1.126-1.07 0 0 0 0 0 0l.001-3.096v0c0-.39-.225-.749-.58-.937h0a1.19 1.19 0 00-.555-.133zm-3.746 4.61v7.447H10.34v-7.446c0-.418-.357-.748-.784-.748H7.339v-2.49h2.217c.427 0 .784-.331.784-.748V7.22c0-1.227.39-2.21 1.086-2.888.696-.678 1.707-1.06 2.967-1.06 0 0 0 0 0 0l2.267.004v2.27h-1.424s0 0 0 0c-.485 0-1.222.053-1.696.56-.394.422-.442.978-.442 1.439v1.75c0 .417.357.747.785.747h2.657l-.002 2.491h-2.655c-.427 0-.785.33-.785.748z"
        fill={color}
        stroke={color}
        strokeWidth={0.2}
      />
    </Svg>
  );
}

export default Facebook;
