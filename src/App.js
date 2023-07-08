import { HashRouter, Routes, Route } from "react-router-dom";
import LandigPage from './landingPage/LandingPage';
import AuthorizationUser from "./signup&in/AuthorizationUser/AuthorizationUser";
import { useState } from "react";
import UserContext from './userContext';
import ScrollToTop from './ScrollToTop';
import Dashboard from "./Dashboard/Dashboard";
import FrontEndData from "./DataSection/FrontEnd";
import DataContext from './dataContext';

function App() {

  const [user, setUser] = useState(null)
  const validUser = JSON.parse(localStorage.getItem("existUser"))
  const values = { user, setUser, validUser }
  return (
    <HashRouter>
      <UserContext.Provider value={values}>
        <DataContext.Provider value={FrontEndData}>
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
        </DataContext.Provider>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
