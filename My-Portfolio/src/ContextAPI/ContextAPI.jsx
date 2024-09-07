import { createContext, useState } from "react";

// for Theme change light and dark Mode
export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [themeChange, setThemeChange] = useState(true)
    return <ThemeContext.Provider value={{themeChange, setThemeChange}}>{children}</ThemeContext.Provider>
}

// for different color change

export const ColorChangeContext = createContext()

export const ColorChangeContextProvider = ({children}) => {
    const color = [
        "#ff014f",
        "#c4096a",
        "#64ce23",
        "#ec1839",
        "#bc06b6",
        "#d4d119",
        "#f021b2",
        "#fa5b0f",
        "#37b182",
        "#49bdf3",
        "#1854b4",
    ]
    return <ColorChangeContext.Provider value={{color}}>{children}</ColorChangeContext.Provider>
}