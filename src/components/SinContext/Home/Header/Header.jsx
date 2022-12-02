import React from "react";

export const Header = ({theme,handleTheme,handleLanguage,texts,auth,handleAuth}) => {
  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h2>{texts.subtitle}</h2>
      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input type="radio" name="theme" id="light" value="light" onChange={handleTheme}/>
      <label htmlFor="light">{texts.lightTheme}</label>
      <input type="radio" name="theme" id="dark" value="dark" onChange={handleTheme}/>
      <label htmlFor="dark">{texts.darkTheme}</label>
      <button onClick={handleAuth}>
        {auth? texts.buttonLogout : texts.buttonLogin}
        </button>
    </header>
  );
};
