import Head from '../header/Head';
import SocialPanel from '../socialPanel/SocialPanel';
import NavState from '../hamburger/navState';
import MainMenu from '../hamburger/mainMenu';
import ForMe from '../forMe/ForMe';
import MySoftSkill from '../mySoftSkill/MySoftSkill';
import MyHardSkill from '../myHardSkill/MyHardSkill';
import MyWorks from '../myWorks/MyWorks';

function App() {
  return (
    <div className="App">
      <SocialPanel />
      <NavState>
        <MainMenu />
      </NavState>
      <Head />
      <ForMe />
      <MySoftSkill />
      <MyHardSkill />
      <MyWorks />
    </div>
  );
}

export default App;
