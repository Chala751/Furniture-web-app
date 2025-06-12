import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../componentes/ui/button';
import { Input } from '../componentes/ui/input';
import { toast } from 'sonner';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.password || formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Store user data in localStorage
    localStorage.setItem('furnistyle-user', JSON.stringify(formData));
    toast.success('Registered successfully!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1E0C6] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-[#6B4F3C] mb-6 text-center">Register</h2>

        <div className="mb-4">
          <label className="block text-[#6B4F3C] mb-1">Name</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-[#6B4F3C]"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

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

        <div className="mb-4">
          <label className="block text-[#6B4F3C] mb-1">Password</label>
          <Input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="border-[#6B4F3C]"
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-[#6B4F3C] mb-1">Gender</label>
          <select
            value={formData.gender}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            className="w-full border rounded px-3 py-2 border-[#6B4F3C] text-[#6B4F3C]"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
        </div>

        <Button
          type="submit"
          className="w-full bg-[#6B4F3C] hover:bg-[#5a3f30] text-white cursor-pointer"
        >
          Register
        </Button>
      </form>
    </div>
  );
}
