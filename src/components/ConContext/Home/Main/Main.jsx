import React, { useContext } from "react";
import { GlobalContext } from "../../../../context/contextConReducer/GlobalState";
import { AuthContext } from "../../../../context/contextSinReducer/AuthContext";
import { LanguageContext } from "../../../../context/contextSinReducer/LanguageContext";
import { ThemeContext } from "../../../../context/contextSinReducer/ThemeContext";

export const Main = () => {
  // const { theme } = useContext(ThemeContext);
  // const { texts } = useContext(LanguageContext);
  const {theme,texts} = useContext(GlobalContext);
  const { auth } = useContext(AuthContext);
  return (
    <div className={theme}>
      <p>{auth ? texts.welcome : texts.greeting}</p>
      <p>{texts.mainText}</p>
    </div>
  );
};
