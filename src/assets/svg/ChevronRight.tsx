import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ChevronRight(props: any) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.492 20.658L19.15 14l-6.658-6.658-1.65 1.65L15.85 14l-5.008 5.009 1.65 1.65z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ChevronRight;
