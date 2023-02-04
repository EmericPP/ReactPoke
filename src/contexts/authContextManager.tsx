import React, { PropsWithChildren, useEffect } from 'react'
import { axiosInstance, getUser, login, updateUser } from '../services/requests'
import { User } from '../entities'

type UserState = User | null
type SignIn = (username: string, password: string) => void
type UpdateMe = (userId: string, userPayload: User) => void
interface AuthContextType {
  user: UserState
  signin: SignIn
  signout: () => void
  updateMe: UpdateMe
}

export const AuthContext = React.createContext<AuthContextType>(null!)
export function useAuthContext() {
  return React.useContext(AuthContext)
}

export function AuthProvider({ children }: PropsWithChildren) {
  const lsUser: string | null = localStorage.getItem('user')
  const userParsed = lsUser ? JSON.parse(lsUser) : null
  const [user, setUser] = React.useState<UserState>(userParsed)

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res
      },
      (error) => {
        if ([403, 401].includes(error.response.status)) {
          setUser(null)
          localStorage.removeItem('userToken')
          localStorage.removeItem('user')
        }
      },
    )
  }, [])

  const signIn: SignIn = async (username, password) => {
    const { token, id } = await login(username, password)
    localStorage.setItem('userToken', token)
    const user = await getUser(id)
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const signOut = (): void => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('user')
    setUser(null)
  }

  const updateMe: UpdateMe = async (userId, userPayload) => {
    const user = await updateUser(userId, userPayload)
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const value = { user, signin: signIn, signout: signOut, updateMe: updateMe }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
