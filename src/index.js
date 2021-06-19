import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactForm from './Components/Reach/contactFormComponent'
import Footer from './Components/Footer/footerComponent';
// import MainHead from './Containers/MainHead';

ReactDOM.render(
  <React.StrictMode>
    <ContactForm />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
