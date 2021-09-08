import Contacts from "./components/Contacts";
import Chat from "./components/Chat";
import Profile from "./components/Profile";

function App() {



  return (
    <div className="App">
      <div className="main">
        <Contacts/>
        <Chat/>
        <Profile/>
      </div>
    </div>
  );
}

export default App;
