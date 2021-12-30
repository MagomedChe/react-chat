import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import {CSSTransition, SwitchTransition} from "react-transition-group";

export default function BasicTextFields(write, setWrite) {

    return (
            <div className="write-icons">
                <button>
                    <AttachFileIcon/>
                </button>
                <button>
                    <SwitchTransition>
                        <CSSTransition key={write} classNames="fade">
                            {write ?  <KeyboardVoiceIcon/> : <SendIcon/>}
                        </CSSTransition>
                    </SwitchTransition>
                </button>
            </div>



    );
}
