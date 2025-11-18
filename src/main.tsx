import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Toaster />
    <App />
  </Router>,
);
