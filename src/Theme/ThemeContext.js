import {createContext,useState,useEffect} from 'react'

const themes = {
    dark: {
      backgroundColor: "hsl(235, 21%, 11%)",
      color: "hsl(0, 0%, 98%)",
    },
    light: {
      backgroundColor: "hsl(0, 0%, 98%)",
      color: "black",
    },
  };
  
  export const ThemeContext = createContext();
  
  export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => {
      localStorage.setItem("isDark", JSON.stringify(!isDark));
      setIsDark(!isDark);
    };
    const theme = isDark ? themes.dark : themes.light;
  
    useEffect(() => {
      const isDark = localStorage.getItem("isDark") === "true";
      setIsDark(isDark);
    }, []);
  
    return (
      <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
        {children}
      </ThemeContext.Provider>
    );
  };
