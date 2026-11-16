import React from 'react';
import { Link } from 'react-router-dom';
import { hero, services } from '../content.js';

export default function Home() {
  return (
    <>
      <div className="hero">
        <div className="section">
          <h1>{hero.title}</h1>
          <p className="lead">{hero.text}</p>
          <Link to="/contact" className="btn">Demander un devis</Link>
        </div>
      </div>
      <section className="section">
        <h2>Ce que nous faisons</h2>
        {services.map((s) => (
          <div className="row" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}
