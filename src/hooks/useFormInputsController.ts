import { ChangeEvent, useState } from 'react'

export type FormState = Record<string, string>
export default function useFormInputsController(
  formInitialState: FormState,
): [FormState, (event: ChangeEvent<HTMLInputElement>) => void] {
  const [formData, setFormData] = useState(formInitialState)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }
  return [formData, handleChange]
}
