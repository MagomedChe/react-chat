import Contacts from "./components/Contacts";
import Profile from "./components/Profile";
import Messages from "./components/Messages";

function App() {
  return (
    <div className="App">
      <div className="main">

        <Contacts />
        <Messages />
        <Profile />
      </div>
    </div>
  );
}

export default App;
