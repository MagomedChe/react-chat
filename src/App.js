import Contacts from "./components/Contacts";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import {useState} from "react";

function App() {
    const [activeProfile, setActiveProfile] = useState(false);
  return (
    <div className="App">
      <div className="main">
        <Contacts />
        <Messages
          activeProfile={activeProfile}
          setActiveProfile={setActiveProfile}
        />
        <Profile
            activeProfile={activeProfile}
            setActiveProfile={setActiveProfile}
        />
      </div>
    </div>
  );
}

export default App;
