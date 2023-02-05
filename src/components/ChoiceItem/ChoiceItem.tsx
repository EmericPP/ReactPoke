import React from 'react'
import styles from './ChoiceItem.module.scss'

type Props = {
  selected?: boolean
  handleSelect: (item: string) => void
  label: string
}
export function ChoiceItem({ selected, handleSelect, label }: Props) {
  return (
    <button
      onClick={() => handleSelect(label)}
      className={selected ? styles.selectedChoiceItem : styles.choiceItem}
    >
      {label}
    </button>
  )
}
