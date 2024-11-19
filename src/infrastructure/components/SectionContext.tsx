import React, { createContext, ReactNode, useContext, useState } from "react"



interface AuthContextType{
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    emailError: string,
    setEmailError: React.Dispatch<React.SetStateAction<string>>;
    token: string | null,
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

interface AuthProviderProps{
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SectionContext: React.FC<AuthProviderProps> = ({children}) =>{

const [loading, setLoading] = useState(false);
const  [emailError, setEmailError] = useState<string>("");
const  [token, setToken] = useState<string | null>("");
    
    return(
        <AuthContext.Provider value={{token, setToken,emailError, setEmailError,loading , setLoading}}>
            {children}
        </AuthContext.Provider>

    )
};

export const useAuth = (): AuthContextType =>{
    const context = useContext(AuthContext);
    if (!context){
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;

}

export{AuthContext, SectionContext}
