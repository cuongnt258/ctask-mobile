import { ThemeContext } from "contexts";
import { useContext, useMemo } from "react";

const useStyle = (createStyles: any) => {
  const { theme, isDarkMode } = useContext(ThemeContext);

  const styles = useMemo(
    () => (createStyles ? createStyles(theme, isDarkMode) : {}),
    [createStyles, theme, isDarkMode],
  );

  return { styles, theme, isDarkMode };
};

export default useStyle;
