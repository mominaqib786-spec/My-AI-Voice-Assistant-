
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Register Service Worker for PWA / Install capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(registration => {
      console.log('JARVIS_CORE: ServiceWorker registered');
    }).catch(err => {
      console.log('JARVIS_CORE: ServiceWorker registration failed: ', err);
    });
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
// Removed StrictMode to ensure stability on low-end mobile devices and faster startup
root.render(<App />);
