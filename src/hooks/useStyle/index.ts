import { ThemeContext } from "contexts";
import { useContext, useMemo } from "react";

const useStyle = (createStyles: any) => {
  const { theme, isDarkMode, layout } = useContext(ThemeContext);

  const styles = useMemo(
    () => (createStyles ? createStyles(theme, isDarkMode) : {}),
    [createStyles, theme, isDarkMode],
  );

  return { styles, theme, isDarkMode, layout };
};

export default useStyle;
