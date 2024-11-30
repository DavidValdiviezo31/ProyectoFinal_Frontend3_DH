import Layout from '@/layouts/Layout'
import { validateEmail, validateName } from '@/utils/validations'
import { useState } from 'react'
import { toast } from 'sonner'
import styles from './Contact.module.css'

const INITIAL_STATE = {
  name: '',
  email: '',
  message: ''
}

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_STATE)

  function handleChange (e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    const { name, email } = formData
    const validName = validateName(name)
    const validEmail = validateEmail(email)
    if (validName && validEmail) {
      toast.success('Message sent successfully!')
      setFormData(INITIAL_STATE)
    }
  }

  return (
    <Layout>
      <section className={styles.container}>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <legend>
            <h2>Contact Us</h2>
          </legend>
          <fieldset>
            <legend>
              <label htmlFor='name'>Name:</label>
            </legend>
            <input
              type='text'
              id='name'
              name='name'
              onChange={handleChange}
              value={formData.name}
            />
          </fieldset>
          <fieldset>
            <legend>
              <label htmlFor='email'>Email:</label>
            </legend>
            <input
              type='email'
              id='email'
              name='email'
              onChange={handleChange}
              value={formData.email}
            />
          </fieldset>
          <fieldset>
            <legend>
              <label htmlFor='message'>Message:</label>
            </legend>
            <textarea
              id='message'
              name='message'
              onChange={handleChange}
              value={formData.message}
            ></textarea>
          </fieldset>
          <button type='submit'>Send</button>
        </form>
      </section>
    </Layout>
  )
}

export default Contact
