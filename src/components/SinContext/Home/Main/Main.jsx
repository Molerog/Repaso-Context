import React from 'react';

export const Main = ({theme,texts,auth})=>{
    return(
        <div className={theme}>
            <p>{auth? texts.welcome :texts.greeting}</p>
            <p>{texts.mainText}</p>
        </div>
    )
}