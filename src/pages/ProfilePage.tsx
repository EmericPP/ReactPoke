import React from 'react'
import styles from './Page.module.scss'
import { useAuthContext } from '../contexts/authContextManager'
import useFormInputsController from '../hooks/useFormInputsController'
import { Button } from '../components/Button/Button'
import { Panel } from '../components/Panel/Panel'
import { InputWithLabel } from '../components/Input/InputWithLabel'

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
    <section className={styles.page}>
      <Panel title='Profile'>
        <form className={styles.form} onSubmit={handleSubmit}>
          <InputWithLabel
            label='Username'
            name='username'
            type='text'
            value={formData.username}
            handleChange={handleChange}
            modifier='formList'
          />
          <InputWithLabel
            label='Password'
            name='password'
            type='password'
            value={formData.password}
            handleChange={handleChange}
            modifier='formList'
          />
          <InputWithLabel
            label='Phone'
            name='phone'
            type='phone'
            value={formData.phone}
            handleChange={handleChange}
            modifier='formList'
          />
          <InputWithLabel
            label='city'
            name='city'
            type='text'
            value={formData.city}
            handleChange={handleChange}
            modifier='formList'
          />
          <Button type='submit' label='Modifier' />
        </form>
      </Panel>
    </section>
  )
}
