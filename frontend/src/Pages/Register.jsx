import { useState } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', form);
      if (res.data.success) {
        redirect('/login'); 
      } else {
        alert('Registration failed');
      }
    } catch (err) {
      alert('Error during register');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
