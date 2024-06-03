import {createContext} from 'react'
import { theme } from './src/theme'

type ThemeContextProviderProps = {
  children : React.ReactNode
}
export const ThemeContext = createContext(theme)

export const ThemeContextPovider = ({children}: ThemeContextProviderProps) => {
  return <ThemeContext.Provider value = {theme} >{children}</ThemeContext.Provider>
}
