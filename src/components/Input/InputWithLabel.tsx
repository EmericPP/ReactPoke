import React, { ChangeEvent } from 'react'
import styles from './Input.module.scss'
import { Input, InputProps } from './Input'

type Props = {
  label: string
  name: string
  type?: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
} & InputProps
export function InputWithLabel({ value, handleChange, name, type, label }: Props) {
  return (
    <label className={styles.label} htmlFor={name}>
      <span className={styles.labelText}>{label}</span>
      <Input name={name} type={type} value={value} handleChange={handleChange} />
    </label>
  )
}
