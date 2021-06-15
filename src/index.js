import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactForm from './Containers/ContactFrom.js';
import Footer from './Containers/Footer.js';

ReactDOM.render(
  <React.StrictMode>
    <ContactForm/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
