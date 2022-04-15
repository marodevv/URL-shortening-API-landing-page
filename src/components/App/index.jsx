import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalReset from '/src/global/GlobalReset';
import GlobalTypography from '/src/global/GlobalTypography';
import App from './App';
import '/src/styles/index.css';

createRoot(document.getElementById('root')).render(
  <>
    <GlobalReset />
    <GlobalTypography />

    <App />
  </>
);
