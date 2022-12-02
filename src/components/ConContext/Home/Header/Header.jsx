import React,{useContext} from "react";
import { GlobalContext } from "../../../../context/contextConReducer/GlobalState";
import { AuthContext } from "../../../../context/contextSinReducer/AuthContext";
// import { LanguageContext } from "../../../../context/contextSinReducer/LanguageContext";
// import { ThemeContext } from "../../../../context/contextSinReducer/ThemeContext";

export const Header = () => {
  // const {theme, handleTheme} = useContext(ThemeContext)
  // const {texts, handleLanguage} = useContext(LanguageContext);
  const {auth, handleAuth} = useContext(AuthContext);
  const {theme,handleTheme,texts,handleLanguage} = useContext(GlobalContext)
  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h2>{texts.subtitle}</h2>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input type="radio" name="theme" id="light-context" value="light" onChange={handleTheme}/>
      <label htmlFor="light-context">{texts.lightTheme}</label>
      <input type="radio" name="theme" id="dark-context" value="dark" onChange={handleTheme}/>
      <label htmlFor="dark-context">{texts.darkTheme}</label>
      <button onClick={handleAuth}>
        {auth? texts.buttonLogout : texts.buttonLogin}
        </button>
    </header>
  );
};
