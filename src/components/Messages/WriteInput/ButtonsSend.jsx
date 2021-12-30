import * as React from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useDispatch} from "react-redux";


export default function BasicTextFields({write, setWrite}) {
    const dispatch = useDispatch();
    const handleAddMessage = () => {
        // dispatch(addMessage())
    }

    return (
            <div className="write-icons">
                <button>
                    <AttachFileIcon/>
                </button>
                <button>
                    <SwitchTransition>
                        <CSSTransition key={write} classNames="fade">
                            {write ?
                                <SendIcon onClick={handleAddMessage}/>
                                :
                                <KeyboardVoiceIcon/>
                            }
                        </CSSTransition>
                    </SwitchTransition>
                </button>
            </div>
    );
}
