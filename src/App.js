import { HashRouter, Routes, Route } from "react-router-dom";
import LandigPage from './landingPage/LandingPage';
import AuthorizationUser from "./signup&in/AuthorizationUser/AuthorizationUser";
import { useState } from "react";
import UserContext from './userContext';
import ScrollToTop from './ScrollToTop';
import Dashboard from "./Dashboard/Dashboard";

function App() {
  const [goal, setGoal] = useState("")
  const [children, setChildren] = useState([])
  const graphData = {
    "name": goal,
    "children": [
      {
        "name": children,
        "children": []
      }
    ]
  }
  const [user, setUser] = useState(null)
  const validUser = JSON.parse(localStorage.getItem("user"))
  const values = { user, setUser, validUser, graphData, setGoal, setChildren }

  return (
    <HashRouter>
      <UserContext.Provider value={values}>
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
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
