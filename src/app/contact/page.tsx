"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-main-dark-blue py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          Contactez-nous
        </h1>

        <div className="max-w-2xl mx-auto bg-bg-dark-blue p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-txt-soft-white mb-2">Nom</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg bg-main-dark-blue text-txt-soft-white"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-txt-soft-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-main-dark-blue text-txt-soft-white"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-txt-soft-white mb-2">Sujet</label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 rounded-lg bg-main-dark-blue text-txt-soft-white"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-txt-soft-white mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 rounded-lg bg-main-dark-blue text-txt-soft-white"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
