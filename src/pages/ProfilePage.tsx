import React from 'react'
import { useAuthContext } from '../contexts/authContextManager'
import useFormInputsController from '../hooks/useFormInputsController'
import { Button } from '../components/Button/Button'
import { Input } from '../components/Input/Input'

export default function ProfilePage() {
  const { user, updateMe } = useAuthContext()

  const [formData, handleChange] = useFormInputsController({
    username: user?.username || '',
    password: user?.password || '',
    phone: user?.phone || '',
    city: user?.address?.city || '',
  })
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (user && user.id) {
      updateMe(user.id, {
        ...formData,
        address: {
          ...user.address,
          city: formData.city,
        },
      })
    }
  }
  return (
    <>
      <h3>Profile</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <Input
            name='username'
            type='text'
            value={formData.username}
            handleChange={handleChange}
          />
        </label>
        <label>
          Password:
          <Input
            name='password'
            type='password'
            value={formData.password}
            handleChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <Input name='phone' type='phone' value={formData.phone} handleChange={handleChange} />
        </label>
        <label>
          City:
          <Input name='city' type='text' value={formData.city} handleChange={handleChange} />
        </label>
        <Button type='submit' label='Modifier' />
      </form>
    </>
  )
}
