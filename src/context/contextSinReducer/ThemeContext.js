import {createContext, useState} from 'react';

const initialTheme = "light";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState(initialTheme);


    function handleTheme(e) {
        if (e.target.value === "light") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      }

      const data={theme,handleTheme}
    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

