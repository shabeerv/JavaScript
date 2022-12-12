import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

export const ThemecontextProvider = ( {children}: ThemeContextProviderProps ) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}