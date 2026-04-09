import './Register.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.js'

function Register() {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    if (password !== confirm) {
      alert("Parollar mos emas!")
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)

      // Avatar URL yaratish
      const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        fullName
      )}&background=0D0D0D&color=00BFFF&size=128`

      localStorage.setItem('fullName', fullName)
      localStorage.setItem('phone', phone)
      localStorage.setItem('email', email)
      localStorage.setItem('avatar', avatar)

      alert("Account yaratildi!")
      window.location.href = "/dashboard"
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <section className="register-page">
      <div className="register-brand">
        <h1>TaskFlow</h1>
      </div>

      <h1 className="register-title">Create an account</h1>
      <p className="register-subtitle">Start your planning today</p>

      <form className="register-form" onSubmit={handleRegister}>
        <label className="register-field register-field-filled">
          <span className="register-field-label">Full Name</span>
          <input
            type="text"
            placeholder='Full Name'
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>

        <label className="register-field register-field-active">
          <span className="register-field-label">Phone Number</span>
          <input
            type="tel"
            placeholder='Phone Number'
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>

        <label className="register-field">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="register-field">
          <input
            type="password"
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label className="register-field">
          <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="register-submit">
          Get Started
        </button>
      </form>

      <p className="register-footer-text">
        Already have an account?{' '}
        <Link className="register-link" to="/login">
          Log in
        </Link>
      </p>
    </section>
  )
}

export default Register