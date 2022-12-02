import React from 'react';

export const Footer = ({theme,texts})=>{
    return(
        <div  className={theme}>
            <p>{texts.footerText}</p>
        </div>
    )
}