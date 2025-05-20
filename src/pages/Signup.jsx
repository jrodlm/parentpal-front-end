import react, { useState } from 'react'

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/auth/signuo', {
               method: 'POST',
               headers: { 'Content-TYpe': 'application/json'},
               body: JSON.stringify(formData)
            });
             
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error('Singnup error', err);
        }
    };


    return (
        <form  onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
        </form>

    );
       
    }