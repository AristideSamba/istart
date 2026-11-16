import React, { useState } from 'react';
import { post } from '../api.js';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await post('/contact-messages', form);
      setForm({ nom: '', email: '', message: '' });
      setStatus('Message envoyé. Nous vous répondons sous 24 h.');
    } catch {
      setStatus("Envoi impossible. Vérifiez que l'API tourne puis réessayez.");
    }
  };

  return (
    <section className="section">
      <h1>Contact</h1>
      <form onSubmit={submit} className="form">
        <label>Nom<input name="nom" value={form.nom} onChange={change} required /></label>
        <label>Email<input name="email" type="email" value={form.email} onChange={change} required /></label>
        <label>Votre besoin<textarea name="message" rows="5" value={form.message} onChange={change} required /></label>
        <button className="btn" type="submit">Envoyer</button>
      </form>
      {status && <p role="status" className="status">{status}</p>}
    </section>
  );
}
