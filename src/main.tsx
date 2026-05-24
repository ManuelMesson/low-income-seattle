import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/i18n';
import { App } from '@/App';
import { ThemeProvider } from '@/providers/ThemeProvider';
import '@/index.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
