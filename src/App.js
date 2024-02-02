import { HashRouter, Routes, Route } from "react-router-dom";
import LandigPage from "./landingPage/LandingPage";
import AuthorizationUser from "./signup&in/AuthorizationUser/AuthorizationUser";
import { useEffect, useState } from "react";
import UserContext from "./contexts/userContext";
import ScrollToTop from "./ScrollToTop";
import Dashboard from "./Dashboard/Dashboard";
import FrontEndData from "./DataSection/FrontEnd";
import GraphContext from "./contexts/graphContext";
import PrepForWork from "./DataSection/PrepForWork";

function App() {
  useEffect(() => {
    document.title = "TaskMaster2.0";
  }, []);
  const [user, setUser] = useState(null);
  const values = { user, setUser };
  const graphValues = { FrontEndData, PrepForWork };
  const size = new Blob(Object.values(localStorage)).size;
  console.log("5MB or 5 000 000/", size);
  return (
    <HashRouter>
      <UserContext.Provider value={values}>
        <GraphContext.Provider value={graphValues}>
          <div>
            <ScrollToTop />
            <Routes>
              <Route index path="/" element={<LandigPage />} />
              <Route path="/auth/*" element={<AuthorizationUser />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </GraphContext.Provider>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
