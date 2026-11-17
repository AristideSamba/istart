import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../content.js';

export default function Services() {
  return (
    <section className="section">
      <h1>Nos services</h1>
      {services.map((s) => (
        <article className="card service-card" key={s.title}>
          <img className="service-card-image" src={s.image} alt="" />
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </article>
      ))}
      <Link to="/contact" className="btn">Nous contacter</Link>
    </section>
  );
}
