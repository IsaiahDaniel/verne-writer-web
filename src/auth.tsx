import { ReactNode, createContext, useContext, useState } from 'react';
import { clearAuth, getToken, getUser } from './services/AuthService'
const AuthContext = createContext(null)

type Props = {
        children: ReactNode
}
export const AuthProvider = ({ children }: Props) => {
        const [user, setUser] = useState(getUser())
        const [token, setToken] = useState(getToken())

        const login = (user: any, token: any) => {
                setToken(token)
                setUser(user)
        }

        const signup = (user: any) => {
                //dispatch(signupAction(user.phone, user.password))
                setUser(user)
        }

        const logout = () => {
                clearAuth();
                setUser(null)
        }

        return (
                <AuthContext.Provider value={{...user, token, signup, login, logout}} >
                        {children}
                </AuthContext.Provider>
        )
} 

export const useAuth = () => {
        return useContext(AuthContext)
}