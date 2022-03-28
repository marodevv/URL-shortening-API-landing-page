import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalReset from '../../global/GlobalReset';
import GlobalTypography from '../../global/GlobalTypography';
import '../../styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <GlobalReset />
    <GlobalTypography />
    <App />
  </>
);
