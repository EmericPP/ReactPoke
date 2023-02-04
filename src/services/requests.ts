import axios from 'axios'
import { User, UserLogin } from '../entities'

export const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/',
})

axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'userToken',
)}`
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'

axiosInstance.interceptors.request.use(async (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('userToken')}`
  return config
})

export const login = async (username: string, password: string): Promise<UserLogin> => {
  const user = await axiosInstance.post('/auth/login', {
    username: username,
    password: password,
  })
  return user.data
}

export const getUser = async (userId: string) => {
  const user = await axiosInstance.get(`/auth/users/${userId}`)
  return user.data
}

export const updateUser = async (userId: string, formData: User): Promise<User> => {
  const user = await axiosInstance.put(`/auth/users/${userId}`, {
    username: formData.username,
    password: formData.password,
    address: formData.address,
    phone: formData.phone,
  })
  return user.data
}
