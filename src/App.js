import './App.css';
import TopHeader from './component/TopHeader';
import BottomHeader from './component/BottomHeader';
import TopBanner from './component/TopBanner';
import WelcomePart from './component/WelcomePart';
import ExperiencePart from './component/ExperiencePart';
import WorkContent from './component/WorkContent';
import Choose from './component/Choose';
import RoofTypes from './component/RoofTypes';
import ConcreteTiles from './component/ConcreteTiles';
import Review from './component/Review';
import Follow from './component/Follow';
import NewsLetter from './component/NewsLetter';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <TopHeader/>
      <BottomHeader/>
      <TopBanner/>
      <WelcomePart/>
      <ExperiencePart/>
      <WorkContent/>
      <Choose/>
      <RoofTypes/>
      <ConcreteTiles/>
      <Review/>
      <Follow/>
      <NewsLetter/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
