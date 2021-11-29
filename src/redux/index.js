import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger/src";
import {contactReducer} from "./ducks/contactsReducer";
import {messagesReducer} from "./ducks/messagesReduser";
import {applicationReduser} from "./ducks/applicationReduser";

const logger = createLogger({
    diff: true,
    collapsed: true
});

const rootReducer = combineReducers({
    contacts: contactReducer,
    messages: messagesReducer,
    myId: applicationReduser,
})



const store = createStore(rootReducer, applyMiddleware(thunk,logger));

export default store;

