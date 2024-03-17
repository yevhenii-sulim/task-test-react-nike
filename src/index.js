import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/task-test-react-nike">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
