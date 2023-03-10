import { useLocation, useNavigate } from 'react-router-dom'
import styles from './Page.module.scss'
import React, { useState } from 'react'
import { useAuthContext } from '../contexts/authContextManager'
import useFormInputsController from '../hooks/useFormInputsController'
import { Button } from '../components/Button/Button'
import { InputWithLabel } from '../components/Input/InputWithLabel'
import { Panel } from '../components/Panel/Panel'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuthContext()

  const [error, setError] = useState('')

  const [formData, handleChange] = useFormInputsController({
    username: '',
    password: '',
  })

  const from = location.state?.from?.pathname || '/'

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      await auth.signin(formData.username, formData.password)
      navigate(from, { replace: true })
    } catch (e) {
      setError('Une erreur est survenue lors de la connexion')
    }
  }

  return (
    <div className={styles.page}>
      <Panel title='Login'>
        {error && <p>{error}</p>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <InputWithLabel
            label='Username:'
            value={formData.username}
            name='username'
            handleChange={handleChange}
          />
          <InputWithLabel
            label='Password:'
            value={formData.password}
            name='password'
            handleChange={handleChange}
          />
          <Button type='submit' label='Login' />
        </form>
      </Panel>
    </div>
  )
}
