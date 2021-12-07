import React from 'react';
import SearchMessage from "./SearchMessage";
import IconProfile from "./IconProfile";
import {useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader"

function ChatHeader({ activeProfile, setActiveProfile, contactId }) {
    const loading = useSelector((state) => state.messages.loading);


    // const contacts = useSelector((state) => state.contacts.contacts)
    //     .filter(contacts => contacts._id === contactId)
    //     .map(contact => contact);
    //
    // console.log(contacts)

    return (
        <div className="chat-header">
            <SearchMessage />
            {loading ? (
                <div className="preloader">
                    <Preloader size="5" />
                </div>

            ) : (
                <div className="chat-name">

                </div>
            )}

            <div
                className="iconProfile"
                onClick={() => setActiveProfile(!activeProfile)}
            >
                <IconProfile />
            </div>
        </div>
    );
}

export default ChatHeader;