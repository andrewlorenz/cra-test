import { useState } from 'react';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import HomePage from './HomePage';

const Paged = () => {

  const [ page, setPage ] = useState('home');

  switch (page) {
    case 'home': return <HomePage goto={setPage} />;
    case 'about': return <AboutPage goto={setPage} />;
    case 'contact': return <ContactPage goto={setPage} />;
  }
}

export default Paged;
