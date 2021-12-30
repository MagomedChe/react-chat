import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import ButtonSend from './ButtonsSend'

export default function BasicTextFields() {
    const [write, setWrite] = useState('');

    return (
        <div className="write">
            <Box
                component="form"
                sx={{
                    "& > :not(style)": {  width: "100%"},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="Write messages"
                    placeholder="Введите сообщение"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {setWrite(e.target.value)}}
                    value={write}
                />
            </Box>
            <div className="write-icons">
                <ButtonSend write={write}/>
            </div>
        </div>

    );
}
