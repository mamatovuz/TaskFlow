import './Login.css'
import { Link } from 'react-router-dom'
import Logo from '../Dashboard/TaskFlow_logosi_dizayni-removebg-preview.png'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase' 

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)

      alert("Muvaffaqiyatli kirdingiz!")

     
      window.location.href = "/dashboard"

    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <section className="login-page">
      <div className="login-brand">
        <h1>TaskFlow</h1>
      </div>

      <h1 className="login-title">Log in to your account</h1>
      <p className="login-subtitle">Welcome back! Please enter your details.</p>

      <form className="login-form" onSubmit={handleLogin}>

      
        <label className="login-field">
          <input 
            type="email" 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="login-field">
          <input 
            type="password" 
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="login-submit">
          Sign in
        </button>
      </form>

      <p className="login-footer-text">
        Don&apos;t have an account?{' '}
        <Link className="login-link" to="/signup">
          Sign up
        </Link>
      </p>
    </section>
  )
}

export default Login