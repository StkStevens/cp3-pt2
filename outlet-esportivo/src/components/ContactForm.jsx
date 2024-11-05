import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensagem enviada:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-lg shadow-lg space-y-4">
      <input name="name" type="text" placeholder="Nome" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <textarea name="message" placeholder="Mensagem" value={formData.message} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">Enviar</button>
    </form>
  );
};

export default ContactForm;