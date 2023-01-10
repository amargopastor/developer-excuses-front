import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const appRoot = document.getElementById('app-root') as Element;
const root = createRoot(appRoot);

root.render(<App />);
