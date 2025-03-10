import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Use only this import
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './common/ThemeContext.jsx';

// Correct way to use createRoot
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
