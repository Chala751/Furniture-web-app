import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../componentes/ui/input';
import { Button } from '../componentes/ui/button';
import { toast } from 'sonner';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('furnistyle-user'));

    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      toast.success('Login successful!');
      navigate('/');
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1E0C6] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-[#6B4F3C] mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-[#6B4F3C] mb-1">Email</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-[#6B4F3C]"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-[#6B4F3C] mb-1">Password</label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="border-[#6B4F3C]"
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
        </div>

        <Button
          type="submit"
          className="w-full bg-[#6B4F3C] hover:bg-[#5a3f30] text-white cursor-pointer"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
