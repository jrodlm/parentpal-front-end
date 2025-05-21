import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Login failed');
      }

      const data = await res.json();
      console.log('Login successful:', data);

      // ✅ Store token if needed
      localStorage.setItem('token', data.token);

      setSuccess(true);
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Log In</button>

      {/* ✅ Success Message */}
      {success && <p style={{ color: 'green' }}>✅ Login successful!</p>}

      {/* ❌ Error Message */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </form>
  );
}
