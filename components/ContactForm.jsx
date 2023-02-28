import { encode } from '../helpers/encode'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import AriaError from './AriaError'

function ContactForm({ theme }) {
  const router = useRouter()

  const themeStyles = {
    light: {
      formControl: 'form-control bg-white border-black',
      inputLabel: 'input-label',
      sendBtn:
        'btn-lg hover:bg-gray-700 active:bg-gray-900 bg-theme-blue text-white mt-5 self-center border-none max-w-[134px]',
      checkbox: 'css-checkbox',
    },
    dark: {
      formControl: 'form-control',
      inputLabel: 'input-label',
      sendBtn: 'btn-lg mt-5 self-center border-none max-w-[134px]',
      checkbox: 'css-checkbox',
    },
  }

  const styles = themeStyles[theme]

  const [firstNameError, setFirstNameError] = useState([])
  const [lastNameError, setLastNameError] = useState([])
  const [emailError, setEmailError] = useState([])

  function validateNameString(name) {
    // Ensure name only contains letters, spaces, and hyphens
    // and is between 2 and 128 characters long
    const regex = /^[a-zA-Z][a-zA-Z\s\-]{0,126}[a-zA-Z]$/
    return regex.test(name)
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  function validateForm() {
    let isValid = true

    if (!validateFirstNameField()) {
      isValid = false
    }

    if (!validateLastNameField()) {
      isValid = false
    }

    if (!validateEmailField()) {
      isValid = false
    }

    return isValid
  }

  function validateFirstNameField() {
    let firstNameErrors = []
    let isValid = true

    if (!validateNameString(firstName)) {
      firstNameErrors.push(
        'First name must contain at least 2 letters and no special characters'
      )
      isValid = false
    }

    if (firstName === '') {
      firstNameErrors = []
      isValid = true
    }

    setFirstNameError(firstNameErrors)
    return isValid
  }

  function validateLastNameField() {
    let lastNameErrors = []
    let isValid = true

    if (!validateNameString(lastName)) {
      lastNameErrors.push(
        'Last name must contain at least 2 letters and no special characters'
      )
      isValid = false
    }

    if (lastName === '') {
      lastNameErrors = []
      isValid = true
    }

    setLastNameError(lastNameErrors)
    return isValid
  }

  function validateEmailField() {
    let emailErrors = []
    let isValid = true

    if (!validateEmail(email)) {
      emailErrors.push('Please enter a valid email address')
      isValid = false
    }

    if (email === '') {
      emailErrors = []
      isValid = true
    }

    setEmailError(emailErrors)
    return isValid
  }

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    referral: '',
    message: '',
  })

  function handleSubmit(e) {
    const form = e.target
    const isValid = validateForm()

    if (!isValid) {
      e.preventDefault()
      return
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    })
      .then(() => {
        router.push(form.getAttribute('action'))
      })
      .catch((error) => alert(error))

    e.preventDefault()
  }

  function handleChange(e) {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const { firstName, lastName, email, referral, message } = formState

  return (
    <form
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      className="mx-8 pb-[35px] flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <p className="mb-6 italic">Fields with asterisk (*) are required</p>

      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="[ETC] Form Submission" />
      <label className={styles.inputLabel}>
        First Name*
        <input
          className={styles.formControl}
          type="text"
          name="firstName"
          id="first_name"
          value={firstName}
          onBlur={validateFirstNameField}
          onChange={handleChange}
          required
        />
        {firstNameError.length > 0 &&
          firstNameError.map((error) => <AriaError message={error} />)}
      </label>

      <label className={styles.inputLabel}>
        Last Name*
        <input
          className={styles.formControl}
          type="text"
          name="lastName"
          id="last_name"
          value={lastName}
          onBlur={validateLastNameField}
          onChange={handleChange}
          required
        />
        {lastNameError.length > 0 &&
          lastNameError.map((error) => <AriaError message={error} />)}
      </label>
      <label className={styles.inputLabel}>
        Email*
        <input
          className={styles.formControl}
          type="email"
          name="email"
          id="email"
          value={email}
          onBlur={validateEmailField}
          onChange={handleChange}
          required
        />
        {emailError.length > 0 &&
          emailError.map((error) => <AriaError message={error} />)}
      </label>
      <fieldset className="text-lg flex flex-col gap-3 mb-2 mt-2">
        <legend className="font-bold pb-3">
          I&apos;m interested in (click all that apply:)
        </legend>
        <div className="pl-4 flex flex-col gap-3">
          <input
            type="checkbox"
            className="css-checkbox"
            name="AccessPartnerService"
            onChange={handleChange}
            id="acc_partner"
          />
          <label htmlFor="acc_partner">Accessibility Partners Service</label>
          <input
            className="css-checkbox"
            type="checkbox"
            name="customOptions"
            onChange={handleChange}
            id="custom_option"
          />
          <label htmlFor="custom_option">Customized Options</label>
          <input
            className="css-checkbox"
            type="checkbox"
            name="consultingServices"
            onChange={handleChange}
            id="consult_serv"
          />
          <label htmlFor="consult_serv">Consulting Services</label>
        </div>
      </fieldset>
      <label className={styles.inputLabel}>
        How did you learn about us?
        <input
          className={styles.formControl}
          type="text"
          name="referral"
          id="referral"
          value={referral}
          onChange={handleChange}
        />
      </label>

      <label className={styles.inputLabel}>
        Comment/Message
        <textarea
          className={styles.formControl + ' h-full'}
          name="message"
          id="message"
          rows="4"
          value={message}
          onChange={handleChange}
        ></textarea>
      </label>

      <button className={styles.sendBtn} type="submit">
        Send
      </button>
    </form>
  )
}

export default ContactForm
