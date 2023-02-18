import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Map from './Componets/Map.js';
import Menu from './Componets/Menu.js';
import reportWebVitals from './reportWebVitals';
import Testimonials from './Componets/Testimonials.js';
import Vision from './Componets/Vision.js';
import Static from './Componets/Static.js';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <Static/>
   <Vision/>
   
   <Menu/>
   <Testimonials/>
<Map/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
