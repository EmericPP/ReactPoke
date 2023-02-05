import React, { ChangeEvent } from 'react'
import styles from './Input.module.scss'
import { Input, InputProps } from './Input'
import cx from 'classnames'

type Props = {
  label: string
  name: string
  type?: string
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
  className?: string
  disabled?: boolean
} & InputProps
export function InputWithLabel({
  value,
  handleChange,
  name,
  type,
  label,
  className,
  disabled,
}: Props) {
  return (
    <label className={cx(styles.label, className)} htmlFor={name}>
      <span className={styles.labelText}>{label}</span>
      <Input
        name={name}
        type={type}
        value={value}
        handleChange={handleChange}
        disabled={disabled}
      />
    </label>
  )
}
