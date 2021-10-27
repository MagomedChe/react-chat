import Contacts from "./components/Contacts";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import { useState } from "react";
import { Route } from "react-router-dom";

function App() {
  const [activeProfile, setActiveProfile] = useState(false);
  return (
    <div className="App">
      <div className="main">
        <Contacts />
        <Route path="/:_id">
          <Messages
            activeProfile={activeProfile}
            setActiveProfile={setActiveProfile}
          />
        </Route>

        <Profile
          activeProfile={activeProfile}
          setActiveProfile={setActiveProfile}
        />
      </div>
    </div>
  );
}

export default App;
