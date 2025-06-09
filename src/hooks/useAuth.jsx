// Ini Dummy

import { useState, useContext, createContext } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        // Return mock functions if context not found
        return {
            login: async (credentials) => {
                console.log('Login called with:', credentials)
                // Mock login success
                return { success: true }
            },
            register: async (userData) => {
                console.log('Register called with:', userData)
                // Mock register success
                return { success: true }
            },
            logout: () => {
                console.log('Logout called')
            },
            user: null,
            isAuthenticated: false
        }
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = async (credentials) => {
        try {
            // Mock API call
            console.log('Login attempt:', credentials)
            
            // Simulate API response
            const mockUser = {
                id: 1,
                email: credentials.email,
                role: 'user'
            }
            
            setUser(mockUser)
            setIsAuthenticated(true)
            localStorage.setItem('user', JSON.stringify(mockUser))
            
            return { success: true }
        } catch (error) {
            return { success: false, message: 'Login failed' }
        }
    }

    const register = async (userData) => {
        try {
            // Mock API call
            console.log('Register attempt:', userData)
            
            // Simulate API response
            const mockUser = {
                id: 1,
                email: userData.email,
                role: userData.role || 'user'
            }
            
            setUser(mockUser)
            setIsAuthenticated(true)
            localStorage.setItem('user', JSON.stringify(mockUser))
            
            return { success: true }
        } catch (error) {
            return { success: false, message: 'Registration failed' }
        }
    }

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false)
        localStorage.removeItem('user')
    }

    const value = {
        user,
        isAuthenticated,
        login,
        register,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
