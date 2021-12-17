import React, { useEffect } from 'react';
import MainPage from './Pages/MainPage';
import AOS from 'aos';

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return <MainPage />;
};

export default App;
