import { HashRouter, Routes, Route } from "react-router-dom";
import LandigPage from './landingPage/LandingPage';
import AuthorizationUser from "./signup&in/AuthorizationUser/AuthorizationUser";
import { useState } from "react";
import UserContext from './contexts/userContext';
import ScrollToTop from './ScrollToTop';
import Dashboard from "./Dashboard/Dashboard";
import FrontEndData from "./DataSection/FrontEnd";
import GraphContext from './contexts/graphContext';
import BackEnd from './DataSection/BackEnd';

function App() {
  const [user, setUser] = useState(null)
  const validUser = JSON.parse(localStorage.getItem("existUser"))
  const values = { user, setUser, validUser }
  const graphValues = { FrontEndData, BackEnd }

  const size = new Blob(Object.values(localStorage)).size;
	console.log(size);

  return (
    <HashRouter>
      <UserContext.Provider value={values}>
        <GraphContext.Provider value={graphValues}>
          <div>
            <ScrollToTop />
            <Routes>
              <Route index path="/" element={<LandigPage />} />
              <Route path="/auth/*" element={<AuthorizationUser />} />
              {validUser || user ?
                <Route path="/dashboard" element={<Dashboard />} />
                :
                null
              }
            </Routes>
          </div>
        </GraphContext.Provider>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
