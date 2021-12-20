import React, { useEffect, useRef } from 'react';
import MainPage from './Pages/MainPage';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 400 });
    AOS.refresh();
    window.addEventListener('hello', function (event) {
      window.scrollTo({ top: 2, left: 0, behavior: 'smooth' });
    });
    window.dispatchEvent(new Event('hello'));
  }, []);
  return <MainPage />;
};

export default React.memo(App);
