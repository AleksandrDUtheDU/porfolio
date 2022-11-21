import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { theme } from '../theme/Theme'
import SocialPanel from '../socialPanel/SocialPanel';
import NavState from '../hamburger/navState';
import MainMenu from '../hamburger/mainMenu';

import Head from '../header/Head';
import ForMe from '../forMe/ForMe';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Prices from '../prices/Prices';
import Contact from '../contact/Contact';

import Politics from '../politics/Politics';

function MainPage() {
  const isNotebook = useMediaQuery({
    query: theme.media.notebook
  })

  return (
    <>
      {isNotebook ? '' : <SocialPanel />}
      <NavState>
        <MainMenu />
      </NavState>
      <Head />
      <ForMe />
      <Experience />
      <Skills />
      <Portfolio />
      <Prices />
      <Contact />

    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy/" element={<Politics />} />
      </Routes>
    </Router>
  );
}

export default App;
