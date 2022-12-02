import React, { useState } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = null;
const translations = {
  es: {
    headerTitle: "Mi aplicación sin context",
    subtitle: "Mi cabecera",
    lightTheme: "Claro",
    darkTheme: "Oscuro",
    greeting: "Hola invitad@",
    welcome: "bienvenido usuari@",
    mainText: "Este es mi contenido principal",
    footerText: "Este es el contenido de mi footer",
    buttonLogin: "iniciar sesión",
    buttonLogout: "cerrar sesión",
  },
  en: {
    headerTitle: "My application without context",
    subtitle: "My header",
    lightTheme: "Light",
    darkTheme: "Dark",
    greeting: "Hello guest",
    welcome: "welcome user",
    mainText: "This is my main content",
    footerText: "This is my footer´s content",
    buttonLogin: "Login",
    buttonLogout: "Logout",
  },
};
export const Home = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  function handleTheme(e) {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  function handleLanguage(e) {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  }

  function handleAuth() {
    if (auth === null) {
      setAuth(true);
    } else {
      setAuth(null);
    }
  }
  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        handleLanguage={handleLanguage}
        texts={texts}
        handleAuth={handleAuth}
        auth={auth}
      />
      <Main texts={texts} theme={theme} auth={auth} />
      <Footer texts={texts} theme={theme} />
    </div>
  );
};
