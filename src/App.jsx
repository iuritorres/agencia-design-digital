import { useState } from 'react';
import { BannerSection } from './components/bannerSection/';
import { Footer } from './components/Footer';
import { Header } from './components/Header/';
import { WorkXPSection } from './components/WorkXPSection/';
import './index.css';

const App = () => {

  const [isDarkTheme, setisDarkTheme] = useState(false);

  const changeTheme = () => {
    setisDarkTheme(!isDarkTheme);
    console.log(isDarkTheme)
  };

  return (
    <>
      <Header changeTheme={changeTheme} theme={isDarkTheme} />
      <BannerSection theme={isDarkTheme} />
      <WorkXPSection theme={isDarkTheme} />
      <Footer theme={isDarkTheme} />
    </>
  );
};

export default App;
