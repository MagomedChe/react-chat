import Contacts from "./components/Contacts";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import { useState } from "react";
import { Routes, Route,  } from "react-router-dom";

function App() {
  const [activeProfile, setActiveProfile] = useState(false);
  return (
    <div className="App">
      <div className="main">
        <Contacts />
        <Routes>
          <Route path="/:_id" element={
            <Messages
                activeProfile={activeProfile}
                setActiveProfile={setActiveProfile}
            />
          }/>
        </Routes>
        <Profile
          activeProfile={activeProfile}
          setActiveProfile={setActiveProfile}
        />
      </div>
    </div>
  );
}

export default App;
