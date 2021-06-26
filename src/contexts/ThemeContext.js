import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
    const [key, setKey] = useState(0);
    const color = 
        [
            "#ffca60",
            "#FF60BB",
            "#DBFF60",
            "#FF6085",
            "#60FFBA",
            "#B460FF",
            "#60EFFF",
            "#FF7660",
        ]


    const changeKey = () => {
        let i = key;
        if(key<7)
            i = i+1;
        else
            i = 0
        setKey(i);
    }
    return (
        <ThemeContext.Provider value={{key: key, color: color, changeKey: changeKey}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;


/*
yellow: #ffca60 group 8
pink : #FF60BB group 1
neon: #DBFF60 group 2
red-pink: #FF6085 group 3
aqua: #60FFBA group 4
purple: #B460FF group 5
blue: #60EFFF group 6
orange: #FF7660 group 7
*/
