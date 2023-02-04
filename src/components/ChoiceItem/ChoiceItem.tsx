import React from 'react'
import styles from './ChoiceItem.module.scss'

type Props = {
  selected?: boolean
  handleSelect: () => void
  label: string
}
export function ChoiceItem({ selected, handleSelect, label }: Props) {
  return (
    <button
      onClick={handleSelect}
      className={selected ? styles.selectedChoiceItem : styles.choiceItem}
    >
      {label}
    </button>
  )
}
