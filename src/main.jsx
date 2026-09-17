import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Styles — order matters (tokens → base → components → responsive)
import './styles/tokens.css';
import './styles/base.css';
import './styles/cursor.css';
import './styles/navbar.css';
import './styles/drawer.css';
import './styles/layout.css';
import './styles/hero.css';
import './styles/marquee.css';
import './styles/intro.css';
import './styles/work.css';
import './styles/toolkit.css';
import './styles/timeline.css';
import './styles/contact.css';
import './styles/responsive.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);