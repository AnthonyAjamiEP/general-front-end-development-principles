import { createContext, FC, ReactNode } from "react";

export const AuthContext = createContext({
    isAuth: false,
});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AuthContext.Provider value={{ isAuth: false }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;