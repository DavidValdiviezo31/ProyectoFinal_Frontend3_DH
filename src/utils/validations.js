import { toast } from 'sonner'

export function validateName (name) {
  const regex = /^(?!\s)[^\s]{3,}$/

  const isValid = regex.test(name)
  if (!isValid) toast.error('Name must be at least 3 characters long')

  return isValid
}

export function validateEmail (email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const isValid = regex.test(email)
  if (!isValid) toast.error('Invalid email address')

  return isValid
}
