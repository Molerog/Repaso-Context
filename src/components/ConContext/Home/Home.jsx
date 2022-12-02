import { GlobalProvider } from "../../../context/contextConReducer/GlobalState";
import { AuthProvider } from "../../../context/contextSinReducer/AuthContext";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";

export const Home = () => {
  return (
    <div className="my-page">
      <GlobalProvider>
      {/* <ThemeProvider> */}
        {/* <LanguageProvider> */}
          <AuthProvider>
          <Header />
          <Main />
          <Footer />
          </AuthProvider>
        {/* </LanguageProvider> */}
      {/* </ThemeProvider> */}
      </GlobalProvider>
    </div>
  );
};
