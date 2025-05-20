import react, { useState } from 'react';


export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        e.preventDefault({...formData, [e.EventTarget.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/api/auth/login',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            console.log('Login response:', err);
        } catch (err) {

        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <input name="email" placeholder="Email" type="email" onCanPlay={handleChange} required />
            <input name="password" placeholder="password" type="password" onChange={handleChange} required/>
            <button type="submit">Log In</button>
        </form>
    );
}