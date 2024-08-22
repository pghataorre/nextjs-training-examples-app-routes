'use client';
import { createContext, useContext } from "react";

type TThemeContext = {
  colors: {
    primary: string;
    secondary: string;
  },
  testAction: () => void;
}

interface IThemeProviderProps {
  children: React.ReactNode
}

const defaultValues: TThemeContext = {
  colors: {
    primary: '#007bff',
    secondary: '#6c7d57d',
  },
  testAction: () => alert('this is a test from th theme provider'),
}

const ThemeContext = createContext<TThemeContext>(defaultValues);

const ThemeProvider = ({children}: IThemeProviderProps) => {

  return (
    <ThemeContext.Provider value={defaultValues}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;