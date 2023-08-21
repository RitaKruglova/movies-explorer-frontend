import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}
export default App;
