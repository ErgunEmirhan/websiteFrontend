import { createContext, SetStateAction, useState } from "react";

interface DarkModeContextType {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<SetStateAction<boolean>>;
    
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);


    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};