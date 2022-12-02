import { BannerSection } from './components/bannerSection/';
import { Footer } from './components/Footer';
import { Header } from './components/Header/';
import { WorkXPSection } from './components/WorkXPSection/';
import './index.css';

const App = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <WorkXPSection />
      <Footer />
    </>
  );
};

export default App;
