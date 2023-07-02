import { HashRouter } from "react-router-dom";
import LandigPage from './landingPage/LandingPage';
import Footer from './footer/Footer';
function App() {
  return (
    <HashRouter>
      <div>
        <LandigPage />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
