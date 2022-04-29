import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalReset from '../../global/GlobalReset';
import GlobalTypography from '../../global/GlobalTypography';
import App from './App';
import '../../styles/index.css';

createRoot(document.getElementById('root')).render(
  <>
    <GlobalReset />
    <GlobalTypography />

    <App />
  </>
);
