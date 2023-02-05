import React, { ChangeEvent } from 'react'
import styles from './Input.module.scss'

export type InputProps = {
  value: string
  name: string
  type?: 'text' | 'password' | 'phone'
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}
export function Input({ value, handleChange, name, type = 'text', disabled }: InputProps) {
  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      disabled={disabled}
    />
  )
}
