import React, { createContext, useReducer } from 'react';
import { styleReducer } from "../hooks/styleReducer.js";

export const StyleContext = createContext();

const lightTextColor = "black"
const lightThemeColor = "#F9FFE2"

const initialState = {
    textColor: lightTextColor,
    themeColor: lightThemeColor,
};

export const StyleProvider = ({ children }) => {
    const [state, dispatch] = useReducer(styleReducer, initialState);

    return (
        <StyleContext.Provider value={{ state, dispatch }}>
            {children}
        </StyleContext.Provider>
    );
};
