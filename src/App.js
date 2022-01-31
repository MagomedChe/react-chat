import Contacts from './components/Contacts';
import Profile from './components/Profile';
import Messages from './components/Messages';
import {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {loadContacts} from "./redux/ducks/contactsReducer";
import {loadMyId} from "./redux/ducks/applicationReduser";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadMyId());
    }, [dispatch]);
  const [activeProfile, setActiveProfile] = useState(false);

  return (
    <div className="App">
      <div className="main">
        <Contacts />
        <Routes>
          <Route
            path="/"
            element={
              <div className="preloader">
                Please, select a chat to start messaging
              </div>
            }
          />
          <Route
            path="/:_id"
            element={
              <Messages
                  key={id}
                activeProfile={activeProfile}
                setActiveProfile={setActiveProfile}
              />
            }
          />
        </Routes>
        <CSSTransition
          in={activeProfile}
          timeout={400}
          unmountOnExit
          className="my-node"
        >
          <Routes>
            <Route
              path="/:id"
              element={
                <Profile
                  activeProfile={activeProfile}
                  setActiveProfile={setActiveProfile}
                />
              }
            />
          </Routes>
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
