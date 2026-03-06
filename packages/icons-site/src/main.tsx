import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { onLCP, onINP, onCLS } from 'web-vitals/attribution';
import App from './App.tsx';

onCLS(console.log);
onINP(console.log);
onLCP(console.log);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
