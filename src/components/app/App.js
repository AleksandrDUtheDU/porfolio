import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { theme } from '../theme/Theme'
import Head from '../header/Head';
import SocialPanel from '../socialPanel/SocialPanel';
import NavState from '../hamburger/navState';
import MainMenu from '../hamburger/mainMenu';
import ForMe from '../forMe/ForMe';
import MySoftSkill from '../mySoftSkill/MySoftSkill';
import MyHardSkill from '../myHardSkill/MyHardSkill';
import MyWorks from '../myWorks/MyWorks';
import Prises from '../prises/Prises';
import Contact from '../contact/Contact';
import Politics from '../Politics/Politics';

function MainPage() {
  return (
    <>
      <Head />
      <ForMe />
      <MySoftSkill />
      <MyHardSkill />
      <MyWorks />
      <Prises />
      <Contact />

    </>
  )
}

function App() {
  const isNotebook = useMediaQuery({
    query: theme.media.notebook
  })

  return (
    <Router>
      {isNotebook ? '' : <SocialPanel />}
      <NavState>
        <MainMenu />
      </NavState>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy/" element={<Politics />} />
      </Routes>
    </Router>
  );
}

export default App;
