import React from 'react';
import { brand } from '../content.js';

export default function Footer() {
  return <footer className="footer">© {new Date().getFullYear()} {brand}. Tous droits réservés.</footer>;
}
