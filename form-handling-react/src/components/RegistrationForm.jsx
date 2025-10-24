import { useState } from 'react'

export default function RegistrationForm({ onSubmit }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function validate(values) {
    const errs = {}
    if (!values.username) errs.username = 'Username is required'
    if (!values.email) errs.email = 'Email is required'
    if (!values.password) errs.password = 'Password is required'
    return errs
  }

  function handleSubmit(e) {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length === 0) {
      if (onSubmit) onSubmit(form)
      alert('Registered (controlled): ' + JSON.stringify(form))
      setForm({ username: '', email: '', password: '' })
    }
  }

  return (
    <div className="card form-card">
      <h2>Controlled Registration</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label className="form-label">Username</label>
          <input className="form-input" name="username" value={username} onChange={handleChange} />
          {errors.username && <div className="form-error">{errors.username}</div>}
        </div>
        <div className="form-row">
          <label className="form-label">Email</label>
          <input className="form-input" name="email" value={email} onChange={handleChange} />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>
        <div className="form-row">
          <label className="form-label">Password</label>
          <input className="form-input" name="password" type="password" value={password} onChange={handleChange} />
          {errors.password && <div className="form-error">{errors.password}</div>}
        </div>
        <div className="form-actions">
          <button className="btn" type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}
