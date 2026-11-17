import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
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
        <div className="services-list">
          {services.map((s) => (
            <Reveal key={s.title}>
              <article
                className="service"
                style={{ backgroundImage: `url(${s.image}), linear-gradient(135deg, #0f8b8d, #12202f)` }}
              >
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Link to="/contact" className="btn">En savoir plus</Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}