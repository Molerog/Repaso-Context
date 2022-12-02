import { createContext, useReducer } from "react";
import { translations } from "../../components/helpers/translations";
import { appReducer } from "./appReducer";

const theme = JSON.parse(localStorage.getItem('theme'))
const language = JSON.parse(localStorage.getItem('language'))

const initialState = {
  theme: theme? theme :"light",
  language: "es",
  texts: language? translations[language]: translations.es,
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleTheme = (e) => {
    localStorage.setItem('theme',JSON.stringify(e.target.value))
    dispatch({
      type: "THEME",
      payload: e.target.value
    });
  };

  const handleLanguage = (e) => {
    localStorage.setItem('language',JSON.stringify(e.target.value))
    dispatch({
      type: "LANGUAGE",
      payload: e.target.value,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        handleTheme,
        theme: state.theme,
        language: state.language,
        handleLanguage,
        texts:state.texts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
