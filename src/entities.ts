export interface User {
  id?: string
  token?: string
  username?: string
  password?: string
  phone?: string
  city?: string
  address?: {
    city?: string
  }
}

export type UserLogin = Required<Pick<User, 'id' | 'token'>>
