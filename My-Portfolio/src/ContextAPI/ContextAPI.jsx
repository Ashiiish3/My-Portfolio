import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [themeChange, setThemeChange] = useState(true)
    return <ThemeContext.Provider value={{themeChange, setThemeChange}}>{children}</ThemeContext.Provider>
}