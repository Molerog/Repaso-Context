import React, { useContext } from 'react';
import { GlobalContext } from '../../../../context/contextConReducer/GlobalState';
// import { LanguageContext } from '../../../../context/contextSinReducer/LanguageContext';
// import { ThemeContext } from '../../../../context/contextSinReducer/ThemeContext';

export const Footer = ()=>{
    // const {theme} = useContext(ThemeContext);
    // const {texts} = useContext(LanguageContext);
    const {texts,theme} = useContext(GlobalContext)
    return(
        <div  className={theme}>
            <p>{texts.footerText}</p>
        </div>
    )
}